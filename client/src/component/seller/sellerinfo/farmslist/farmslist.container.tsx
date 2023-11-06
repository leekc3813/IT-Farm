import SellerinfoFarmslistPageUI from "./farmslist.presenter";
import { ISellerinfoFarmslistPageProps } from "./farmslist.types";
import { useRouter } from "next/router";

export default function SellerinfoFarmslistPage(props:ISellerinfoFarmslistPageProps):JSX.Element {
    const router = useRouter()
    
    const onClickEdit = () => {
        router.push(`/seller/register/edit/${props.farmsData.id}`)
    }

    return (
        <SellerinfoFarmslistPageUI
            farmsData = {props.farmsData}
            onClickEdit = {onClickEdit}
         />
    )
}