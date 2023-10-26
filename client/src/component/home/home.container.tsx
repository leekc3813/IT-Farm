import { useRouter } from "next/router";
import { HomePageUI } from "./home.presenter";

export default function HomePage():JSX.Element {
    const router = useRouter();

    const onClickAdmin = () => {
        router.push('/register')
    }

    const onCLickCustom = () => {
        router.push('/purchase')
    }

    return (
        <HomePageUI
            onClickAdmin = {onClickAdmin}
            onCLickCustom = {onCLickCustom}
         />
    )
}