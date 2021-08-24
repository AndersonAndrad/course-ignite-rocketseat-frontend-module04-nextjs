// chakra-ui
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
// icons
import { RiAddLine, RiPencilLine } from "react-icons/ri"
// shared components
import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"

export default function UserList () {
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>Users</Heading>
            <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiAddLine} />}>Create new</Button>

          </Flex>
          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th pc='6' color='gray.300' width='8'>
                  <Checkbox colorScheme='purple' />
                </Th>
                <Th>Name</Th>
                <Th>CreatedAt</Th>
                <Th width='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='purple' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Anderson Andrade</Text>
                    <Text fontSize='sm' color='gray.300'>anderson_andrade_@outlook.com</Text>
                  </Box>
                </Td>
                <Td>04 April, 2021</Td>
                <Td>
                  <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} />}>Edit</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}