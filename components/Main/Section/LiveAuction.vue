<template>
  <div class="container">
    <div class="flex justify-between items-center mb-8">
      <h3 class="section-title">Live Auction</h3>
      <BaseButton
        :text-class="'text-white'"
        :variant="'orange'"
        :text="'Explore Now'"
        @click="$router.push('/apply')"
      />
    </div>
    <CommonCardAuction />
  </div>
</template>
