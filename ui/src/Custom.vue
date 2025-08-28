<script setup lang="ts">

   import { Button } from 'primevue';
  const props = defineProps({
     title: {
      type: String
     }
  })

</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation

    {{  props.title }}


    <Button>Hello world</Button>
  </p>
</template>

<style scoped></style>
