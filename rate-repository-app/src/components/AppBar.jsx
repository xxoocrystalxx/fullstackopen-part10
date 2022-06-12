import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import theme from './theme'

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

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable>
          <Link to="/">
            <Text style={styles.text}>Repositories</Text>
          </Link>
        </Pressable>
        <Pressable>
          <Link to="/signIn">
            <Text style={styles.text}>Sign In</Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  )
}

export default AppBar
