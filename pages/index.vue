<script setup>
const startPosition = ref(true);

onMounted(() => {
      startPosition.value = false
    }
)
</script>

<template>
  <div class="flex max-lg:flex-col max-lg:mt-4 max-lg:gap-6 w-full lg:gap-4 justify-center h-screen items-center px-4 max-lg:min-h-[850px]">
    <div class="flex flex-col w-5/6 max-w-xl space-y-2 justify-items-center">
      <p
          class="intro text-6xl md:text-8xl duration-300 delay-500"
          :class="{ '-translate-x-100 opacity-0': startPosition === true }"
      >Hi,</p>
      <p
          class="intro text-6xl md:text-8xl text-center duration-500 delay-700"
          :class="{ '-translate-x-150 opacity-0': startPosition === true }"
      >I'm Tanner.</p>
      <p
          class="duration-500 delay-1200 indent-4"
          :class="{ 'opacity-0': startPosition === true }"
      >I'm a web developer
        who thrives on turning ideas into functional, elegant solutions. With experience in
        JavaScript, Vue, Nuxt, and Django development, I’ve built
        multiple professional websites as well as collaborated in start-up environments.
        I’m passionate about clean code, innovative problem-solving, and creative design.
        Let’s build the future, one line of code at a time!</p>
    </div>
    <div class="max-md:flex w-fit justify-items-center max-md:justify-center">
      <img
          ref="image"
          src="~/assets/img/tannercircle.png"
          alt="Tanner"
          class="duration-800 ease-out delay-100 max-w-lg w-3/4 lg:w-lg lg:min-w-md"
          :class="{ 'translate-x-100 opacity-0': startPosition === true }"/>
    </div>
  </div>

</template>