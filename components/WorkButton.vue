<script setup>

import {boolean} from "yup";

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
  externalLink: {
    type: boolean,
    default: true,
  }
})
</script>

<template>
  <a
      v-if="externalLink"
      :href="props.link"
      target="_blank"
      class="py-3 px-5 w-90 bg-blue-300 hover:bg-blue-700 hover:w-5/6 hover:text-white focus:outline-none rounded-2xl duration-300"
  >
    {{props.title}}
  </a>
  <NuxtLink
      v-else
      :to="props.link"
      class="py-3 px-5 w-90 bg-blue-300 hover:bg-blue-700 hover:w-5/6 hover:text-white focus:outline-none rounded-2xl duration-300"
  >
    {{props.title}}
  </NuxtLink>
</template>

<style scoped>

</style>