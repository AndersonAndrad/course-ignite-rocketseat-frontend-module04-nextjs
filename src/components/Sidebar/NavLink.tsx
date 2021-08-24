// chakra-ui
import { Icon, Link, LinkProps, Text } from "@chakra-ui/react"
// dependencies
import { ElementType } from "react"
// types 
interface NavLinkProps extends LinkProps {
  icon: ElementType
  children: string
}

export function NavLink ( { icon, children, ...rest }: NavLinkProps ) {
  return (
    <Link display='flex' align='center' color='white.500' _hover={{ color: 'purple.500' }} {...rest}>
      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='medium'>{children}</Text>
    </Link>
  )
}