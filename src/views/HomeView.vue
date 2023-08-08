
<script>
import {GetArticles} from "@/queries/get-articles";
export default {
  apollo: {
    Articles: GetArticles
  },
  data() {
    return {
      Articles: ''
    }
  },
}
</script>

<template>
  <div>
    <h1>My blog site</h1>

    <ul v-if="Articles">
      <li v-for="article in Articles.items" :key="article._id">
        <router-link :to="article._slug">{{article.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

