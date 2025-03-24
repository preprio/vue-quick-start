
<script>
import {GetPosts} from "@/queries/get-posts";
export default {
  apollo: {
    Posts: GetPosts
  },
  data() {
    return {
      Posts: ''
    }
  },
}
</script>

<template>
  <div>
    <h1>My blog site</h1>

    <ul v-if="Posts">
      <li v-for="post in Posts.items" :key="post._id">
        <router-link :to="post._slug">{{post.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

