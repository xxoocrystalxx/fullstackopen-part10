import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import theme from './theme'
import { useQuery } from '@apollo/client'
import { GET_USER } from '../graphql/queries'
import useAuthStorage from '../hooks/useAuthStorage'
import { useApolloClient } from '@apollo/client'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundBar,
    padding: theme.padding.normal,
  },
  text: {
    color: 'white',
    fontSize: theme.fontSizes.subheading,
    paddingRight: theme.padding.normal,
  },
})

const RepoTab = () => (
  <Pressable>
    <Link to="/">
      <Text style={styles.text}>Repositories</Text>
    </Link>
  </Pressable>
)

const SignInTab = () => (
  <Pressable>
    <Link to="/signIn">
      <Text style={styles.text}>Sign In</Text>
    </Link>
  </Pressable>
)

const SignOutTab = ({ handle }) => (
  <Pressable onPress={handle}>
    <Text style={styles.text}>Sign Out</Text>
  </Pressable>
)

const AppBar = () => {
  const authStorage = useAuthStorage()
  const client = useApolloClient()
  const { data, loading } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
  })

  if (loading) return <div>loading...</div>

  const logout = async () => {
    await authStorage.removeAccessToken()
    client.resetStore()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <RepoTab />
        {data.me === null ? <SignInTab /> : <SignOutTab handle={logout} />}
      </ScrollView>
    </View>
  )
}

export default AppBar
