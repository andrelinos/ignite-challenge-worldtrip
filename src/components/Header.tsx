import { Center, Icon, Image, Link as ChakraLink} from "@chakra-ui/react";
import Link from 'next/link'
import { FiChevronLeft } from "react-icons/fi";

interface HeaderProps {
  hasBackLink?: boolean;
}

export function Header({ hasBackLink = false }: HeaderProps) {
  return (
    <Center w='100%' h='100px' maxW='1240' mx='auto' px={10} position='relative'>
      {hasBackLink && (
        <Link href='/'>
          <ChakraLink position='absolute' left='40px'>
            <Icon as={FiChevronLeft} fontSize="2rem"/>
          </ChakraLink>
        </Link>
      )}

      <Image src='/images/logo.svg' alt='World Trip'/>
    </Center>
  )
}