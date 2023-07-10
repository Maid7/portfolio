
import {  Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon,SunIcon } from '@chakra-ui/icons';
export default function DarkModeToggle() {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} 
    display={{ base: "flex", md: 'flex', lg: "flex" }}
    >
    {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
  </Button>
  )
}
