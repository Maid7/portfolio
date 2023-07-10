import {  Box, FormControl, FormLabel,HStack, Input,Center,Stack,Textarea, Button, FormHelperText,Checkbox, Text } from '@chakra-ui/react';
import { useForm, ValidationError } from '@formspree/react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
function ContactForm() {

  const [state, handleSubmit] = useForm("mdorodyy");
  if (state.succeeded) {
      return <Textarea>Thanks for joining!</Textarea>
  }


  return (
  <Box maxW="md" mx="auto" p={4}>
    <form onSubmit={handleSubmit}>
   <FormControl isRequired mb="40px"> 
    <FormLabel>
      Name:
    </FormLabel>
    <Input type="text" name="name"/>
    <FormHelperText>Enter Your name</FormHelperText>
   </FormControl>
   <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
    
    <FormControl isRequired>
      <FormLabel>Email:</FormLabel>
      <Input type="email" name="email"/>
      <FormHelperText>Enter Your Email</FormHelperText>
    </FormControl>
    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

    <FormControl mt="40px" isRequired>
      <FormLabel >Your message:</FormLabel>
      <Textarea
      placeholder="Write your message here..."
      name="message"
      >

      </Textarea>
    </FormControl>

    <Button mt="20px" colorScheme="purple" type="submit" disabled={state.submitting}>Submit</Button>
    </form>
     <Text mt="10px" color="purple.400">maidsejdinovic3@gmail.com</Text>
    
     <Center>
              <HStack pt={4} spacing={4}>
               <a href="https://www.linkedin.com/in/maid-sejdinovic-6a336b282/" target="_blank"><FaLinkedin  size={28} /></a> 
               <a href="https://github.com/Maid7" target="_blank"><FaGithub  size={28} /></a> 
               <a href="https://maidsejdinovic3@gmail.com" target="_black"><FaEnvelope  size={28} /></a> 
              </HStack>
            </Center>
   

  </Box>
  );
}

export default ContactForm;


