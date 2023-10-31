import { useRouter } from "next/router"
import HeaderPage from "./header/header.container";
import FooterPage from "./footer/footer.container";
import SellerHeaderPage from "./header/seller/sellerHeader.container";

interface ILayoutProps {
    children : JSX.Element
}

const SHOW_PURCHASE = [
    "/purchase"
]

const SHOW_SELLER = [
    "/seller"
]

export default function Layout(props:ILayoutProps):JSX.Element {
    const router = useRouter();

    const isShowPurchase = SHOW_PURCHASE.includes(router.asPath.slice(0,9))
    const isShowSeller = SHOW_SELLER.includes(router.asPath.slice(0,9))

    return(
        <>
            {isShowPurchase && <HeaderPage />}
            {isShowSeller && <SellerHeaderPage />}
            {props.children}
            {isShowPurchase && <FooterPage />}
        </>
    )
}