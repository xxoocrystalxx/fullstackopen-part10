import { useMutation } from '@apollo/client'
import { SIGN_UP } from '../graphql/mutations'

const useSignUp = () => {
  const [signUp, result] = useMutation(SIGN_UP, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    },
  })

  const createUser = async ({ username, password }) => {
    try {
      await signUp({ variables: { username, password } })
    } catch (e) {
      console.log(e)
    }
  }

  return [createUser, result]
}

export default useSignUp
