import { View } from 'react-native'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup'
import { useNavigate } from 'react-router-native'
import useSignUp from '../hooks/useSignUp'
import useSignIn from '../hooks/useSignIn'
import Button from './Button'

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(1, 'length must between 1 and 30')
    .max(30, 'Too long!'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'length must between 5 and 50')
    .max(50, 'Too long!'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required('Password confirmation required'),
})

const SignUpForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput
        name="username"
        placeholder="username"
        container="container"
      />
      <FormikTextInput
        name="password"
        placeholder="password"
        container="container"
        secureTextEntry
      />
      <FormikTextInput
        name="passwordConfirm"
        placeholder="confirm password"
        container="container"
        secureTextEntry
      />
      {/* <Pressable onPress={onSubmit}>
        <Text type="button" fontWeight="bold">
          Sign In
        </Text>
      </Pressable> */}
      <Button onSubmit={onSubmit} color="normal">
        Register
      </Button>
    </View>
  )
}

export const SingInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignUp = () => {
  const [createUser] = useSignUp()
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values
    await createUser({ username, password })
    await signIn({ username, password })
    navigate('/')
  }
  return <SingInContainer onSubmit={onSubmit} />
}

export default SignUp
