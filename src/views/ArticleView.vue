<script>
import {GetArticleBySlug} from "@/queries/get-article-by-slug";

export default {
  data() {
    return {
      Article: null,
    }
  },
  apollo: {
    Article: {
      query: GetArticleBySlug,
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
  <h1>{{Article.title}}</h1>

  <div :key="contentType._id" v-for="contentType in Article.content">

    <!-- Display images if they exist -->
    <div v-if="contentType.__typename === 'Assets'" class="my-10">
      <img
          v-if="contentType.items.length"
          :src="contentType.items[0]?.url"
          :alt="`Image for ${Article.title}`"
          width="300"
          height="250"
      />
    </div>

    <!--Display the text in HTML format -->
    <div
        v-if="contentType.__typename === 'Text'"
        v-html="contentType.body"
    ></div>
  </div>
</template>
