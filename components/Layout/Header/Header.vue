<template>
  <div class="container">
    <div class="flex justify-between items-center py-4">
      <div>
        <h1 class="text-3xl font-bold text-white">Aristo</h1>
      </div>
      <div>
        <ul class="flex gap-4 text-white">
          <li>home</li>
          <li>Auction</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <FormInputSearch
          v-model="search"
          placeholder="Search your items"
          class="!bg-[#1D2227] w-full !border !border-orange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
li {
  @apply text-white;
}
</style>
