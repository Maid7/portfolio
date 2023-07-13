import { Heading,Container,Stack,HStack,Text,Divider,Card,CardBody,ButtonGroup,Button,CardFooter,Image, Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react"

const Education = () => {
  return (
    <Container id="education" as="section"  maxWidth="960px" align="center" p="40px 60px" >
    <Stack
            as="Box"
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
            <Stack align="center" direction="row" px={4}>
              <HStack mx={4}>
                <Text color="purple.400" fontWeight={800}>
                  02
                </Text>
                <Text fontWeight={800}>Education</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>

            <Heading color="purple.400">Elementary School</Heading>
            <Text mt="-20px" fontWeight="600">Vuk Stefanovic Karadzic,Doboj</Text>
            <Heading color="purple.400">High School</Heading>
            <Text mt="-20px" fontWeight="600">Saobracajna I Elektro,Doboj</Text>
           <Heading color="purple.400">Web programiranje za pocetnike(HTML/CSS/JS)</Heading>
            <Text mt="-20px" fontWeight="600">(Milan Jakupovic RIS HUB Uzice)</Text>
            <Heading color="purple.400">The Complete JavaScript Course 2023: From Zero to Expert</Heading>
            <Text mt="-20px" fontWeight="600">(Jonas Schmedtmann)</Text>
            <Heading color="purple.400">Full Modern React Tutoria</Heading>
            <Text mt="-20px" fontWeight="600">(The Net Ninja)

</Text>
     
     </Stack>   
      </Container>
  )
}

export default Education
