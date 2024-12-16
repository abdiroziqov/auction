<template>
  <NuxtLink class="rounded-t overflow-hidden inline-block" to="#">
    <div class="bg-[#fafafa] p-4 text-[#00152b] text-center">
      <p class="font-bold text-lg mb-2">Masrati Mustang GT Premium</p>
      <p class="font-extrabold text-2xl">$2,56</p>
    </div>
    <div class="w-[416px] h-[258px]">
      <img class="w-full h-full" src="/public/images/car.png" alt="image" />
    </div>
    <div
      class="bg-white p-5 text-[#00152b] text-center border border-[#eee] rounded-b"
    >
      <div class="flex justify-between items-center">
        <div>
          <p class="font-semibold">Current Bid</p>
          <p class="font-extrabold text-2xl">$2,56</p>
        </div>
        <div>
          <CommonCountdown target-date="2025-10-27T08:00:00" hide-days />
          <p class="font-bold text-lg">Current Bid</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts"></script>
