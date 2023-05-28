<template>
  <section>
    <p>Questa è la pagina che si vede a /admin. Con il template admin</p>
  </section>
</template>

<script setup>
// PER CAMBIARE IL LYOUT CHE DI DEFAULT E' "DEFAULT"
definePageMeta({
  layout: "admin",
  middleware: "auth",
});
</script>
