// QUESTO MIDDLEWARE VIENE ESEGUITO A OGNI APERTURA DI PAGINA
export default defineNuxtRouteMiddleware(() => {
    console.log('running global middleware')
  })
  