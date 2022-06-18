import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = ({ order, searchKeyword, first }) => {
  let orderBy
  let orderDirection

  switch (order) {
    case 'HIGHEST':
      orderBy = 'RATING_AVERAGE'
      orderDirection = 'DESC'
      break
    case 'LOWEST':
      orderBy = 'RATING_AVERAGE'
      orderDirection = 'ASC'
      break
    default:
      orderBy = 'CREATED_AT'
      orderDirection = 'DESC'
  }

  const variables = {
    orderBy,
    orderDirection,
    searchKeyword,
    first,
  }

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables,
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    })
  }
  return {
    repositories: data ? data.repositories : undefined,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  }
}

export default useRepositories
