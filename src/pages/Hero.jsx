import {  Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
const Hero = () => {

  useEffect(() => {
    const smoothScrollHandler = (event) => {
      if (event.target.hash && event.target.classList.contains('smooth-scroll-link')) {
        event.preventDefault();

        const targetElement = document.querySelector(event.target.hash);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', smoothScrollHandler);

    return () => {
      document.removeEventListener('click', smoothScrollHandler);
    };
  }, []);
  return (
    <Container as="section"  maxWidth="960px" align="center" p="40px 60px">
      <Heading pt="60px" fontSize="60px" >Hi,my name is Maid.</Heading>
     <Text fontSize="20px" >Welcome to my portfolio!</Text>
      <Button as="a" className="smooth-scroll-link" href="#contact" mt="50px" colorScheme='purple'>Let's connect!</Button>

    </Container>
  )
}

export default Hero
