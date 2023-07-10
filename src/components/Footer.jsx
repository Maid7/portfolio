import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" py={4} bg="purple.200">
      <Flex justifyContent="center">
        <Text fontSize="sm" color="gray.600">
          &copy; {new Date().getFullYear()} Maid Sejdinovic. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
