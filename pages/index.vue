<template>
  <div>
    <h1>Questa è la index page</h1>
    <!-- IMPLEMENTO I DATI  -->
    <h2>{{ data.title }}</h2>
    <!-- AUTO IMPORTIAMO IL COMPONENTE E INSERIAMO DATI ALL'INTERNO DEL SUO SLOT  -->
    <AppAllert> Ed è auto importato! </AppAllert>
    <!-- /AUTO IMPORTIAMO IL COMPONENTE E INSERIAMO DATI ALL'INTERNO DEL SUO SLOT  -->
  </div>
</template>

<script setup>
// PRENDO I RISULTATI DAL FILE API
const { data } = await useFetch("/api/hello");
</script>
