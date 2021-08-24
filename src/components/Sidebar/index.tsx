// chakra-ui
import { Box, Stack } from '@chakra-ui/react'
// icons
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
// shared components
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function Sidebar () {
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' align='flex-start'>
        <NavSection title='General'>
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Users</NavLink>
        </NavSection>
        <NavSection title='Automation'>
          <NavLink icon={RiInputMethodLine}>Form</NavLink>
          <NavLink icon={RiGitMergeLine}>Automation</NavLink>
        </NavSection>
      </Stack>
    </Box>
  )
}