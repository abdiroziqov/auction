<template>
  <NuxtLink
    class="rounded-t overflow-hidden inline-block group relative"
    :to="data?.link"
  >
    <div
      class="bg-[#fafafa] p-4 text-gray-100 text-center group-hover:bg-gray-100 group-hover:text-white duration-300"
    >
      <p class="font-bold text-lg mb-2">{{ data?.title }}</p>
      <p class="font-extrabold text-2xl">$ {{ data?.price }}</p>
    </div>
    <div class="w-[416px] h-[258px] relative">
      <img
        class="w-full h-full duration-300 group-hover:scale-[1.02]"
        src="/public/images/car.png"
        alt="image"
      />
    </div>
    <div
      class="font-extrabold text-xs text-gray-100 bg-white absolute top-[25%] left-[-35px] px-4 py-1.5 rounded-tr-[28px] rotate-90"
    >
      ID {{ data?.id }}
    </div>
    <div
      class="bg-white p-5 text-gray-100 text-center border border-[#eee] rounded-b"
    >
      <div class="flex justify-between items-center">
        <div>
          <p class="font-semibold">Current Bid</p>
          <p class="font-extrabold text-2xl">$ {{ data?.bid }}</p>
        </div>
        <div>
          <CommonCountdown target-date="2025-10-27T08:00:00" hide-days />
          <p class="font-bold text-lg">Current Bid</p>
        </div>
      </div>
      <BaseButton variant="grayBorder" class="mt-6" :text="`Submit a bid`" />
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import type { IProduct } from '~/types'

interface Props {
  data?: IProduct[]
}
defineProps<Props>()
</script>
