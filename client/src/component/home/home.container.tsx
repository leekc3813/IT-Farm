import { useRouter } from "next/router";
import { HomePageUI } from "./home.presenter";

export default function HomePage():JSX.Element {
    const router = useRouter();

    const onClickAdmin = () => {
        router.push('/register')
    }

    return (
        <HomePageUI
            onClickAdmin = {onClickAdmin}
         />
    )
}