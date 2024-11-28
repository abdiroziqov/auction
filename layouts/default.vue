<template>
  <main
    class="max-[900px]:mb-[61px]"
    :class="{ 'md:mt-[130px] mt-[100px]': !isMain }"
  >
    <LayoutHeader :has-sticky="isMain" />

    <slot />

    <footer>
      <LayoutFooter />
    </footer>
  </main>
</template>
<script setup lang="ts">
const route = useRoute()
const isMain = computed(() => route.fullPath === '/')
</script>
