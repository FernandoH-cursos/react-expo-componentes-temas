import { TextInput, TextInputProps } from 'react-native'

interface Props extends TextInputProps {
  className?: string;
}

//* 'placeholderTextColor' sirve para cambiar el color del texto de placeholder del input de texto. 

export const ThemedTextInput = ({className,...rest}: Props) => {
  return (
    <TextInput
      className={"py-4 px-2 text-black dark:text-white"}
      placeholderTextColor="grey"
      {...rest}
    />
  )
}
