import { StyleSheet, View, Alert } from 'react-native'
import theme from '../theme'
import { useNavigate } from 'react-router-native'
import Button from '../Button'
import useDeleteReview from '../../hooks/useDeleteReview'

const styles = StyleSheet.create({
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: theme.colors.backgroundItem,
  },
})

const ActionButtons = ({ repositoryId, reviewId, refetch }) => {
  const navigate = useNavigate()
  const [deleteReview] = useDeleteReview()

  const viewRepository = () => {
    navigate(`/${repositoryId}`)
  }

  const handleDelete = () => {
    Alert.alert(
      'Delete Review',
      'Are you sure you want to delete this review',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {
          text: 'DELETE',
          onPress: async () => {
            await deleteReview(reviewId)
            refetch()
          },
        },
      ]
    )
  }

  return (
    <View style={styles.actionContainer}>
      <Button color="normal" onSubmit={viewRepository}>
        View Repository
      </Button>
      <Button color="alarm" onSubmit={handleDelete}>
        Delete review
      </Button>
    </View>
  )
}

export default ActionButtons
