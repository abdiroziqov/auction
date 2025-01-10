<template>
  <div class="min-h-screen container">
    <h1 class="section-title">Your Liked Auctions</h1>
    <div v-if="loading" class="text-center text-gray-500">Loading...</div>
    <div v-if="error" class="text-center text-red-500">{{ error }}</div>
    <div
      v-if="!loading && !error && likedAuctions.length === 0"
      class="text-center text-gray-500"
    >
      You have no liked auctions.
    </div>
    <div
      v-if="!loading && likedAuctions.length > 0"
      class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5"
    >
      <CommonCardAuction
        v-for="(item, index) in likedAuctions"
        :key="index"
        :data="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

import { useCookie } from '#app'

// State
const loading = ref(true)
const error = ref('')
const likedAuctions = ref([])

// Fetch liked auctions
const fetchLikedAuctions = async () => {
  try {
    const accessTokenCookie = useCookie('access_token')
    const accessToken = accessTokenCookie.value

    if (!accessToken) {
      error.value = 'User not authenticated. Please log in.'
      return
    }

    // Fetch user's favorites
    const favoritesResponse = await axios.get(
      'https://aristoback.ikramovna.me/api/v1/auction/favorites',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
    const favoriteAuctionIds = favoritesResponse.data
      .filter((item: any) => item.liked)
      .map((item: any) => item.auction)

    if (favoriteAuctionIds.length === 0) {
      likedAuctions.value = []
      return
    }

    // Fetch auction details for liked auctions
    const auctionsResponse = await axios.get(
      'https://aristoback.ikramovna.me/api/v1/auction/list',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )

    likedAuctions.value = auctionsResponse.data.filter((auction: any) =>
      favoriteAuctionIds.includes(auction.id),
    )
  } catch (err) {
    error.value = 'Failed to fetch liked auctions. Please try again later.'
    console.error(err)
  } finally {
    loading.value = false
  }
}

// Fetch data on component mount
onMounted(fetchLikedAuctions)
</script>

<style scoped>
/* Basic styling for the liked auctions list */
</style>
