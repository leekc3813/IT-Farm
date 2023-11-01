import SellerHomePageUI from "./sellerHome.presenter";
import { useRouter } from "next/router";

export default function SellerHomePage():JSX.Element{
    const router = useRouter();

    const onClickRegister = () => {
        router.push('/seller/register')
    }

    const onClickHarvest = () => {
        router.push(`seller/harvest/${localStorage.getItem('nickname')}`)
    }

    return(
        <SellerHomePageUI
            onClickRegister = {onClickRegister}
            onClickHarvest = {onClickHarvest}
         />
    )
}