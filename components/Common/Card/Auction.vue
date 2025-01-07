<template>
  <NuxtLink
    to="/auction/1"
    class="bg-gray shadow-[0_0_15px_rgba(0,0,0,0.15)] rounded-[10px] py-6 px-5 pt-8 relative z-2"
  >
    <CommonCountdown
      class="absolute top-[15px] left-1/2 transform -translate-x-1/2 z-[10]"
      target-date="2025-10-27T08:00:00"
      :hide-days="false"
      main-class="bg-orange w-max px-4 py-2 rounded-[35px] font-bold text-[15px]"
    />
    <img src="/images/rasm.png" alt="image" />

    <p
      class="pt-[20px] font-semibold text-[20px] leading-[30px] capitalize text-white"
    >
      Profile portrait of a beautiful girl a alien ultraviolet body.
    </p>
    <div class="flex mt-5 items-center justify-between">
      <AuctionSingleUser class="" user-img="/images/rasm.png" text="Rasm bu" />
      <p class="font-semibold text-xl capitalize text-orange mr-4">$100</p>
    </div>
    <div class="flex items-center justify-between mt-7">
      <NuxtLink to="/auction/1">
        <BaseButton
          size="sm"
          variant="orange"
          text-class="!text-white"
          main-class="!text-white"
          >Bid Now</BaseButton
        >
      </NuxtLink>
      <BaseButtonLike :model-value="trigger" />
    </div>
  </NuxtLink>
</template>
<script setup lang="ts"></script>
