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

const isPressed = ref(false)

const textColor = computed(() => {
  return isPressed.value
    ? 'bg-blue-700 text-white' : 'bg-blue-300'
})

</script>

<template>
  <a
      :href="props.link"
      target="_blank"
      class="py-3 px-5 w-90 lg:hover:bg-blue-700 lg:hover:w-full lg:hover:text-white
      focus:outline-none rounded-2xl duration-300"
      :class="textColor"
      @mousedown="isPressed = true"
      @mouseup="isPressed = false"
  >
    {{props.title}}
  </a>
</template>

<style scoped>

</style>