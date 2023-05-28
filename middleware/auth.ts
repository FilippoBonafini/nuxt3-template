// QUESTO MIDDLEWARE VIENE ESEGUITO SOLO NELLE PAGINE DOVE VIENE CHIAMATO
export default defineNuxtRouteMiddleware((to, from) => {
    if(from.name !== 'index'){
        return navigateTo('/errors/403')
    }
  })