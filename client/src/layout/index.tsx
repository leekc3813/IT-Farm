import { useRouter } from "next/router"
import HeaderPage from "./header/header.container";
import FooterPage from "./footer/footer.container";

interface ILayoutProps {
    children : JSX.Element
}

const SHOW_PURCHASE = [
    "/purchase"
]

export default function Layout(props:ILayoutProps):JSX.Element {
    const router = useRouter();

    const isShowPurchase = SHOW_PURCHASE.includes(router.asPath.slice(0,9))

    console.log(router.asPath.slice(0,9))

    return(
        <>
            {isShowPurchase && <HeaderPage />}
            {props.children}
            {isShowPurchase && <FooterPage />}
        </>
    )
}