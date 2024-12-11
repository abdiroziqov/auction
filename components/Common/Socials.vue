<script lang="ts" setup>
const props = defineProps<{
  iconClass?: string
  bgClass?: string
  socials: {
    instagram?: string
    youtube?: string
    telegram?: string
    linkedin?: string
    facebook?: string
  }
}>()

const socials = computed(() => [
  {
    social: 'Instagram',
    link: props.socials?.instagram ?? '',
  },
  {
    social: 'Telegram',
    link: props.socials?.telegram ?? '',
  },
  {
    social: 'Linkedin',
    link: props.socials?.linkedin ?? '',
  },
  {
    social: 'YouTube',
    link: props.socials?.youtube ?? '',
  },
  {
    social: 'Facebook',
    link: props.socials?.facebook ?? '',
  },
])
</script>

<template>
  <div class="flex-y-center gap-3 md:gap-4">
    <ul class="flex gap-4">
      <template v-for="i in socials" :key="i.social">
        <li
          v-if="i?.link"
          :data-key="i.social"
          class="relative bg-[rgba(255,85,46,0.3)] rounded-lg w-9 h-9 flex items-center justify-center hover:!bg-orange group transition-300"
          :class="[bgClass]"
        >
          <CommonSocialLink :social="i" :icon-class="iconClass" />
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>
