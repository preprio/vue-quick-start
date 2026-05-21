<script setup>
import { ref, onMounted } from 'vue'
import apolloClient from '@/services/apollo-client'
import { GetPosts } from '@/queries/get-posts'

const posts = ref([])

onMounted(async () => {
  const { data } = await apolloClient.query({ query: GetPosts })
  posts.value = data.Posts.items
})
</script>

<template>
  <div>
    <h1>My blog site</h1>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post._id">
        <router-link :to="`/${post._slug}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
