import { Flex, Heading, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

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
          <a>
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
          </a>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
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
          <a>
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
          </a>
        </Flex>
      </SwiperSlide>
    </Swiper>
  )
}