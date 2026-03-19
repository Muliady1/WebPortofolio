export default defineNuxtRouteMiddleware((to, from) => {

  to.meta.scrollToTop = false
})
