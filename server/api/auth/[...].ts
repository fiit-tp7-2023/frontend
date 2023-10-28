import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';
import { NuxtAuthHandler } from '#auth';
import { RefreshGoogleTokenRequestDTO, RefreshGoogleTokenResponseDTO } from '~/types/dtos';
import { REFRESH_GOOGLE_TOKEN_URL } from '~/server/config/api';

const RUNTIME_CONFIG = useRuntimeConfig();

const refreshGoogleToken = async (token: JWT): Promise<JWT> => {
  const body: RefreshGoogleTokenRequestDTO = {
    client_id: RUNTIME_CONFIG.googleClientId,
    client_secret: RUNTIME_CONFIG.googleClientSecret,
    refresh_token: token.googleRefreshToken,
    grant_type: 'refresh_token',
  };

  const res = await $fetch<RefreshGoogleTokenResponseDTO>(REFRESH_GOOGLE_TOKEN_URL, {
    method: 'POST',
    body,
  });
  token.googleAccessToken = res.id_token;
  token.googleAccessTokenExpiresAt = Math.floor(Date.now() / 1000 + res.expires_in);

  return token;
};

export default NuxtAuthHandler({
  secret: RUNTIME_CONFIG.authSecret,
  pages: {
    signIn: '/project/login',
  },
  providers: [
    // @ts-expect-error
    GoogleProvider.default({
      clientId: RUNTIME_CONFIG.googleClientId,
      clientSecret: RUNTIME_CONFIG.googleClientSecret,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, account }) => {
      // On the first sign in with google, the account object will be available
      if (account) {
        token.googleAccessToken = account.id_token!;
        token.googleRefreshToken = account.refresh_token!;
        token.googleAccessTokenExpiresAt = account.expires_at!;
      }

      // If access token is valid, return the token
      if (Date.now() < (token.googleAccessTokenExpiresAt - 60) * 1000) return token;

      // Access token is about to expire in 1 minute, refresh it
      return refreshGoogleToken(token);
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 3600,
  },

  jwt: {
    maxAge: 3600,
  },
});
