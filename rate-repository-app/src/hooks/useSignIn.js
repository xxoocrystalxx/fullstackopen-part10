import { useMutation } from '@apollo/client'
import { SIGN_IN } from '../graphql/mutations'
import useAuthStorage from '../hooks/useAuthStorage'
import { useApolloClient } from '@apollo/client'

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const client = useApolloClient()

  const [login, result] = useMutation(SIGN_IN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    },
  })

  const signIn = async ({ username, password }) => {
    const token = await login({ variables: { username, password } })
    await authStorage.setAccessToken(token.data.authenticate.accessToken)
    client.resetStore()
    return token
  }

  return [signIn, result]
}

export default useSignIn
