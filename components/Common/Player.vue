<template>
  <div class="h-[300px] relative">
    <!-- Render video or YouTube iframe based on props -->
    <div v-if="videoSrc" class="relative">
      <video
        ref="videoRef"
        class="w-full h-full rounded shadow"
        :src="videoSrc"
        controls
        poster="https://via.placeholder.com/800x450"
      ></video>
    </div>

    <div v-else-if="youtubeSrc" class="relative">
      <iframe
        width="100%"
        height="100%"
        :src="`https://www.youtube.com/embed/${convertToEmbed(
          youtubeSrc,
        )}?autoplay=0&mute=1&controls=0`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="w-full h-full rounded-2xl"
      ></iframe>
    </div>

    <div v-else>
      <p class="text-center text-gray-500">No video source provided</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { convertToEmbed } from '~/utils/embed'

interface Props {
  videoSrc?: string
  youtubeSrc?: string
}

defineProps<Props>()

const videoRef = ref<HTMLVideoElement | null>(null)
</script>
