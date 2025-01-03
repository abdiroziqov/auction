<template>
  <div class="bg-white pb-10 md:pb-16">
    <div class="relative container">
      <BaseBreadcrumb :breadcrumb="menu" />

      <div>
        <div>
          <AuctionSingleTime />
        </div>
        <div></div>
      </div>
      <!--      <CommonProductsSingleSwiper />-->
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
