// chakra-ui
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
// dependencies
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'
// types
interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: FieldError
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ( { name, label, error = null, ...rest }, ref ) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput name={name} id={name} focusBorderColor='purple.500' bgColor='gray.900' variant='field' _hover={{ bgColor: 'gray.900' }} size='lg' {...rest} ref={ref} />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef( InputBase )