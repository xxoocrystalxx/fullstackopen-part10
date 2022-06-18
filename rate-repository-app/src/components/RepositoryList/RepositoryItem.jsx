import { View, StyleSheet, Image } from 'react-native'
import Text from '../Text'
import theme from '../theme'

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    padding: theme.padding.normal,
  },
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: theme.padding.normal,
  },
  logo: {
    width: 66,
    height: 58,
  },
  flexItem1: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: theme.padding.normal,
  },
  container: {
    backgroundColor: theme.colors.backgroundItem,
    padding: theme.padding.normal,
  },
  languageText: {
    color: 'white',
    alignSelf: 'flex-start',
    marginLeft: 85,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 5,
  },
})

const numberFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num)
}

const RepositoryItem = ({ item }) => (
  <View style={styles.container} testID="repositoryItem">
    <View style={styles.flexContainer}>
      <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
      <View style={styles.flexItem1}>
        <Text fontWeight="bold" fontSize="subheading">
          {item.fullName}
        </Text>
        <Text color="textSecondary">{item.description}</Text>
      </View>
    </View>

    <View>
      <Text style={styles.languageText}>{item.language}</Text>
    </View>

    <View style={styles.numberContainer}>
      <View style={styles.flexItem1}>
        <Text fontWeight="bold" fontSize="subheading">
          {numberFormatter(item.forksCount)}
        </Text>
        <Text color="textSecondary">Forks </Text>
      </View>
      <View style={styles.flexItem1}>
        <Text fontWeight="bold" fontSize="subheading">
          {numberFormatter(item.stargazersCount)}
        </Text>
        <Text color="textSecondary">Starts </Text>
      </View>
      <View style={styles.flexItem1}>
        <Text fontWeight="bold" fontSize="subheading">
          {numberFormatter(item.ratingAverage)}
        </Text>
        <Text color="textSecondary">Rating </Text>
      </View>
      <View style={styles.flexItem1}>
        <Text fontWeight="bold" fontSize="subheading">
          {numberFormatter(item.reviewCount)}
        </Text>
        <Text color="textSecondary">Reviews </Text>
      </View>
    </View>
  </View>
)

export default RepositoryItem
