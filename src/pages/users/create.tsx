// chakra-ui
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import Link from "next/link"
import { SubmitHandler, useForm } from "react-hook-form"
// dependencies
import * as yup from "yup"
// shared components
import { Input } from "../../components/Form/Input"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
// types
type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const createUserFormSchema = yup.object().shape( {
  name: yup.string().required( "Name is required" ),
  email: yup.string().email( "Invalid email" ).required( "Email is required" ),
  password: yup.string().required( "Password is required" ).min( 6, "Password must be at least 6 characters" ),
  password_confirmation: yup.string().oneOf( [yup.ref( "password" ), null], "Passwords must match" ),
} )

export default function CreateUser () {
  const { register, handleSubmit, formState } = useForm( {
    resolver: yupResolver( createUserFormSchema ),
  } )
  const { errors, isSubmitting } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = ( values ) => { }

  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p={['6', '8']} as='form' onSubmit={handleSubmit( handleCreateUser )}>
          <Heading size='lg' fontWeight='normal'>Create user</Heading>
          <Divider my='6' borderColor='gray.700' />
          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%' >
              <Input name='name' label='Full name' {...register( 'name' )} error={errors.name} />
              <Input name='email' label='Email' type='email' {...register( 'email' )} error={errors.email} />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%' >
              <Input name='password' label='Password' type='password' {...register( 'password' )} error={errors.password} />
              <Input name='password_confirmation' label='Confirm password' type='password' {...register( 'password_confirmation' )} error={errors.password_confirmation} />
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4' >
              <Link href='/users' passHref>
                <Button colorScheme='whiteAlpha'>Cancel</Button>
              </Link>
              <Button colorScheme='purple' type='submit' isLoading={isSubmitting}>Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}