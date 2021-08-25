// chakra-ui
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react"
// dependencies
import Link from 'next/link'
// icons
import { RiAddLine } from "react-icons/ri"
// shared components
import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"

export default function UserList () {
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
            <Heading size='lg' fontWeight='normal'>Users</Heading>
            <Link href='/users/create' passHref>
              <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiAddLine} />}>Create new</Button>
            </Link>

          </Flex>
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
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme='purple' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Anderson Andrade</Text>
                    <Text fontSize='sm' color='gray.300'>anderson_andrade_@outlook.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 April, 2021</Td>}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}