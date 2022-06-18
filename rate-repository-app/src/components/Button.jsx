import { StyleSheet, Pressable } from 'react-native'
import Text from './Text'
import theme from './theme'

const styles = StyleSheet.create({
  text: {
    fontWeight: theme.fontWeights.bold,
    margin: theme.padding.normal,
    padding: theme.padding.normal,
    borderRadius: 2,
    color: 'white',
    textAlign: 'center',
  },
  normal: {
    backgroundColor: theme.colors.primary,
  },
  alarm: {
    backgroundColor: theme.colors.error,
  },
})

const Button = ({ color, style, children, onSubmit, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'normal' && styles.normal,
    color === 'alarm' && styles.alarm,
    style,
  ]

  return (
    <Pressable onPress={onSubmit}>
      <Text style={textStyle} {...props}>
        {children}
      </Text>
    </Pressable>
  )
}

export default Button
