import { useState } from "react"
import { Flex, Text, Button, IconButton, useColorMode, ButtonGroup, Spacer } from "@chakra-ui/react"
import { MenuItem } from "../molecules/MenuItem"
import { DarkModeSwitch } from "../atoms/DarkModeSwitch"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"

export const TopBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const [display, setDisplay] = useState("none")
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex w="100%" flexDirection="row" px="16px" py="8px" justifyContent="center">
            {/* Left Logo (displays for both desktop & mobile menus) */}
            <Flex 
                w={["100%", "100%", "18ch", "16ch"]} 
                minWidth='max-content' 
                alignItems='left' 
                gap='2'
            >
                <Text
                    fontSize="30px"
                    fontWeight="bold"
                    lineHeight="42px"
                    color="#1F79BA"
                    flexGrow={1}
                >
                    SuperApp
                </Text>
            </Flex>

            {/* Desktop Menu */}
            <Flex 
                w={["100%", "100%", "80ch", "80ch"]} 
                display={["none", "none", "flex", "flex"]}
                minWidth='max-content' 
                alignItems='center' 
                gap='2'
            >
                <ButtonGroup spacing="12px">
                    <MenuItem text="Blog" href="/blog" width="" />
                    <MenuItem text="Product" href="/product" width="" />
                    <MenuItem text="Pricing" href="/pricing" width="" />
                </ButtonGroup>

                <Spacer />
                
                <Flex>
                    <Button variant="solid" colorScheme="blue">Connect</Button>
                </Flex>
            </Flex>

            {/* Mobile (Hamburger) Menu */}
            <IconButton 
                aria-label="Open Menu"
                size="lg"
                mr={2}
                icon={<HamburgerIcon />}
                display={["flex", "flex", "none", "none"]}
                onClick={() => setDisplay("flex")}
            />

            {/* Mobile Menu Content */}
            <Flex
                w="100vw"
                display={display}
                zIndex={20}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
                bgColor={colorMode === 'dark' ? "rgba(0,0,0,0.9)" : "rgba(255,255,255,0.95)"}
            >
                <Flex justify="space-between" alignItems="center">
                    <Flex marginLeft="10px">
                        <DarkModeSwitch />
                    </Flex>

                    <IconButton 
                        mt={2}
                        mr={2}
                        aria-label="Close Menu"
                        size="lg"
                        icon={<CloseIcon/>}
                        onClick={() => setDisplay("none")}
                    />
                </Flex>

                <Flex 
                    flexDir="column"
                    align="center"
                >
                    <MenuItem text="Blog" href="/blog" width="100%" />
                    <MenuItem text="Product" href="/product" width="100%" />
                    <MenuItem text="Pricing" href="/pricing" width="100%" />
                    <Button mt="10px" variant="solid" colorScheme="blue">Connect</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}