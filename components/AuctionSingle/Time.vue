<template>
  <div
    class="bg-gray-100 rounded text-white flex justify-between flex-row flex-wrap items-center p-6"
  >
    <div>
      <p class="font-semibold mb-1">Current Bid</p>
      <p class="font-extrabold text-2xl">$ {{ data?.bid ?? 209000 }}</p>
    </div>
    <CommonCountdown target-date="2025-10-27T08:00:00" :hide-days="false" />
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from '~/types'

interface Props {
  data?: IProduct[]
}
defineProps<Props>()
</script>
