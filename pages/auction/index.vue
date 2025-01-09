<template>
  <div class="bg-white pb-10 md:pb-16">
    <div class="relative container">
      <BaseBreadcrumb :breadcrumb="menu" />
      <h3 class="section-title !text-black mb-6">Auction</h3>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5"
      >
        <CommonCardAuctionPageC
          v-for="(item, index) in auction"
          :key="index"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const auction = ref<any>([])

function getCategory() {
  useApi()
    .$get('auction/list')
    .then((res) => {
      auction.value = res
    })
    .catch((err) => {
      return new Error(err)
    })
}

getCategory()
const menu = computed(() => {
  return [
    {
      title: 'Auction',
      link: '/auction',
    },
  ]
})
</script>
