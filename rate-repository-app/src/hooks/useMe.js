import { useQuery } from '@apollo/client'
import { GET_USER } from '../graphql/queries'

const useMe = (variables) => {
  const { data, loading, fetchMore, refetch, ...result } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
    variables,
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage
    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return {
    me: data ? data.me : undefined,
    loading,
    fetchMore: handleFetchMore,
    ...result,
    refetch,
  }
}

export default useMe
