<script setup>
const startPosition = ref(true)
const route = useRoute()

watch(() => route.path, (newPath) => {
      if (newPath === '/about') {
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
      class="flex w-full justify-center space-x-28 duration-300 ease-out"
      :class="{ 'translate-y-20 opacity-0': startPosition === true }"

  >
    <div class="w-fit justify-items-center">
      <img src="~/assets/img/tannercircle2.png" alt="Tanner" class="w-lg min-w-md"/>
    </div>
    <div class="flex flex-col justify-center space-y-3 max-w-xl">
      <h3 class="text-6xl">
        About Me
      </h3>
      <p>
        My journey into web development began in 2024, where I discovered my passion
        for coding and design. Since then, I’ve obtained a Full Stack Software Developer certification from the
        University of Memphis, worked as a product development intern with Eventsheet,
        and created numerous professional websites. Every project
        has taught me something new, and I’m constantly evolving to stay ahead in this
        fast-paced industry.
      </p>
      <p>
        What sets me apart is my ability to adapt to new technologies, connect with audiences through
        authentic storytelling, and my drive to deliver the best end product possible.
        I believe in designing with purpose, collaborative efforts, and continuous learning.
        I strive to bring this mindset into everything I do.
      </p>
      <p>
        I’m always open to new opportunities, collaborations, and conversations.
        Whether you’re looking to build a stunning website,
        create a brand that stands out, or add a developer to your team, I’d love to hear from you.
        Let’s create something amazing together!
      </p>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-family: "Roboto Extra Light";
}
</style>