import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createApolloProvider} from "@vue/apollo-option";
import apolloClient from "@/services/apollo-client";

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

const app = createApp(App)

app.use(router)
app.use(apolloProvider)
app.mount('#app')
