// chakra-ui
import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react"
// dependencies
import { ElementType } from "react"
import { ActiveLink } from "../ActiveLink"

// types 
interface NavLinkProps extends LinkProps {
  icon: ElementType
  children: string
  href: string
}

export function NavLink ( { href, icon, children, ...rest }: NavLinkProps ) {
  return (
    <ActiveLink href={href} passHref >
      <ChakraLink display='flex' align='center' color='white.500' _hover={{ color: 'purple.500' }} {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium'>{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}