<template>
  <header
    :class="{
      'bg-transparent': !isScrolled,
      'bg-black': isScrolled,
      'fixed !w-full': isHomeRoute,
      relative: !isHomeRoute,
    }"
    class="z-10 transition-all duration-300"
  >
    <div class="container">
      <div class="flex justify-between items-center py-4">
        <NuxtLink class="flex items-center gap-3" to="/">
          <img src="/bidgen-logo.svg" alt="logo" />
          <h1 class="text-3xl font-bold text-white">Aristo</h1>
        </NuxtLink>
        <div>
          <ul class="flex gap-4 text-white">
            <li>Home</li>
            <li>Auction</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <FormInputSearch
            v-model="search"
            placeholder="Search your items"
            class="!bg-[#1D2227] w-full !border !border-orange"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const isScrolled = ref(false)
const search = ref('')

const isHomeRoute = computed(() => route.path === '/')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const onSearchFn = (value: string) => {
  console.log(value)
}

const onSearch = debounce(onSearchFn, 500)

watch(search, (value) => {
  onSearch(value)
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
li {
  @apply text-white;
}

haeder {
  top: 0;
  z-index: 10000;
}
</style>
