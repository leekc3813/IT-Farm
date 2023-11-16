import SellerinfoPageUI from "./sellerinfo.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/src/config/config";

export default function SellerinfoPage():JSX.Element {
    const router = useRouter()
    const [farmsData, setFarmsData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}farms/read/`)
            setFarmsData(response.data)
        }catch(error){
            console.log('error', error)
        }
        
    }

    useEffect(() => {
        fetchData()
    }, [])


    return(
        <SellerinfoPageUI
            farmsData = {farmsData}
         />
    )
}