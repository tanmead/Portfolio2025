<script setup>

const isNavBarActive = ref(false)
const hoveredIndex = ref(null)
const router = useRouter()
const navItems = [
  {
    'title': 'About Me',
    'link': '/about',
  },
  {
    'title': 'My Work',
    'link': '/my-work',
  },
  {
    'title': 'Contact',
    'link': '/contact',
  }
]

router.afterEach((to, from) => {
  isNavBarActive.value = false
})

function setHoveredIndex(index) {
  hoveredIndex.value = index
}

function resetHoveredIndex() {
  hoveredIndex.value = null
}

function toggleNav() {
  isNavBarActive.value = isNavBarActive.value === false;
  console.log(isNavBarActive.value)
}

</script>

<template>
  <header>
    <nav class="fixed top-0 left-0 w-full mb-10 bg-white">
      <div class="flex justify-between items-center px-10 py-2 border-b">
        <div class="flex">
          <a href="/"><img src="~/assets/img/logoname-black.svg" alt="logoname" class=""/></a>
        </div>
        <ul class="hidden lg:flex gap-44 mr-10">
          <li
              v-for="(item, index) in navItems"
              class=""
              :key="index"
              @mouseenter="setHoveredIndex(index)"
              @mouseleave="resetHoveredIndex"
              :class="{ 'duration-300 ease-in-out opacity-50': hoveredIndex !== null && hoveredIndex !== index,
                       'text-gray-800': hoveredIndex === index }"
          ><NuxtLink :to="item.link">{{ item.title }}</NuxtLink></li>
        </ul>
        <button
            type="button"
            class="lg:hidden"
            @click="toggleNav"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="w-full" :class="{'hidden': !isNavBarActive}">
        <ul class="flex flex-col text-center bg-black text-white">
          <li
              v-for="(item, index) in navItems"
              class="py-4 text-2xl"
              :key="index"
              @mouseenter="setHoveredIndex(index)"
              @mouseleave="resetHoveredIndex"
              :class="{ 'duration-300 ease-in-out opacity-50': hoveredIndex !== null && hoveredIndex !== index,
                       'text-gray-800': hoveredIndex === index }"
          ><NuxtLink :to="item.link">{{ item.title }}</NuxtLink></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>