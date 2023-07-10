import React from 'react';
import { Box, Flex, Spacer, Stack, Collapse, Button,IconButton, useDisclosure ,useColorMode, Heading} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'purple.200', dark: 'gray.800' };
  const { isOpen, onToggle } = useDisclosure();

 
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
    <Box 
    bg={bgColor[colorMode]}
    px={4} py={3}
    zIndex="sticky"
    as="header"
    alignItems="center"
    justifyContent="space-between"
    w="100%"
    >
      <Flex maxW="1200px" mx="auto" align="center" >
        <Box>
          <IconButton
            display={{  md: 'none', lg: "none" }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={onToggle}
          />
        </Box>
       
      <Flex alignItems="center"  display={{ base: 'none', md: 'flex' }}>
    
       <Box >
        <Heading>M S</Heading>
        </Box>
  

         <Spacer/>
          {/*  */}
          <Stack 
            
             ml="30rem"
              spacing={6}
              direction={{ base: 'column', md: 'row' }}
              align="center" 
             
            >
                  
              <Box >
                <a href="#about" className="smooth-scroll-link">About</a>
              </Box>
              <Box >
                <a href="#projects" className="smooth-scroll-link">Projects</a>
              </Box>
              <Box >
                <a href="#contact" className="smooth-scroll-link">Contact</a>
              </Box>
              <DarkModeToggle />
            </Stack>
        </Flex>

        <Spacer />

        <Collapse
         in={isOpen} 
        animateOpacity 
     >
          
          <Box mt={{ base: 4, md: 0 }}
          display={{md: "flex"}} >

             <DarkModeToggle />

            <Stack
              mr="60px"
              spacing={4}
              align="center"
              direction={{ base: 'column', md: 'row' }}
              >
             
              <Box >
                <a href="#about" className="smooth-scroll-link" >About</a>
              </Box>
              <Box  >
                <a href="#projects"  className="smooth-scroll-link">Projects</a>
              </Box>
              <Box>
                <a href="#contact" className="smooth-scroll-link">Contact</a>
              </Box>
            </Stack>

          </Box>
        </Collapse>
      </Flex>
    </Box>
  );
};

export default Navbar;
