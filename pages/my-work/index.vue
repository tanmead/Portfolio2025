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
      class="flex w-full min-h-screen justify-center items-center
      lg:gap-20 duration-300 ease-out max-lg:flex-col max-lg:gap-6"
      :class="{ 'translate-y-20 opacity-0': startPosition === true }"
  >
    <div class="flex flex-col justify-center gap-3 lg:w-md">
      <h3 class="text-6xl">
        My Work
      </h3>
      <WorkButton
          title="Product Development Intern for Eventsheet"
          link="/my-work/eventsheet"
          :external-link=false
      />
      <WorkButton
          title="Github"
          link="https://github.com/tanmead"
      />
      <WorkButton
          title="LinkedIn"
          link="https://www.linkedin.com/in/tanner-mead/"
      />
    </div>
    <div class="max-md:flex max-md:justify-center w-fit justify-items-center">
      <img
          src="~/assets/img/tannercircle3.png"
          alt="Tanner"
          class="w-3/4 max-w-md lg:w-lg lg:min-w-md"
      />
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-family: "Roboto Extra Light";
}
</style>