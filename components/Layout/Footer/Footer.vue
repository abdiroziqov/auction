<template>
  <footer
    class="bg-[#161313] text-white pt-10 border-[rgba(196,196,196,0.2)] border-t"
  >
    <div class="container mx-auto grid grid-cols-2 gap-10 pb-10">
      <div>
        <h3 class="font-bold text-[20px] text-white inline-block pb-2">
          Quick Links
        </h3>
        <ul>
          <li
            v-for="(link, index) in quickLinks"
            :key="'quick-' + index"
            class="mb-2"
          >
            <a :href="link?.links" class="hover:text-orange duration-300">{{
              link?.name
            }}</a>
          </li>
        </ul>
      </div>
      <div>
        <NuxtLink class="flex items-center gap-3" to="/">
          <img src="/bidgen-logo.svg" alt="logo" />
          <h1 class="text-3xl font-bold text-white">Aristo</h1>
        </NuxtLink>
        <p class="text-[#adadad] mt-5 leading-8">
          Auction Lab is one of the most amazing companies ever for painting all
          over the world.
        </p>
        <CommonSocials class="mt-8" :socials="{ instagram: 'aristo.io' }" />
      </div>
    </div>
    <div
      class="gap-1 container flex justify-center border-[rgba(196,196,196,0.2)] border-t py-4 text-sm"
    >
      <p>
        © {{ currentYear }} <span class="font-bold">Aristo.</span> All rights
        reserved.
      </p>
      |
      <p>Design by <span>Iceek</span></p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
const quickLinks = [
  {
    name: 'Home',
    links: '/',
  },
  {
    name: 'Auction',
    links: '/auction',
  },
  {
    name: 'About Us',
    links: '/about-us',
  },
  {
    name: 'Contact',
    links: '/contact',
  },
]
</script>

<style scoped></style>
