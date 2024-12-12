<template>
  <span>
    <a
      :class="`icon-${social?.social?.toLowerCase()} shrink-0 text-lg text-white leading-6 transition-300 w-9 h-9 rounded-lg flex justify-center items-center group-hover:!text-white transition-300`"
      :href="social.link"
      :aria-label="`${social.social} link`"
      target="_blank"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    >
    </a>
    <BaseTooltip :show="isTooltipVisible" class="">
      {{ social?.social }}
    </BaseTooltip>
  </span>
</template>

<script setup lang="ts">
interface Props {
  iconClass?: string
  social: {
    social: string
    link: string
  }
}

defineProps<Props>()

const isTooltipVisible = ref(false)

function showTooltip() {
  isTooltipVisible.value = true
}

function hideTooltip() {
  isTooltipVisible.value = false
}
</script>
