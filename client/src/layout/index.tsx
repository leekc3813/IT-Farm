import { useRouter } from "next/router"
import { useRecoilState } from "recoil";
import { loginState, userState } from "../store/states";
import HeaderPage from "./header/header.container";
import FooterPage from "./footer/footer.container";
import SellerHeaderPage from "./header/seller/sellerHeader.container";
import { useEffect } from "react";
import CenterHeaderPage from "./header/center/centerHeader.container";

interface ILayoutProps {
    children : JSX.Element
}

const SHOW_PURCHASE = [
    "/purchase"
]

const SHOW_SELLER = [
    "/seller"
]

const SHOW_CENTER = [
    "/center"
]

export default function Layout(props:ILayoutProps):JSX.Element {
    const router = useRouter();

    const isShowPurchase = SHOW_PURCHASE.includes(router.asPath.slice(0,9))
    const isShowSeller = SHOW_SELLER.includes(router.asPath.slice(0,7))
    const isShowCenter = SHOW_CENTER.includes(router.asPath.slice(0,7))

    const [localLogin, setLocalLogin] = useRecoilState(loginState)
    const [localUserState, setLocalUserState] = useRecoilState(userState)

    useEffect(() => {
        if (localStorage.getItem('loginstate') === 'true') {
            setLocalLogin(true)
        }else {
            setLocalLogin(false)
        }

        if (localStorage.getItem('userstate') === 'admin'){
            setLocalUserState('admin')
        }else if(localStorage.getItem('userstate') === 'seller'){
            setLocalUserState('seller')
        }else {
            setLocalUserState('buyer')
        }
    },[])

    return(
        <>
            {isShowCenter && <CenterHeaderPage />}
            {isShowPurchase && <HeaderPage />}
            {isShowSeller && <SellerHeaderPage />}
            {props.children}
            {isShowPurchase && <FooterPage />}
        </>
    )
}