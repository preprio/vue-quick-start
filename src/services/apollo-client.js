import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: `https://graphql.prepr.io/${import.meta.env.VITE_PREPR_ACCESS_TOKEN || 'ac_e54beab08406dd41fcdead2bef10364f442559f67fe86ebb0ac7aa6e3a1a4605'}`,
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

export default apolloClient
