import { Flex, Heading, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Slide() {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{width: '100%', flex: '1', height: '100%'}}
    >
      <SwiperSlide>
        <Link href='/continents/europa'>
          <a>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage='url("/images/europe-slide.png")'
              bgPosition='center'
              bgRepeat='no-repeat'
              bgSize='cover'
              textAlign='center'
            >
              <Heading 
                fontSize="5xl"
                color="gray.50" 
                fontWeight="bold"
              >
                Europa
              </Heading>
              <Text 
                fontWeight="bold" 
                color="gray.100" 
                fontSize="2xl"
                mt="4"
              >
                O continente mais antigo.
              </Text>
            </Flex>
          </a>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href='/continents/asia'>
          <a>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage='url("/images/asia-slide.jpg")'
              bgPosition='center'
              bgRepeat='no-repeat'
              bgSize='cover'
              textAlign='center'
            >
              <Heading 
                fontSize="5xl"
                color="gray.50" 
                fontWeight="bold"
              >
                Ásia
              </Heading>
              <Text 
                fontWeight="bold" 
                color="gray.100" 
                fontSize="2xl"
                mt="4"
              >
                O continente mais populoso.
              </Text>
            </Flex>
          </a>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href='/continents/africa'>
          <a>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage='url("/images/africa-slide.jpg")'
              bgPosition='center'
              bgRepeat='no-repeat'
              bgSize='cover'
              textAlign='center'
            >
              <Heading 
                fontSize="5xl"
                color="gray.50" 
                fontWeight="bold"
              >
                África
              </Heading>
              <Text 
                fontWeight="bold" 
                color="gray.100" 
                fontSize="2xl"
                mt="4"
              >
                O continente mais colorido.
              </Text>
            </Flex>
          </a>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href='/continents/america-do-sul'>
          <a>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage='url("/images/america1-slide.jpg")'
              bgPosition='center'
              bgRepeat='no-repeat'
              bgSize='cover'
              textAlign='center'
            >
              <Heading 
                fontSize="5xl"
                color="gray.50" 
                fontWeight="bold"
              >
                Ámerica do Sul
              </Heading>
              <Text 
                fontWeight="bold" 
                color="gray.100" 
                fontSize="2xl"
                mt="4"
              >
                O melhor continente.
              </Text>
            </Flex>
          </a>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href='/continents/america-do-norte'>
          <a>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage='url("/images/america2-slide.jpg")'
              bgPosition='center'
              bgRepeat='no-repeat'
              bgSize='cover'
              textAlign='center'
            >
              <Heading 
                fontSize="5xl"
                color="gray.50" 
                fontWeight="bold"
              >
                Ámerica do Norte
              </Heading>
              <Text 
                fontWeight="bold" 
                color="gray.100" 
                fontSize="2xl"
                mt="4"
              >
                O continente mais tecnológico.
              </Text>
            </Flex>
          </a>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href='/continents/oceania'>
          <a>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage='url("/images/oceania-slide.jpg")'
              bgPosition='center'
              bgRepeat='no-repeat'
              bgSize='cover'
              textAlign='center'
            >
              <Heading 
                fontSize="5xl"
                color="gray.50" 
                fontWeight="bold"
              >
                Oceania
              </Heading>
              <Text 
                fontWeight="bold" 
                color="gray.100" 
                fontSize="2xl"
                mt="4"
              >
                O continente mais peculiar.
              </Text>
            </Flex>
          </a>
        </Link>
      </SwiperSlide>
    </Swiper>
  )
}