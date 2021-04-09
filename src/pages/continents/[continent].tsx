import { Box, Flex, Heading, HStack, Icon, SimpleGrid, Text, Tooltip } from "@chakra-ui/react"
import {  FiInfo } from 'react-icons/fi'
import { GetStaticPaths, GetStaticProps } from "next"

import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { api } from "../../services/api"

type ContinentType = {
  id: number;
  name: string;
  description: string;
  bannerImage: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  amountMostPopularCities: number;
  mostPopularCities: [{
    cityName: string;
    countryName: string;
    cityImage: string;
    countryCode: string;
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
        bgImage={`url(${continent.bannerImage})`}
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
            textTransform='capitalize'
          >
            {continent.name}
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
          <Text maxW='600' fontSize='2xl' lineHeight='9' textAlign='justify' fontWeight='400'>
            {continent.description}
          </Text>

          <HStack spacing={10}>
            <Flex direction='column' align='center' px={2}>
              <Text as='span' fontSize='5xl' color='yellow.500' fontWeight='600'>
                {continent.numberOfCountries}
              </Text>
              <Text fontSize='2xl' fontWeight='600'>países</Text>
            </Flex>

            <Flex direction='column' align='center' px={2}>
              <Text as='span' fontSize='5xl' color='yellow.500' fontWeight='600'>
                {continent.numberOfLanguages}
              </Text>
              <Text fontSize='2xl' fontWeight='600'>línguas</Text>
            </Flex>

            <Flex direction='column' align='center' px={2}>
              <Text as='span' fontSize='5xl' color='yellow.500' fontWeight='600'>
                {continent.amountMostPopularCities}
              </Text>
              <Flex align='center'>
                <Text fontSize='2xl' fontWeight='600'>
                  cidades +100
                </Text>

                <Tooltip label="100 cidades mais visitadas do mundo" bg="gray.600" color="gray.50">
                  <span>
                    <Icon as={FiInfo} fontSize="md" opacity='0.5' ml='5px'/>
                  </span>
                </Tooltip>
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
            {continent.mostPopularCities.map((city) => (
              <Card
                key={city.cityName}
                name={city.cityName}
                image={city.cityImage}
                countryName={city.countryName}
                countryCode={city.countryCode}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent } = params

  const response = await api.get(`/continents?slug=${continent}`)

  const continentInfos: ContinentType = response.data[0]

  return {
    props: {
      continent: continentInfos
    }
  }
}