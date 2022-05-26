import { Button } from "@chakra-ui/react"
import Link from 'next/link'

type MenuItemProps = {
    text: string
    href: string
    width: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ text, href, width }) => {
    return (
        <Button fontSize="16px" variant="ghost" w={width}>
            <Link href={href}>
                <a>{text}</a>
            </Link>
        </Button>
    )
}