import SellerinfoFarmslistPageUI from "./farmslist.presenter";
import { ISellerinfoFarmslistPageProps } from "./farmslist.types";

export default function SellerinfoFarmslistPage(props:ISellerinfoFarmslistPageProps):JSX.Element {
    return (
        <SellerinfoFarmslistPageUI
            farmsData = {props.farmsData}
         />
    )
}