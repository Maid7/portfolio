import { Container,Stack,HStack,Text,Divider, Heading} from "@chakra-ui/react"

import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <Container id="contact" as="section"  maxWidth="960px" align="center" p="40px 60px" >
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
                <Text fontWeight={800}>Contact</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>
            <Heading color="purple.400" fontSize="30px" fontWeight={"bold"} px={4}>
           Let's stay in touch!
            </Heading>
          </Stack>
          <ContactForm/>
    </Container>
  )
}

export default Contact
