import { FlatList, StyleSheet } from 'react-native'
import theme from '../theme'
import ReviewItem from '../ReviewItem'
import useMe from '../../hooks/useMe'
import ItemSeparator from '../ItemSeparator'
import ActionButtons from './ActionButtons'

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: theme.colors.backgroundMain,
  },
})

const MyReviews = () => {
  const { me, fetchMore, refetch } = useMe({ includeReviews: true, first: 5 })

  if (!me) {
    return null
  }
  const onEndReach = () => {
    fetchMore()
  }

  const reviewNodes = me ? me.reviews.edges.map((edge) => edge.node) : []

  return (
    <FlatList
      style={styles.maincontainer}
      data={reviewNodes}
      renderItem={({ item }) => (
        <>
          <ReviewItem review={item} userView={true} />
          <ActionButtons
            repositoryId={item.repository.id}
            reviewId={item.id}
            refetch={refetch}
          />
        </>
      )}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default MyReviews
