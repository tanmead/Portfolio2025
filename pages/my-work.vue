<script setup lang="ts">
const startPosition = ref(true)
const route = useRoute()

watch(() => route.path, (newPath) => {
      if (newPath === '/my-work') {
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
      class="flex w-full justify-center space-x-20 duration-300 ease-out"
      :class="{ 'translate-y-20 opacity-0': startPosition === true }"
  >
    <div class="flex flex-col justify-center space-y-3 w-xl">
      <h3 class="text-6xl">
        My Work
      </h3>
      <WorkButton
          title="Product Development Intern for Eventsheet"
          link="https://eventsheet.com/"
      />
      <WorkButton
          title="My Github"
          link="https://github.com/tanmead"
      />
    </div>
    <div class="w-fit justify-items-center">
      <img src="~/assets/img/tannercircle3.png" alt="Tanner" class="w-lg min-w-md"/>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-family: "Roboto Extra Light";
}
</style>