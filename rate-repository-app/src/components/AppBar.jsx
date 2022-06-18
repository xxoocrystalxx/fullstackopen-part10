import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import theme from './theme'
import useAuthStorage from '../hooks/useAuthStorage'
import { useApolloClient } from '@apollo/client'
import Constants from 'expo-constants'
import useMe from '../hooks/useMe'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundBar,
    padding: theme.padding.normal,
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    color: 'white',
    fontSize: theme.fontSizes.subheading,
    paddingRight: theme.padding.normal,
  },
})

const Tab = ({ to, text, onPress }) => {
  const content = <Text style={styles.text}>{text}</Text>

  return to ? (
    <Link to={to}>{content}</Link>
  ) : (
    <Pressable onPress={onPress}>{content}</Pressable>
  )
}

const AppBar = () => {
  const authStorage = useAuthStorage()
  const client = useApolloClient()
  const { me } = useMe()

  const logout = async () => {
    await authStorage.removeAccessToken()
    client.resetStore()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Tab to="/" text="Repositories" />
        {me === null ? (
          <>
            <Tab to="/signIn" text="Sign In" />
            <Tab to="/signUp" text="Sign Up" />
          </>
        ) : (
          <>
            <Tab to="/createReview" text="Create a review" />
            <Tab to="/myReviews" text="My reviews" />
            <Tab text="Sign Out" onPress={logout} />
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
