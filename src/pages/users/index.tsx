// chakra-ui
import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react"
// dependencies
import Link from 'next/link'
// icons
import { RiAddLine } from "react-icons/ri"
// shared components
import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"
import { useUsers } from "../../hooks/useUsers.hook"

export default function UserList () {
  const { data, isLoading, isFetched, error } = useUsers()

  const isWideVersion = useBreakpointValue( {
    base: false,
    lg: true
  } )

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px={['4', '4', '6']}>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Users
              {!isLoading && isFetched && <Spinner size='sm' color='gray.500' ml='4' />}
            </Heading>
            <Link href='/users/create' passHref>
              <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiAddLine} />}>Create new</Button>
            </Link>

          </Flex>
          {isLoading ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center'>
              <Text>Error to load data</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme='whiteAlpha'>
                <Thead>
                  <Tr>
                    <Th pc={['4', '4', '6']} color='gray.300' width='8'>
                      <Checkbox colorScheme='purple' />
                    </Th>
                    <Th>Name</Th>
                    {isWideVersion && <Th>CreatedAt</Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map( user => {
                    return (
                      <Tr key={user.id}>
                        <Td px={['4', '4', '6']}>
                          <Checkbox colorScheme='purple' />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight='bold'>{user.name}</Text>
                            <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.created_at}</Td>}
                      </Tr>
                    )
                  } )}
                </Tbody>
              </Table>
              <Pagination totalCountOfRegisters={200} currentPage={10} onChangePage={() => { }} />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}