import SellerinfoPageUI from "./sellerinfo.presenter";
import { useRouter } from "next/router";

export default function SellerinfoPage():JSX.Element {
    const router = useRouter()

    const onClickEdit = () => {
        router.push('/seller/register/edit/3')
    }

    return(
        <SellerinfoPageUI
            onClickEdit = {onClickEdit}
         />
    )
}