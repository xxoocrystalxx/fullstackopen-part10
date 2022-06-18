import { View } from 'react-native'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup'
import useReview from '../hooks/useReview'
import Button from './Button'

const initialValues = {
  repositoryName: '',
  ownerName: '',
  rating: '',
  text: '',
}

const validationSchema = yup.object().shape({
  repositoryName: yup.string().required('Repository name is required'),
  ownerName: yup.string().required('Owner name is required'),
  rating: yup
    .number()
    .required('rating is required')
    .min(0, 'Rating must beetween 0 and 100')
    .max(100, 'Rating must beetween 0 and 100')
    .integer(),
  text: yup.string(),
})

const ReviewForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput
        name="repositoryName"
        placeholder="repository Name"
        container="container"
      />
      <FormikTextInput
        name="ownerName"
        placeholder="owner Name"
        container="container"
      />
      <FormikTextInput
        name="rating"
        placeholder="rating"
        container="container"
        multiline
      />
      <FormikTextInput name="text" placeholder="review" container="container" />

      {/* <Pressable onPress={onSubmit}>
        <Text type="button" fontWeight="bold">
          Create a review
        </Text>
      </Pressable> */}
      <Button onSubmit={onSubmit} color="normal">
        Create a Review
      </Button>
    </View>
  )
}

const CreateReview = () => {
  const [createReview] = useReview()
  const onSubmit = async (values) => {
    await createReview(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default CreateReview
