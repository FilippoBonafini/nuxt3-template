export default defineNuxtRouteMiddleware((to, from) => {
    if(from.name !== 'index'){
        return navigateTo('/errors/403')
    }
  })