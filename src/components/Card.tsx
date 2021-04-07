import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export function Card() {
  return (
    <Box w='256'>
      <Image src='/images/europe-londres-card.png' alt='Londres' w='100%' />
      <Flex 
        justify='space-between' 
        align='center' 
        p={6} 
        border='1px' 
        borderColor='yellow.100'
        borderTop='0'
        borderBottomRadius='4'
      >
        <Flex direction='column'>
          <Heading as='h3' fontSize='xl' fontWeight='600' mb={3}>Londres</Heading>
          <Text color='gray.500' fontSize='md' fontWeight='500'>Reino unido</Text>
        </Flex>

        <Image src='/images/europe-londres-flag.png' alt='Reino Unido' w='30' h='30' />
      </Flex>
    </Box>
  )
}