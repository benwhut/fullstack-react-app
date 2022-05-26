import { Flex, Text } from "@chakra-ui/react"
import { DarkModeSwitch } from "../atoms/DarkModeSwitch"

export const LandingFooter = () => {
    return (
        <Flex as="footer" backgroundColor="tomato" flexDirection="row" alignItems="center" justify="center" px="16px" py="20px" w="100%">
            <Flex 
                w={["100%", "100%", "80ch", "80ch"]}
                minWidth="max-content"
                alignItems="center"
                justify="space-between" 
                gap="2"
            >
                <Text fontSize="sm" color="subtle">
                    &copy; {new Date().getFullYear()} SuperApp. All rights reserved.
                </Text>
                
                <DarkModeSwitch />
            </Flex>
        </Flex>
    )
}