import { Button, Flex, Stack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Input } from '../components/Form/Input'
// types
type SingInFormData = {
  email: string
  password: string
}

const singInFormSchema = yup.object().shape( {
  email: yup.string().email().required(),
  password: yup.string().required(),
} )

export default function SingIn () {
  const { register, handleSubmit, formState } = useForm( {
    resolver: yupResolver( singInFormSchema ),
  } )

  const { errors, isSubmitting } = formState

  const handleSingIn: SubmitHandler<SingInFormData> = ( values ) => { }

  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex as='form' w='100%' maxW={360} bg='gray.800' p='8' borderRadius={8} flexDir='column' onSubmit={handleSubmit( handleSingIn )}>
        <Stack spacing='4'>
          <Input name='email' label='Email' type='email' {...register( 'email' )} error={errors.email} />
          <Input name='password' label='Password' type='password' {...register( 'password' )} error={errors.password} />
        </Stack>
        <Button type='submit' mt='6' colorScheme='purple' isLoading={isSubmitting}>
          Sing in
        </Button>
      </Flex>
    </Flex>
  )
}
