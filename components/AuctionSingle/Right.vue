<template>
  <div>
    <p class="text-2xl font-bold text-gray-100 mb-2.5">
      Lamborghini Huracán Red Mercedes AMG
    </p>
    <p class="font-medium text-[#212529] leading-7 mb-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
      pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur
      nulla. Nulla posuere sapien vitae lectus suscipit
    </p>
    <div class="shadow-[5px_7px_35px_0px_rgba(113,113,113,0.1)] rounded p-7">
      <h3
        class="text-[20px] font-extrabold text-gray-100 inline-block uppercase mb-6"
      >
        Your content here
      </h3>

      <div>
        <div class="w-full">
          <div class="divide-y divide-[#d1d1d1]">
            <div
              v-for="(detail, index) in carDetails"
              :key="index"
              class="flex justify-between py-2 text-[#454545]"
            >
              <span class="font-medium">{{ detail.label }} :</span>
              <span>{{ detail.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const carDetails = [
  { label: 'Body Style', value: 'Convertible' },
  { label: 'Interior', value: 'Agate Grey' },
]
</script>
