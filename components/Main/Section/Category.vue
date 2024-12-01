<template>
  <div class="relative container py-16">
    <h3 class="section-title mb-7">Category</h3>
    <div class="flex justify-between gap-6">
      <CommonCardCategory
        v-for="(item, index) in [...category]"
        :key="index"
        :title="item?.title"
        :to="item?.to"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const category = [
  {
    title: 'Water Paint',
    to: '/category/1',
  },
  {
    title: 'Fine Art',
    to: '/category/2',
  },
  {
    title: 'Best Arts',
    to: '/category/3',
  },
  {
    title: 'Natural sense',
    to: '/category/3',
  },
  {
    title: 'Visual Arts',
    to: '/category/3',
  },
  {
    title: 'Philosophy',
    to: '/category/3',
  },
]
</script>
