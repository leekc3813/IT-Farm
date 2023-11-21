import { RadioChangeEvent } from "antd";
import ApprovalPageUI from "./approval.presenter";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/src/config/config";
import { useRouter } from "next/router";

export default function ApprovalPage():JSX.Element {
    const [placement, setPlacement] = useState('정읍')
    const [farmData, setfarmData] = useState([])
    
    const router = useRouter()

    const placementChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value)
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}farm_product/read/?center=${placement}`)
             setfarmData(response.data)
             console.log(response.data)
        }catch(error:any){
            console.log(error)
            if (error.response.status === 401){
                alert('로그인 x')
                router.push('/register')
            }
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