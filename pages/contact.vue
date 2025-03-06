<script setup lang="ts">
const startPosition = ref(true)
const route = useRoute()

watch(() => route.path, (newPath) => {
      if (newPath === '/contact') {
        startPosition.value = true
        setTimeout(() => {
          startPosition.value = false
        }, 50)
      }
    }, { immediate: true }
)
</script>

<template>
  <div
      class="flex flex-col duration-300 ease-out min-h-screen justify-center"
      :class="{ 'translate-y-20 opacity-0': startPosition === true }"

  >
    <h3 class="text-center mb-9 text-4xl mt-8">
      Want to get in touch? I'd love to hear from you.
    </h3>
    <ContactForm />
  </div>
</template>

<style scoped>
h3 {
  font-family: "Roboto Extra Light";
}
</style>