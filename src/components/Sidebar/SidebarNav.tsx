// chakra-ui
import { Stack } from "@chakra-ui/react"
// icons
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
// shared components
import { NavLink } from "./NavLink"
import { NavSection } from "./NavSection"

export function SidebarNav () {
  return (
    <Stack spacing='12' align='flex-start'>
      <NavSection title='General'>
        <NavLink icon={RiDashboardLine} href='/dashboard'>Dashboard</NavLink>
        <NavLink icon={RiContactsLine} href='/users'>Users</NavLink>
      </NavSection>
      <NavSection title='Automation'>
        <NavLink icon={RiInputMethodLine} href='forms' >Form</NavLink>
        <NavLink icon={RiGitMergeLine} href='automation'>Automation</NavLink>
      </NavSection>
    </Stack>
  )
}