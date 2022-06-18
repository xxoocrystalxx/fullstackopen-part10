import { gql } from '@apollo/client'

export const REPO_DETAILS = gql`
  fragment RepositoryDetails on Repository {
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
`

export const REVIEWS_DETAILS = gql`
  fragment ReviewsDetails on ReviewConnection {
    edges {
      node {
        id
        text
        rating
        createdAt
        user {
          id
          username
        }
        repository {
          id
        }
      }
      cursor
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
  }
`
