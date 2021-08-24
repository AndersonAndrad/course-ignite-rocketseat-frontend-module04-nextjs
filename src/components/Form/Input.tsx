// chakra-ui
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
// types
interface InputProps extends ChakraInputProps {
  name: string
  label?: string
}

export default function Input ( { name, label, ...rest }: InputProps ) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput name={name} id={name} focusBorderColor='purple.500' bgColor='gray.900' variant='field' _hover={{ bgColor: 'gray.900' }} size='lg' {...rest} />
    </FormControl>
  )
}