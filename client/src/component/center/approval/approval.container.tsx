import { RadioChangeEvent } from "antd";
import ApprovalPageUI from "./approval.presenter";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/src/config/config";

export default function ApprovalPage():JSX.Element {
    const [placement, setPlacement] = useState('정읍')
    const [farmData, setfarmData] = useState([])

    const placementChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value)
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}farm_product/read/?center=${placement}`)
             setfarmData(response.data)
             console.log(response.data)
        }catch(error){
            console.log('error',error)
        }
    }

    useEffect (() => {
        fetchData()
    },[placement])


    return(
        <ApprovalPageUI 
        placement = {placement}
        placementChange = {placementChange}
        farmData = {farmData}
        />
    )
}