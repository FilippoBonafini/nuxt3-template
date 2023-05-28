<template>
  <h1 class="h1">Questo è il post {{ route.params.id }}</h1>
  <p>Abbiamo un parametro personalizzato</p>
</template>
<script setup>
const route = useRoute();
// MOSTRIAMO IL PARAMETRO IN CONSOLE
console.log(route.params.id);
</script>
