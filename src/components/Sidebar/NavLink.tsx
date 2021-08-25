// dependencies
// chakra-ui
import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react"
import Link from 'next/link'
// dependencies
import { ElementType } from "react"
// types 
interface NavLinkProps extends LinkProps {
  icon: ElementType
  children: string
  href: string
}

export function NavLink ( { href, icon, children, ...rest }: NavLinkProps ) {
  return (
    <Link href={href} passHref >
      <ChakraLink display='flex' align='center' color='white.500' _hover={{ color: 'purple.500' }} {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium'>{children}</Text>
      </ChakraLink>
    </Link>
  )
}