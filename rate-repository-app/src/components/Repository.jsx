import RepositoryItem from './RepositoryList/RepositoryItem'
import { useParams } from 'react-router-native'
import { FlatList, StyleSheet, View } from 'react-native'
import * as Linking from 'expo-linking'
import theme from './theme'
import ReviewItem from './ReviewItem'
import useRepository from '../hooks/useRepository'
import Button from './Button'
import ItemSeparator from './ItemSeparator'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundItem,
  },
  maincontainer: {
    backgroundColor: theme.colors.backgroundMain,
  },
})

const RepositoryInfo = ({ repository }) => (
  <View style={styles.container}>
    <RepositoryItem item={repository} />
    <Button color="normal" onSubmit={() => Linking.openURL(repository.url)}>
      Open in GitHub
    </Button>
  </View>
)

const Repository = () => {
  const { id } = useParams()

  const { repository, fetchMore } = useRepository({ id, first: 5 })

  if (!repository) {
    return null
  }

  const onEndReach = () => {
    fetchMore()
  }

  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      style={styles.maincontainer}
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default Repository
