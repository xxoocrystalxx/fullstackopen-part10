import { StyleSheet, View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import SignIn from './SignIn'
import Repository from './Repository'
import CreateReview from './CreateReview'
import SignUp from './SignUp'
import MyReviews from './MyReviews'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/myReviews" element={<MyReviews />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/createReview" element={<CreateReview />} />
        <Route path="/:id" element={<Repository />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  )
}

export default Main
