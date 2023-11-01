import FarmlistPageUI from "./farmlist.presenter";
import { IFarmlistPageProps } from "./farmlist.types";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { harvestState } from "@/src/store/harvest";

export default function FarmlistPage(props:IFarmlistPageProps):JSX.Element {
    const [isClick,setIsClick] = useState(false)

    const [harvest, setHarvest] = useRecoilState(harvestState)
    
    const onClickIcon = () => {
        setIsClick(true)
    }

    const onClickIcon2 = () => {
        setIsClick(false)
    }

    useEffect(() => {
        localStorage.setItem('harvest',props.farmData.id.toString())
        setHarvest(props.farmData.id.toString())
    },[isClick])

    useEffect(() => {
        if (props.farmData.id.toString() !== harvest){
            setIsClick(false)
        }
    },[harvest])

    return(
        <FarmlistPageUI
            farmData={props.farmData}
            onClickIcon = {onClickIcon}
            onClickIcon2 = {onClickIcon2}
            isClick = {isClick}
         />
    )
}