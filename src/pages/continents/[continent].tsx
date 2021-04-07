import { Box, Flex, Heading, HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react"
import {  FiInfo } from 'react-icons/fi'

import { Header } from "../../components/Header"
import { Card } from "../../components/Card"

type ContinentType = {
  name: string;
  description: string;
  amountCountries: number;
  amountLanguages: number;
  mostPopularCities: [{
    cityName: string;
    countryName: string;
    cityImage: string;
    countryFlagImage: string;
  }]
}

interface ContinentProps {
  continent: ContinentType;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <Box>
      <Header hasBackLink/>

      <Box
        bgImage='url("/images/europe-banner.png")'
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize='cover'
        height='500'
      >
        <Box
          maxW='1240'
          h='100%'
          mx='auto'
          px={10}
          position='relative'
        >
          <Heading 
            as='h1'
            fontWeight='600'
            fontSize='5xl'
            color='gray.50'
            position='absolute'
            bottom='60px'
          >
            Europa
          </Heading>
        </Box>
      </Box>

      <Box
        maxW='1240'
        h='100%'
        mx='auto'
        px={10}
      >
        <Flex justify='space-between' align='center' my={20}>
          <Text maxW='600' fontSize='2xl' lineHeights='9' textAlign='justify' fontWeight='400'>
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <HStack spacing={10}>
            <Flex direction='column' align='center' px={2}>
              <Text as='span' fontSize='5xl' color='yellow.500' fontWeight='600'>50</Text>
              <Text fontSize='2xl' fontWeight='600'>países</Text>
            </Flex>

            <Flex direction='column' align='center' px={2}>
              <Text as='span' fontSize='5xl' color='yellow.500' fontWeight='600'>60</Text>
              <Text fontSize='2xl' fontWeight='600'>países</Text>
            </Flex>

            <Flex direction='column' align='center' px={2}>
              <Text as='span' fontSize='5xl' color='yellow.500' fontWeight='600'>27</Text>
              <Flex align='center'>
                <Text fontSize='2xl' fontWeight='600'>
                  cidades +100
                </Text>
                <Icon as={FiInfo} fontSize="md" opacity='0.5' ml='5px'/>
              </Flex>
            </Flex>
          </HStack>
        </Flex>
      
        <Box>
          <Heading
            as='h1'
            fontWeight='500'
            fontSize='4xl'
            color='gray.600'
          >
            Cidades +100
          </Heading>

          <SimpleGrid columns={4} spacing={10} my='45px'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}