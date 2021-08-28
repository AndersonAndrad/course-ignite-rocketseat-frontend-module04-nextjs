import { Box, Stack, Text } from "@chakra-ui/react"
import { PaginationButton } from "./PaginationButton"

interface PaginationProps {
  totalCountOfRegisters: number
  registerPerPage?: number
  currentPage?: number
  onChangePage: ( page: number ) => void
}

function generatePagesArray ( from: number, to: number ) {
  return [...new Array( to - from )].map( ( _, index ) => index + from + 1 ).filter( page => page > 0 )
}

export function Pagination ( { currentPage = 1, onChangePage, registerPerPage = 10, totalCountOfRegisters }: PaginationProps ) {
  const siblingPages = 1

  const lastPage = Math.floor( totalCountOfRegisters / registerPerPage )

  const previousPages = currentPage > 1 ? generatePagesArray( currentPage - 1 - siblingPages, currentPage - 1 ) : []

  const nextPages = currentPage < lastPage ? generatePagesArray( currentPage, Math.min( currentPage + siblingPages, lastPage ) ) : []


  return (
    <Stack direction={['column', 'row']} mt='8' justify='space-between' align='center' spacing='6'>
      <Box>
        <strong>0</strong> - <strong>10</strong> of <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='2'>

        {currentPage > ( 1 + siblingPages ) && (
          <>
            <PaginationButton number={1} />
            {currentPage > ( 2 + siblingPages ) && <Text color='gray.300' width='8' textAlign='center'>...</Text>}
          </>
        )}

        {previousPages.length > 0 && previousPages.map( page => { return <PaginationButton key={page} number={page} /> } )}

        <PaginationButton number={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map( page => { return <PaginationButton key={page} number={page} /> } )}

        {( currentPage + siblingPages ) < lastPage && (
          <>
            {( currentPage + 1 + siblingPages ) < lastPage && <Text color='gray.300' width='8' textAlign='center' >...</Text>}
            <PaginationButton number={lastPage} />
          </>
        )}

      </Stack>
    </Stack>
  )
}