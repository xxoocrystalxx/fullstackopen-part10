import { TextInput as NativeTextInput, StyleSheet } from 'react-native'
import theme from './theme'

const styles = StyleSheet.create({
  error: {
    borderColor: theme.colors.error,
  },
  notError: {
    borderColor: 'black',
  },
  container: {
    margin: theme.padding.normal,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 2,
    padding: theme.padding.normal,
  },
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    style,
    props.container === 'container' && styles.container,
    error ? styles.error : styles.notError,
  ]

  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput
