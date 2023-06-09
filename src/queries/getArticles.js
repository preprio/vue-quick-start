import gql from 'graphql-tag'

export const GetArticles = gql`
  query {
    Articles {
    items {
      _id
      _slug
      title
    }
  }
 }
`