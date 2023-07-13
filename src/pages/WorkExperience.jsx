import { Container,Stack,HStack,Divider,Text ,Flex, Heading} from "@chakra-ui/react"

const WorkExperience = () => {
  return (
    <Container id="work-experience" as="section"  maxWidth="960px" align="center" p="40px 60px" >
    <Stack
            as="Box"
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
            <Stack align="center" direction="row" px={4}>
              <HStack mx={4}>
                <Text color="purple.400" fontWeight={800}>
                  03
                </Text>
                <Text fontWeight={800}>Work Experience</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>  

            <Flex alignItems="center" justifyContent={"space-evenly"}>
                <Stack >
                <Text fontWeight={600}>2017</Text>
                   
                  
                </Stack>
                <Stack ml="-40px">
                <Heading color="purple.400" >Waiter</Heading>
                <Text >Work as a waiter for short period of time <br /> in Sarajevo.Gained some experience <br />  at BBQ as well.</Text>
                </Stack>
            </Flex>
            <Flex alignItems="center" justifyContent={"space-evenly"}>
                <Stack >
                <Text fontWeight={600}>2018-2023</Text>
                </Stack>
                <Stack ml="-40px">
                <Heading color="purple.400">Tiler</Heading>
                <Text>Back in 2018,i've started to work as <br /> a tiler together with my father and brother. <br />Been working ever since.</Text>
                </Stack>
            </Flex>

            <Flex alignItems="center" justifyContent={"space-evenly"}>
                <Stack >
                <Text fontWeight={600}>2023 - </Text>
                </Stack>
                <Stack ml="-40px">
                <Heading color="purple.400">FrontEnd Developer</Heading>
                <Text>No experience. Waiting for a intership</Text>
                </Stack>
            </Flex>
     </Stack>   
      </Container>
  )
}

export default WorkExperience
