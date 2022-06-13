import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  mutation login($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`
// export const CREATE_BOOK = gql`
//   mutation createBook(
//     $title: String!
//     $published: Int!
//     $author: String!
//     $genres: [String]
//   ) {
//     addBook(
//       title: $title
//       published: $published
//       genres: $genres
//       author: $author
//     ) {
//       ...BookDetails
//     }
//   }
//   ${BOOK_DETAILS}
