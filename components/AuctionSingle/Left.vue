<template>
  <div>
    <AuctionSingleTime class="mb-6" />
    <CommonProductsSingleSwiper />
    <CommonCTab
      class="mt-7"
      v-model="activeTab"
      main-class="!border-none"
      item-class="!rounded-[46px] text-center !font-semibold bg-white text-dark-100 !text-sm shadow-[5px_7px_35px_0px_rgba(113,113,113,0.1)]"
      active-items-class="!bg-gray-100 text-white"
      :list="tabs"
    />

    <div class="text-black mt-6">
      <div
        v-if="activeTab === '0'"
        class="font-medium leading-7 text-[#5C5C5C]"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis molestiae
        dolore, quaerat illo adipisci fugiat voluptatibus eligendi provident
        animi qui totam commodi a dolor saepe labore tempore. Consequuntur
        doloremque accusantium aspernatur illo labore quisquam consectetur
        tenetur temporibus, eos ad, fuga cumque suscipit quasi iure veniam,
        omnis in iste ipsa optio. Sint voluptates sed inventore saepe, obcaecati
        dolores rerum aliquid eaque.
      </div>
      <div v-else-if="activeTab === '1'">
        <CommonPlayer video-src="https://www.w3schools.com/html/mov_bbb.mp4" />
      </div>
    </div>
    <CommonCardShareNow />
  </div>
</template>
<script setup lang="ts">
const activeTab = ref('0')
const markers = ref([])

const tabs = ref([
  { id: 0, title: 'Description', value: '0' },
  { id: 1, title: 'About Video', value: '1' },
])
</script>
