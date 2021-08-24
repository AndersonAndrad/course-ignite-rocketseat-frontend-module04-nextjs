import { Box, Button, Stack } from "@chakra-ui/react"

export function Pagination () {
  return (
    <Stack direction='row' mt='8' justify='space-between' align='center' spacing='6'>
      <Box>
        <strong>0</strong> - <strong>10</strong> of <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='2'>
        <Button size='sm' fontSize='xs' width='4' colorScheme='purple' disabled _disabled={{ bg: 'purple.500', cursor: 'default' }}>1</Button>
        <Button size='sm' fontSize='xs' width='4' bgColor='gray.700' _hover={{ bg: 'gray.500' }} >2</Button>
        <Button size='sm' fontSize='xs' width='4' bgColor='gray.700' _hover={{ bg: 'gray.500' }} >2</Button>
        <Button size='sm' fontSize='xs' width='4' bgColor='gray.700' _hover={{ bg: 'gray.500' }} >2</Button>
        <Button size='sm' fontSize='xs' width='4' bgColor='gray.700' _hover={{ bg: 'gray.500' }} >2</Button>
      </Stack>
    </Stack>
  )
}