<script>
import {GetPostBySlug} from "@/queries/get-post-by-slug";

export default {
  data() {
    return {
      Post: null,
    }
  },
  apollo: {
    Post: {
      query: GetPostBySlug,
      variables () {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  },
}
</script>

<template>
  <h1>{{Post.title}}</h1>

    <div class="my-10">
        <img
            :src="Post.cover.url"
            :alt="`Image for ${Post.title}`"
        />
    </div>

  <div :key="contentType._id" v-for="contentType in Post.content">

    <!-- Display images if they exist -->
    <div v-if="contentType.__typename === 'Assets'" class="my-10">
      <img
          v-if="contentType.items.length"
          :src="contentType.items[0]?.url"
          :alt="`Image for ${Post.title}`"
      />
    </div>

    <!--Display the text in HTML format -->
    <div
        v-if="contentType.__typename === 'Text'"
        v-html="contentType.body"
    ></div>
  </div>
</template>
