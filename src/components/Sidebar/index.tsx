// chakra-ui
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react'
// context
import { useSidebarDrawer } from '../../contexts/SidebarDrawer.context'
// shared component
import { SidebarNav } from './SidebarNav'

export function Sidebar () {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue( {
    base: true,
    lg: false
  } )

  if ( isDrawerSidebar ) {
    return (
      <Drawer isOpen={isOpen} placement='left' onClose={onClose} >
        <DrawerOverlay>
          <DrawerContent bg='gray.800' p='4'>
            <DrawerCloseButton mt='6' />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as='aside' w='64' mr='8'>
      <SidebarNav />
    </Box>
  )
}