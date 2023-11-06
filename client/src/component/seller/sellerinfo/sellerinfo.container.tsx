import SellerinfoPageUI from "./sellerinfo.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SellerinfoPage():JSX.Element {
    const router = useRouter()
    const [farmsData, setFarmsData] = useState([])

    const onClickEdit = () => {
        router.push('/seller/register/edit/3')
    }

    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:8000/farms/read/',{
                id : localStorage.getItem('id')
            },{
                headers : {
                    Authorization : localStorage.getItem('accesstoken')
                }
            })
            setFarmsData(response.data)
            console.log(response)
        }catch(error){
            console.log('error', error)
        }
        
    }

    useEffect(() => {
        fetchData()
    }, [])


    return(
        <SellerinfoPageUI
            onClickEdit = {onClickEdit}
            farmsData = {farmsData}
         />
    )
}