<template>
  <div class="container">
    <div class="flex justify-between items-center mb-8">
      <h3 class="section-title">Live Auction</h3>
      <BaseButton
        size="sm"
        :text-class="'text-white'"
        :variant="'orange'"
        :text="'Explore Now'"
        @click="$router.push('/auction')"
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <CommonCardAuction v-for="i in 3" :key="i" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
