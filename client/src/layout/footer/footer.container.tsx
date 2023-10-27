import { useRouter } from "next/router";
import FooterPageUI from "./footer.presenter";

export default function FooterPage():JSX.Element{
    const router = useRouter()

    const onClickHome = ()=> {
        router.push('/')
    }

    const onClickRegister = ()=> {
        router.push('/register')
    }

    return(
        <FooterPageUI
            onClickHome = {onClickHome}
            onClickRegister = {onClickRegister}
         />
    )
}