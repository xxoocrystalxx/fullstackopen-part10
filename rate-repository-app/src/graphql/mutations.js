import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  mutation login($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`

export const SIGN_UP = gql`
  mutation signUp($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      id
      username
    }
  }
`

export const DELETE_REVIEW = gql`
  mutation delete($id: ID!) {
    deleteReview(id: $id)
  }
`

export const CREATE_REVIEW = gql`
  mutation create(
    $repositoryName: String!
    $ownerName: String!
    $rating: Int!
    $text: String
  ) {
    createReview(
      review: {
        repositoryName: $repositoryName
        ownerName: $ownerName
        rating: $rating
        text: $text
      }
    ) {
      id
      user {
        username
      }
      text
      rating
      createdAt
      repositoryId
    }
  }
`
