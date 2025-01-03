<template>
  <div class="thumb-example h-[480px] bg-black">
    <swiper
      class="top-swiper h-[80%] w-full"
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :modules="modules"
      :space-between="10"
      :thumbs="{ swiper: thumbsSwiper }"
    >
      <swiper-slide v-for="index in 8" :key="index" class="slide">
        <img
          src="/public/images/car.png"
          class="block w-full h-full object-cover"
          alt="image"
        />
      </swiper-slide>
    </swiper>
    <swiper
      class="thumbs-swiper h-[20%] box-border px-0 py-4"
      :modules="modules"
      :space-between="10"
      :slides-per-view="4"
      :watch-slides-progress="true"
      :prevent-clicks="false"
      :prevent-clicks-propagation="false"
      @swiper="setThumbsSwiper"
    >
      <swiper-slide
        v-for="index in 8"
        :key="index"
        class="slide w-[25%] h-full opacity-100 transition-opacity duration-300"
        :class="{ 'opacity-50': !isActive(index) }"
      >
        <img
          src="/public/images/car.png"
          alt="image"
          class="block w-full h-full object-cover"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/thumbs'

import type SwiperClass from 'swiper'
import { Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const thumbsSwiper = ref<SwiperClass>()

const setThumbsSwiper = (swiper: SwiperClass) => {
  thumbsSwiper.value = swiper
}

const isActive = (index: number) => {
  return thumbsSwiper.value?.activeIndex === index
}

const modules = [Thumbs]
</script>

<style scoped></style>
