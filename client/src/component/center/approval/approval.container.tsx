import { RadioChangeEvent } from "antd";
import ApprovalPageUI from "./approval.presenter";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ApprovalPage():JSX.Element {
    const [placement, setPlacement] = useState('정읍')

    const placementChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value)
    }

    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:8000/farm_product/read/',{
            user_id : localStorage.getItem('id'),
            center : placement,
             },{
                 headers : {
                     Authorization : localStorage.getItem('accesstoken')
                 }
             })
             console.log(response)
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
        />
    )
}