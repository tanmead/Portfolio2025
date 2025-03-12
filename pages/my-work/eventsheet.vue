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
  <div class="min-w-fit md:w-full duration-300 ease-out mb-20 max-md:mt-20"
       :class="{ 'translate-y-20 opacity-0': startPosition === true }"
  >
    <div class="flex w-full justify-center items-center md:mt-30">
      <h1 class="text-center mb-4 md:mb-20 text-2xl md:text-5xl">Product Development Intern @ Eventsheet</h1>
    </div>
    <div class="bg-gray-400 w-full md:w-7xl mx-auto rounded-2xl py-2 px-4 md:py-10 md:px-20 mb-20">
      <h2 class="text-center mb-2 md:mb-10 text-2xl md:text-4xl font-bold">Multiple Creative Component</h2>
      <div
          class="flex max-md:flex-col w-full justify-center max-md:gap-2 md:gap-10 mb-2 md:mb-20"
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
        </BaseCard>
        <BaseCard>
          <h3>Lessons Learned: </h3>
          <ol class="list-decimal pl-4">
            <li>Gained knowledge of Nuxt.js routing and component creation.</li>
            <li>Practiced design matching in development and the importance of branding.</li>
            <li>Used custom API to save, update, and delete media assets.</li>
            <li>Learned about integrating a new component into an existing code base.</li>
          </ol>
        </BaseCard>
      </div>

      <video autoplay loop src="~/assets/videos/multiple-creative-demo.mp4" type="video/mp4"
             class="w-full max-w-7xl">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="bg-gray-400 w-full md:w-7xl mx-auto rounded-2xl py-2 px-4 md:py-10 md:px-20 mb-20">
      <h2 class="text-center mb-2 md:mb-10 text-2xl md:text-4xl font-bold">Spline Globe</h2>
      <div
          class="flex max-md:flex-col w-full justify-center max-md:gap-2 md:gap-10 mb-2 md:mb-20"
          :class="{ 'translate-y-20 opacity-0': startPosition === true }"
      >
        <BaseCard>
          <h3>Objective: </h3>
          <p>Integrate a 3D globe created with Spline into all auth layouts such as login, signup, request, and reset pages.</p>
          <h3>Role: </h3>
          <p>Developer</p>
          <h3>Tools: </h3>
          <p>Nuxt.js, Vue.js, Spline, Figma</p>
        </BaseCard>
        <BaseCard>
          <h3>Key Features: </h3>
          <ol class="list-decimal pl-4">
            <li>Standalone component that can be integrated into multiple pages in the app.</li>
            <li>Component consists of a reactive state for user interaction.</li>
            <li>Utilizes spline runtime tool to inject 3D model into a canvas element.</li>
            <li>Logo color and styling updated on auth pages.</li>
          </ol>
        </BaseCard>
        <BaseCard>
          <h3>Lessons Learned: </h3>
          <ol class="list-decimal pl-4">
            <li>Learned about spline integration with Nuxt.js.</li>
            <li>Practiced using async functions with JavaScript.</li>
            <li>Gained experience with reactive elements.</li>
            <li>Furthered my understanding of Nuxt.js components and how to structure them.</li>
          </ol>
        </BaseCard>
      </div>

      <video autoplay loop src="~/assets/videos/spline-globe.mp4" type="video/mp4"
             class="w-full max-w-7xl">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<style scoped>

h1 {
  font-family: 'Roboto Thin', sans-serif;
}

h2 {
  font-family: 'Roboto Extra Light', sans-serif;
}

h3 {
  font-family: 'Roboto Extra Light', sans-serif;
  font-size: 1.5rem;
}

p, li {
  margin-bottom: 1rem;
}
</style>