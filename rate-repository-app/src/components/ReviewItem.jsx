import { StyleSheet, View } from 'react-native'
import Text from './Text'
import theme from './theme'
import { format } from 'date-fns'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundItem,
  },
  flexContainer: {
    flexDirection: 'row',
  },
  flexItem1: {
    display: 'flex',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: theme.colors.primary,
    margin: theme.padding.normal,
    alignItems: 'center',
  },
  flexItem2: {
    flex: 1,
    margin: theme.padding.normal,
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.flexItem1}>
          <Text fontWeight="bold" color="primary" fontSize="subheading">
            {review.rating}
          </Text>
        </View>
        <View style={styles.flexItem2}>
          <Text fontWeight="bold" fontSize="subheading">
            {review.user.username}
          </Text>
          <Text color="textSecondary">
            {format(new Date(review.createdAt), 'dd.MM.yyyy')}
          </Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  )
}

export default ReviewItem
