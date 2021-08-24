import { Button } from "@chakra-ui/react"

//types
type PaginationItemProps = {
  number: number
  isCurrent?: boolean
}

export function PaginationButton ( { isCurrent = false, number }: PaginationItemProps ) {
  if ( isCurrent ) {
    return (
      <Button size='sm' fontSize='xs' width='4' colorScheme='purple' disabled _disabled={{ bg: 'purple.500', cursor: 'default' }}>
        {number}
      </Button>
    )
  }

  return (
    <Button size='sm' fontSize='xs' width='4' bgColor='gray.700' _hover={{ bg: 'gray.500' }} >
      {number}
    </Button>
  )
}