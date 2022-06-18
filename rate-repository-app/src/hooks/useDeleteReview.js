import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'

const useDeleteReview = () => {
  const [remove, result] = useMutation(DELETE_REVIEW, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    },
  })

  const deleteReview = async (id) => {
    await remove({ variables: { id } })
  }

  return [deleteReview, result]
}

export default useDeleteReview
