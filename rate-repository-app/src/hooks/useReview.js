import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'
import { useNavigate } from 'react-router-native'

const useReview = () => {
  const navigate = useNavigate()
  const [create, result] = useMutation(CREATE_REVIEW)

  const createReview = async (values) => {
    try {
      const { data } = await create({
        variables: {
          repositoryName: values.repositoryName,
          ownerName: values.ownerName,
          rating: Number(values.rating),
          text: values.text,
        },
      })
      navigate(`/${data.createReview.repositoryId}`)
    } catch (e) {
      console.log(e)
    }
  }

  return [createReview, result]
}

export default useReview
