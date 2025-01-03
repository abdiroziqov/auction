<template>
  <div class="bg-white pb-10 md:pb-16">
    <div class="relative container">
      <BaseBreadcrumb :breadcrumb="menu" />
      <h3 class="section-title !text-black mb-6">Auction</h3>
      <div class="grid grid-cols-3 gap-3 md:gap-5">
        <CommonCardAuctionPageC
          v-for="item in 5"
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
</template>

<script setup lang="ts">
const menu = computed(() => {
  return [
    {
      title: 'Auction',
      link: '/auction',
    },
  ]
})
</script>
