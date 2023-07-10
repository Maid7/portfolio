import { Box, Button, Container, Heading, Divider,Text ,Stack,HStack} from "@chakra-ui/react";

const About = () => {
  return (
    <Container id="about" as="section"  maxWidth="960px" align="center" p="40px 60px" mt="8rem">
        <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
            <Stack align="center" direction="row" px={4}>
              <HStack mx={4}>
                <Text color="purple.400" fontWeight={800}>
                  01
                </Text>
                <Text fontWeight={800}>About</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>
            <Text color="purple.400" fontSize={"xl"} fontWeight={"bold"} px={4}>
            I'm a passionate front-end developer with expertise in React and Chakra UI. I have a strong understanding of modern web development principles and love creating intuitive and visually appealing user interfaces. With a keen eye for detail and a commitment to delivering high-quality code, I strive to create seamless user experiences. Let's build something amazing together!
            </Text>
            <Text color="purple.400" fontSize={"xl"} fontWeight={"bold"} px={4}>
           When I'm not at the computer,I'm usually in the gym,playing video games or reading books.
            </Text>
          </Stack>
    </Container>
  )
}

export default About
