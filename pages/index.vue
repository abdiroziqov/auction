<template>
  <div>
    <MainSectionEntrance />
    <MainSectionCategory />
    <!--    <MainSectionLiveAuction />-->
    <!--    <MainSectionArtist />-->
    <CommonFaq class="container max-w-[782px]" :faq="faqs" />
  </div>
</template>
<script setup lang="ts">
const faqs = [
  {
    id: 1,
    question:
      'What is the difference between the TAFT University and the TIFT University?',
    answer:
      'The TAFT University is a private university located in Tashkent, Uzbekistan. It was founded in 2019 and offers a wide range of undergraduate and graduate programs in various fields of study. The TIFT University, on the other hand, is a public university located in Tashkent, Uzbekistan. It was founded in 1986 and offers a wide range of undergraduate and graduate programs in various fields of study.',
  },
  {
    id: 2,
    question: 'What is the purpose of the TAFT University?',
    answer:
      'The purpose of the TAFT University is to provide students with a comprehensive education in science, technology, engineering, and mathematics (STEM) fields. The university aims to prepare students for careers in the fields of science, technology, engineering, and mathematics (STEM), as well as in other related fields.',
  },
  {
    id: 3,
    question: 'What is the purpose of the TAFT University?',
    answer:
      'The purpose of the TAFT University is to provide students with a comprehensive education in science, technology, engineering, and mathematics (STEM) fields. The university aims to prepare students for careers in the fields of science, technology, engineering, and mathematics (STEM), as well as in other related fields.',
  },
]
</script>
