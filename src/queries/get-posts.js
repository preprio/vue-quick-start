import gql from 'graphql-tag'

export const GetPosts = gql`
  query {
    Posts {
      items {
        _id
        _slug
        title
      }
    }
  }
`