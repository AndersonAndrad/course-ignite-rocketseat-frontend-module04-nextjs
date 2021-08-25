// chakra-ui
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
// dependencies
import { forwardRef, ForwardRefRenderFunction } from 'react'
// types
interface InputProps extends ChakraInputProps {
  name: string
  label?: string
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ( { name, label, ...rest }, ref ) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput name={name} id={name} focusBorderColor='purple.500' bgColor='gray.900' variant='field' _hover={{ bgColor: 'gray.900' }} size='lg' {...rest} ref={ref} />
    </FormControl>
  )
}

export const Input = forwardRef( InputBase )