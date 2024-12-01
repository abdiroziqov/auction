<template>
  <main>
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
