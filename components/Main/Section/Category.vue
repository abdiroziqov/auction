<template>
  <div class="relative container py-16">
    <h3 class="section-title mb-7">Category</h3>
    <div class="flex justify-between gap-6">
      <Swiper v-bind="settings" :modules="modules">
        <SwiperSlide
          class="!w-[196px]"
          v-for="(item, index) in [...category, ...category]"
          :key="index"
        >
          <CommonCardCategory :title="item?.title" :to="item?.to" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { computed, ref } from 'vue'

const modules = [Autoplay]
const settings = computed(() => ({
  loop: true,
  spaceBetween: 20,
  slidesPerView: 6,
  autoplay: {
    delay: 3000,
  },
  modules,
}))

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
