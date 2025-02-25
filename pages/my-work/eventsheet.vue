<script setup>
const startPosition = ref(true)
const route = useRoute()

watch(() => route.path, (newPath) => {
      if (newPath === '/my-work/eventsheet') {
        startPosition.value = true
        setTimeout(() => {
          startPosition.value = false
        }, 50)
      }
    }, { immediate: true }
)
</script>

<template>
  <div class="w-full duration-300 ease-out mb-20"
       :class="{ 'translate-y-20 opacity-0': startPosition === true }"
  >
    <h1 class="text-center mb-20">Product Development Intern @ Eventsheet</h1>
    <div class="bg-gray-400 w-7xl mx-auto rounded-2xl py-10 px-20 mb-20">
      <h2 class="text-center mb-10">Multiple Creative Component</h2>
      <div
          class="flex w-full justify-center space-x-10 mb-20"
          :class="{ 'translate-y-20 opacity-0': startPosition === true }"
      >
        <BaseCard>
          <h3>Objective: </h3>
          <p>Build a standalone component that can upload multiple mixed creative
            (photos and videos) so that users can see which combination of media
            has the best performing ad.</p>
          <h3>Role: </h3>
          <p>Developer</p>
          <h3>Tools: </h3>
          <p>Nuxt.js, Vue.js, Figma</p>
        </BaseCard>
        <BaseCard>
          <h3>Key Features: </h3>
          <ol class="list-decimal pl-4">
            <li>Has an upload button that will allow user to upload multiple files of relevant types.</li>
            <li>Shows list of thumbnails of items the user has uploaded.</li>
            <li>Gives the ability to delete media after it's been uploaded.</li>
            <li>Matches style and design of company branding.</li>
          </ol>

          <p></p>

        </BaseCard>
        <BaseCard>

        </BaseCard>
      </div>

      <video autoplay loop src="~/assets/videos/multiple-creative-demo.mp4" type="video/mp4"
             class="w-full max-w-7xl">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="bg-gray-400 w-7xl mx-auto rounded-2xl py-10 px-20 mb-20">
      <h2 class="text-center mb-10">Multiple Creative Component</h2>
      <div
          class="flex w-full justify-center space-x-10 mb-20"
          :class="{ 'translate-y-20 opacity-0': startPosition === true }"
      >
        <BaseCard>
          <h3>Objective: </h3>
          <p>Build a standalone component that can upload multiple mixed creative
            (photos and videos) so that users can see which combination of media
            has the best performing ad.</p>
          <h3>Role: </h3>
          <p>Developer</p>
          <h3>Tools: </h3>
          <p>Nuxt.js, Vue.js, Figma</p>
        </BaseCard>
        <BaseCard>
          <h3>Role</h3>
        </BaseCard>
        <BaseCard>

        </BaseCard>
      </div>

      <video autoplay loop src="~/assets/videos/multiple-creative-demo.mp4" type="video/mp4"
             class="w-full max-w-7xl">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<style scoped>

h1 {
  font-family: 'Roboto Thin', sans-serif;
  font-size: 3rem;
}

h2 {
  font-family: 'Roboto Extra Light', sans-serif;
  font-weight: 400;
  font-size: 2.2rem
}

h3 {
  font-family: 'Roboto Extra Light', sans-serif;
  font-size: 1.5rem;
}

p, li {
  margin-bottom: 1rem;
}
</style>