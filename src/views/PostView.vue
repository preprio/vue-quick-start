<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import apolloClient from '@/services/apollo-client'
import { GetPostBySlug } from '@/queries/get-post-by-slug'

const route = useRoute()
const post = ref(null)

onMounted(async () => {
  const { data } = await apolloClient.query({
    query: GetPostBySlug,
    variables: { slug: `blog/${route.params.slug}` },
  })
  post.value = data.Post
})
</script>

<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>

    <div class="my-10">
      <img :src="post.cover.url" :alt="`Image for ${post.title}`" />
    </div>

    <div v-for="contentType in post.content" :key="contentType._id">
      <!-- Display images if they exist -->
      <div v-if="contentType.__typename === 'Assets'" class="my-10">
        <img
          v-if="contentType.items.length"
          :src="contentType.items[0]?.url"
          :alt="`Image for ${post.title}`"
        />
      </div>
      <!-- Display the text in HTML format -->
      <div
        v-if="contentType.__typename === 'Text'"
        v-html="contentType.body"
      ></div>
    </div>
  </div>
</template>
