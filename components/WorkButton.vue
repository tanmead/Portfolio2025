<script setup>

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
    type: Boolean,
    default: true,
  }
})

const isPressed = ref(false)

const textColor = computed(() => {
  return isPressed.value
    ? 'bg-blue-700 text-white' : 'bg-blue-300'
})

const blankTarget = computed(() => {
  if (props.externalLink) {
    return "_blank"
  } else {
    return ""
  }
})

</script>

<template>
  <a
      :href="props.link"
      :target="blankTarget"
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