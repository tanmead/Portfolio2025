<template>
  <div>
    <!--    Block to space content under NavBar-->
    <NavBar />
    <div class="mb-32"></div>
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>

<style>
nav {
  font-family: 'Roboto Extra Light', sans-serif;
  font-size: 18px;
  font-weight: bold;
}

.intro {
  font-family: 'Roboto Thin', sans-serif;
}

</style>