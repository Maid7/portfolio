import { Heading,Container,Stack,HStack,Text,Divider,Card,CardBody,ButtonGroup,Button,CardFooter,Image, Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react"
import imageOne from "../assets/images/bts-keramicar.jpg"
import imageTwo from "../assets/images/admiral-kuhinja.jpg"
import imageThree from "../assets/images/movie-minds.jpg"
import Fade from 'react-reveal/Fade';
const Projects = () => {
  return (
    <Container id="projects" as="section"  maxWidth="960px" align="center" p="40px 60px" >
    <Stack
      as="Box"
      textAlign={"center"}
      spacing={{ base: 8, md: 14 }}
      pb={{ base: 20, md: 36 }}
    >
      <Stack align="center" direction="row" p={4}>
        <HStack mx={4}>
          <Text color="purple.400" fontWeight={800}>
            02
          </Text>
          <Text fontWeight={800}>Projects</Text>
        </HStack>
        <Divider orientation="horizontal" />
      </Stack>

      {/* Card */}
      <Stack align="center">
        <Fade bottom>
        <Card maxW='920px'>
     <CardBody>
    <Image
      src={imageOne}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>BTS Keramicar</Heading>
      <Text>
        A responsive website for local tiler company.Build using Vanilla JS.It was my first ever project.
      </Text>
      
    </Stack>
  </CardBody>
     <Divider />
       <CardFooter>
     <ButtonGroup spacing='2'>
        <a href="https://bts-keramicar.netlify.app/"
        target="_blank"
        >
        <Button variant='solid' colorScheme='purple'>
        Live Demo
      </Button>
        </a>
        <a href="https://github.com/Maid7/My-first-website">
        <Button variant='ghost' colorScheme='purple'>
        GitHub
      </Button>
        </a>
     
      
    </ButtonGroup>
  </CardFooter>
</Card>
        </Fade>
      
      </Stack>

      {/* card  */}
      <Stack align="center">
        <Fade bottom>
        <Card maxW='920px' >
     <CardBody>
    <Image
      src={imageTwo}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Admiral Kuhinja</Heading>
      <Text>
      A responsive recipe website built using React, Framer Motion.My first React Project.
      </Text>
    
    </Stack>
  </CardBody>
     <Divider />
       <CardFooter>
     <ButtonGroup spacing='2'>
        <a href="https://admiral-kuhinja.netlify.app/" target="_blank">
        <Button variant='solid' colorScheme='purple'>
       Live Demo
      </Button>
        </a>     
     <a href="https://github.com/Maid7/Admiral-Kuhinja" target="_blank">
    <Button variant='ghost' colorScheme='purple'>
      Github
      </Button>
      </a>
      
    </ButtonGroup>
  </CardFooter>
</Card>
        </Fade>
      
      </Stack>
      {/* card */}
      <Stack align="center">
        <Fade bottom>
        <Card maxW='920px' >
     <CardBody>
    <Image
      src={imageThree}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Movie Minds</Heading>
      <Text>
      A movie  application that fetches movie data from an API and displays it in a visually appealing manner. Built using React.
      </Text>
     
    </Stack>
  </CardBody>
     <Divider />
       <CardFooter>
     <ButtonGroup spacing='2'>
        <a href="https://movie-minds.netlify.app/" target="_blank">
        <Button variant='solid' colorScheme='purple'>
        Live Demo
      </Button>
        </a>
     <a href="https://github.com/Maid7/movie-minds">
     <Button variant='ghost' colorScheme='purple'>
        Github
      </Button>
     </a>
      
    </ButtonGroup>
  </CardFooter>
     </Card>
     </Fade>
     </Stack>
      
      {/* other projects */}
      <Heading color="purple.200">Other Projects</Heading>
 
     <Tabs mt="20px" p="20px" colorScheme="purple" variant="enclosed">
       <TabList>
        <Tab _selected={{color : "white", bg: "purple.400"}}> All</Tab>
        <Tab _selected={{color : "white", bg: "purple.400"}}>Javascript</Tab>
        <Tab _selected={{color : "white", bg: "purple.400"}}>React JS</Tab>
       </TabList>

       <TabPanels >
        <TabPanel display="flex" ml="-10px" 
        flexDirection={{base: "column" , md: "column" , lg: "row"}}
        >
        <Fade bottom>
        <Card maxW='320px' h="400px" mr="10px" mt="20px">
     <CardBody>
    <Image
      src={imageOne}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>BTS Keramicar</Heading>
      <Text>
      A responsive website for local tiler company.Build using Vanilla JS.It was my first ever project.
      </Text>
     
    </Stack>
  </CardBody>
   
       <CardFooter>
     <ButtonGroup spacing='2'>
        <a href="https://bts-keramicar.netlify.app/" target="_blank">
        <Button variant='solid' colorScheme='purple'>
        Live Demo
      </Button>
        </a>
     <a href="https://github.com/Maid7/My-first-website">
     <Button variant='ghost' colorScheme='purple'>
        Github
      </Button>
     </a>
      
    </ButtonGroup>
  </CardFooter>
     </Card>
     </Fade>
     <Fade bottom>
        <Card maxW='320px' h="400px" mr="20px" mt="20px">
     <CardBody>
    <Image
      src={imageTwo}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Admiral Kuhinja</Heading>
      <Text>
      A responsive recipe website built using React, Framer Motion.My first React  Project.
      </Text>
     
    </Stack>
  </CardBody>
  
       <CardFooter>
     <ButtonGroup spacing='2'>
        <a href="https://admiral-kuhinja.netlify.app/" target="_blank">
        <Button variant='solid' colorScheme='purple'>
        Live Demo
      </Button>
        </a>
     <a href="https://github.com/Maid7/Admiral-Kuhinja">
     <Button variant='ghost' colorScheme='purple'>
        Github
      </Button>
     </a>
      
    </ButtonGroup>
  </CardFooter>
     </Card>
     </Fade>
     <Fade bottom>
        <Card maxW='320px' h="400px" mt="20px">
     <CardBody>
    <Image
      src={imageThree}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Movie Minds</Heading>
      <Text>
      A movie  application that fetches movie data from an API and displays it in a visually appealing manner. Built using React.
      </Text>
     
    </Stack>
  </CardBody>
    
       <CardFooter>
     <ButtonGroup spacing='2'>
        <a href="https://movie-minds.netlify.app/" target="_blank">
        <Button variant='solid' colorScheme='purple'>
        Live Demo
      </Button>
        </a>
     <a href="https://github.com/Maid7/movie-minds">
     <Button variant='ghost' colorScheme='purple'>
        Github
      </Button>
     </a>
      
    </ButtonGroup>
  </CardFooter>
     </Card>
     </Fade>
        </TabPanel>
        <TabPanel>
        <Fade bottom>
        <Card maxW='320px' >
     <CardBody>
    <Image
      src={imageOne}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>BTS Keramicar</Heading>
      <Text>
      A responsive website for local tiler company.Build using Vanilla JS.It was my first ever project.
      </Text>
     
    </Stack>
  </CardBody>
     <Divider />
       <CardFooter>
     <ButtonGroup spacing='2'>
        <a href="https://bts-keramicar.netlify.app/" target="_blank">
        <Button variant='solid' colorScheme='purple'>
        Live Demo
      </Button>
        </a>
     <a href="https://github.com/Maid7/My-first-website">
     <Button variant='ghost' colorScheme='purple'>
        Github
      </Button>
     </a>
      
    </ButtonGroup>
  </CardFooter>
     </Card>
     </Fade>
        </TabPanel>

        <TabPanel display="flex" flexDirection={{base: "column", md: "row" ,lg: "row"}}>
        <Fade bottom>
        <Card maxW='320px' height="400px" mt="20px">
     <CardBody>
    <Image
      src={imageThree}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Movie Minds</Heading>
      <Text>
      A movie  application that fetches movie data from an API and displays it in a visually appealing manner. Built using React.
      </Text>
     
    </Stack>
  </CardBody>
     <Divider />
       <CardFooter>
     <ButtonGroup spacing='2'>
        <a href="https://movie-minds.netlify.app/" target="_blank">
        <Button variant='solid' colorScheme='purple'>
        Live Demo
      </Button>
        </a>
     <a href="https://github.com/Maid7/movie-minds">
     <Button variant='ghost' colorScheme='purple'>
        Github
      </Button>
     </a>
      
    </ButtonGroup>
  </CardFooter>
     </Card>
     </Fade>
     <Fade bottom>
        <Card maxW='320px' h="400px" ml="10px" mt="20px">
     <CardBody>
    <Image
      src={imageTwo}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Admiral Kuhinja</Heading>
      <Text>
      A responsive recipe website built using React, Framer Motion.My first React
Project.
      </Text>
     
    </Stack>
  </CardBody>
     <Divider />
       <CardFooter>
     <ButtonGroup spacing='2'>
        <a href="https://admiral-kuhinja.netlify.app/" target="_blank">
        <Button variant='solid' colorScheme='purple'>
        Live Demo
      </Button>
        </a>
     <a href="https://github.com/Maid7/Admiral-Kuhinja">
     <Button variant='ghost' colorScheme='purple'>
        Github
      </Button>
     </a>
      
    </ButtonGroup>
  </CardFooter>
     </Card>
     </Fade>
     
        </TabPanel>
       

       </TabPanels>
     </Tabs>


      </Stack>
      </Container>
  )
}

export default Projects
