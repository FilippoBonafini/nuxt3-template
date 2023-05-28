<template>
  <div
    class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
  >
    <NuxtLink to="/">Template admin</NuxtLink>
  </div>
  <!-- QUESTO E' UNO SPAZIO PER INSERIRE DATI  -->
  <div class="min-h-screen"><slot /></div>
  <!-- /QUESTO E' UNO SPAZIO PER INSERIRE DATI  -->

  <!-- AUTO IMPORTIAMO IL COMPONENTE FOOTER  -->
  <AppFooter />
</template>
