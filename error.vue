<script setup lang="ts">
import type { NuxtError } from '#app'

interface Props {
  error: NuxtError
}
defineProps<Props>()
</script>

<template>
  <div class="text-white">
    <pre>{{ error }}</pre>
  </div>
</template>
