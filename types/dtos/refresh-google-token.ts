export interface RefreshGoogleTokenRequestDTO {
  client_id: string;
  client_secret: string;
  refresh_token: string;
  grant_type: string;
}

export interface RefreshGoogleTokenResponseDTO {
  accessToken: string;
  expires_in: number;
  scope: string;
  token_type: string;
  id_token: string;
}
