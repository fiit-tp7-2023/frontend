export default defineNuxtRouteMiddleware((to, _) => {
  if (useRuntimeConfig().public.vercelEnv === 'preview' && to.path === '/project/login') {
    return navigateTo('/project');
  }
});
