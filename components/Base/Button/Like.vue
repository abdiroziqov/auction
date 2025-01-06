<template>
  <button class="flex-center" aria-label="like" @click.stop="emitClick">
    <svg
      :class="{ 'animation-like': modelValue }"
      :width="iconWidth"
      :height="iconHeight"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="transition-300"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.5 22.62L20 35L7.5 22.62M7.5 22.62C5.25216 20.4326 4.42288 17.1684 5.35413 14.1734C6.28538 11.1784 8.81942 8.95991 11.9113 8.43283C15.0031 7.90576 18.129 9.15935 20 11.6767C21.8788 9.17798 24.998 7.94102 28.0787 8.47303C31.1593 9.00503 33.683 11.2165 34.615 14.2006C35.5469 17.1847 34.7303 20.4393 32.5 22.63"
        :class="modelValue ? 'fill-orange' : 'fill-transparent'"
      />
      <path
        class="transition-300 main__like"
        d="M32.5 22.62L20 35L7.5 22.62C5.25216 20.4326 4.42288 17.1684 5.35413 14.1734C6.28538 11.1784 8.81942 8.95991 11.9113 8.43283C15.0031 7.90576 18.129 9.15935 20 11.6767C21.8788 9.17798 24.998 7.94102 28.0787 8.47303C31.1593 9.00503 33.683 11.2165 34.615 14.2006C35.5469 17.1847 34.7303 20.4393 32.5 22.63"
        :class="[mainClass, modelValue ? 'stroke-orange' : 'stroke-gray-600']"
        stroke-width="3px"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean
  iconWidth?: string
  iconHeight?: string
  mainClass?: string
}
const props = withDefaults(defineProps<Props>(), {
  iconWidth: '24',
  iconHeight: '24',
})

interface Emit {
  (event: 'update:modelValue', value: boolean): void
}
const emit = defineEmits<Emit>()

const emitClick = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<style scoped>
.animation-like {
  animation: like 500ms ease-in-out forwards;
}
@keyframes like {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
}
</style>
