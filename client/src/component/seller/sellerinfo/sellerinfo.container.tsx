import SellerinfoPageUI from "./sellerinfo.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SellerinfoPage():JSX.Element {
    const router = useRouter()
    const [farmsData, setFarmsData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:8000/farms/read/',{
                user_id : localStorage.getItem('id')
            })
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