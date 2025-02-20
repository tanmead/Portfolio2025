<script setup>

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  }
})
</script>

<template>
  <a
      :href="props.link"
      target="_blank"
      class="py-3 px-5 w-90 bg-blue-300 hover:bg-blue-700 hover:w-3/4 hover:text-white focus:outline-none rounded-2xl duration-300"
  >
    {{props.title}}
  </a>
</template>

<style scoped>

</style>