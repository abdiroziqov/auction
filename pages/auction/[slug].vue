<template>
  <div class="bg-white pb-10 md:pb-16">
    <div class="relative container">
      <BaseBreadcrumb :breadcrumb="menu" />

      <div class="flex justify-between gap-3">
        <div class="w-2/4">
          <AuctionSingleLeft />
        </div>
        <div class="w-2/4">
          <AuctionSingleRight />
        </div>
      </div>
      <div>
        <h3 class="section-title !text-black mt-5 md:mt-9 mb-6">
          Best Related Auction
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <CommonCardAuctionPageC
            v-for="item in 3"
            :key="item"
            :data="{
              link: 'auction/1',
              title: 'Masrati Mustang GT Premium',
              price: '2,56',
              bid: '2,56',
              id: 3123123,
              label: 'ID',
              time: '2023-10-27T08:00:00',
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const menu = computed(() => {
  return [
    {
      title: 'Auction',
      link: '/auction',
    },
    {
      title: 'Auction',
      link: '/auction',
    },
  ]
})
</script>
