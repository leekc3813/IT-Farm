import { useRouter } from "next/router";
import { HomePageUI } from "./home.presenter";

export default function HomePage():JSX.Element {
    const router = useRouter();

    const onClickAdmin = () => {
        localStorage.setItem('userstate', 'seller');
        router.push('/register')
    }

    const onCLickCustom = () => {
        localStorage.setItem('userstate', 'buyer');
        router.push('/purchase')
    }

    return (
        <HomePageUI
            onClickAdmin = {onClickAdmin}
            onCLickCustom = {onCLickCustom}
         />
    )
}