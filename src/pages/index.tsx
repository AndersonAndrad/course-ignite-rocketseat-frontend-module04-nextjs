// chakra-ui
import { Button, Flex, Stack } from '@chakra-ui/react'
// dependencies
import { useForm } from 'react-hook-form'
// shared components
import { Input } from '../components/Form/Input'
// types

export default function SingIn () {
  const { register, handleSubmit, formState } = useForm()
  const { errors } = formState

  function handleSingIn ( values ) { }

  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex as='form' w='100%' maxW={360} bg='gray.800' p='8' borderRadius={8} flexDir='column' onSubmit={handleSubmit( handleSingIn )} >
        <Stack spacing='4'>
          <Input name='email' label='Email' type='email' {...register( 'email' )} />
          <Input name='password' label='Password' type='password' {...register( 'password' )} />
        </Stack>
        <Button type='submit' mt='6' colorScheme='purple'>Sing in</Button>
      </Flex>
    </Flex>
  )
}
