import {  Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Container as="section"  maxWidth="960px" align="center" p="40px 60px">
      <Heading pt="60px" fontSize="60px" >Hi,my name is Maid.</Heading>
      <Heading color="purple.400">I'm FrontEnd React Developer.</Heading>
      
   
      <Text fontSize="20px" mt="60px">Welcome to my portfolio!</Text>
      
 
     
       
      <Button mt="50px" colorScheme='purple'>Let's connect!</Button>

    </Container>
  )
}

export default Hero
