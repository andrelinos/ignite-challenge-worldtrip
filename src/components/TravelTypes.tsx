import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TravelTypesProps {
  children: ReactNode;
  title: string;
}

export function TravelTypes({ title, children }: TravelTypesProps) {
  return (
    <Flex direction='column' align='center'>
      {children}
      <Text 
        mt={6}
        fontSize='2xl'
        fontWeight='600'
      >
        {title}
      </Text>
    </Flex>
  )
}