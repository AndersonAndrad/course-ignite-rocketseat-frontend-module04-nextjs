import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export function Profile () {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Anderson Andrade</Text>
        <Text color='gray.300' fontSize='small'>anderson_andrade_@outlook.com</Text>
      </Box>

      <Avatar size='md' name='Anderson Andrade' src='http://github.com/andersonandrad.png' />
    </Flex>
  )
}