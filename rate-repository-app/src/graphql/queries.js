import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          id
          ownerName
          name
          createdAt
          fullName
          stargazersCount
          reviewCount
          watchersCount
          forksCount
          url
          ownerAvatarUrl
          description
          language
          ratingAverage
        }
      }
    }
  }
`

export const GET_USER = gql`
  query user {
    me {
      id
      username
    }
  }
`
// export const ALL_BOOKS = gql`
//   query allBooks($genre: String) {
//     allBooks(genre: $genre) {
//       ...BookDetails
//     }
//   }
//   ${BOOK_DETAILS}

//   const BOOK_DETAILS = gql`
//   fragment BookDetails on Book {
//     id
//     title
//     published
//     genres
//     author {
//       id
//       name
//       born
//       bookCount
//     }
//   }
// `
