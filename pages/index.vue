<script setup>
const startPosition = ref(true);

onMounted(() => {
      startPosition.value = false
    }
)
</script>

<template>
  <div class="flex w-full justify-center space-x-30">
    <div class="flex flex-col max-w-xl my-auto justify-items-center">
      <p
          class="intro text-8xl duration-300 delay-500"
          :class="{ '-translate-x-100 opacity-0': startPosition === true }"
      >Hi,</p>
      <p
          class="intro text-8xl text-center duration-500 delay-700"
          :class="{ '-translate-x-150 opacity-0': startPosition === true }"
      >I'm Tanner.</p>
      <p
          class="duration-500 delay-1200"
          :class="{ 'opacity-0': startPosition === true }"
      >I'm a web developer
        who thrives on turning ideas into functional, elegant solutions. With experience in
        JavaScript, Vue, Nuxt, and Django development, I’ve built
        multiple professional websites as well as collaborated in start-up environments.
        I’m passionate about clean code, innovative problem-solving, and creative design.
        Let’s build the future, one line of code at a time!</p>
    </div>
    <div class="w-fit justify-items-center">
      <img
          ref="image"
          src="~/assets/img/tannercircle.png"
          alt="Tanner"
          class="duration-800 ease-out delay-100 w-lg min-w-md"
          :class="{ 'translate-x-100 opacity-0': startPosition === true }"/>
    </div>
  </div>

</template>