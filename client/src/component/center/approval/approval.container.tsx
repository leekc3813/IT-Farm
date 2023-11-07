import { RadioChangeEvent } from "antd";
import ApprovalPageUI from "./approval.presenter";
import { useEffect, useState } from "react";

export default function ApprovalPage():JSX.Element {
    const [placement, setPlacement] = useState('정읍')

    const placementChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value)
    }

    return(
        <ApprovalPageUI 
        placement = {placement}
        placementChange = {placementChange}
        />
    )
}