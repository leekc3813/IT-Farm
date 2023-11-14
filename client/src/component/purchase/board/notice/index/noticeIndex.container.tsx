import axios from "axios";
import NoticeIndexPageUI from "./noticeIndex.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/src/config/config";

export default function NoticeIndexPage():JSX.Element {
    const router = useRouter()

    const address = router.asPath.slice(23)
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.post(`${BASE_URL}notice/detail/`,{
            user_id : localStorage.getItem('id'),
            notice_id : address,
            })
            setData(response.data)
            
        }catch(error){
            console.log('error',error)
        }
        
    }

    useEffect(() => {
        fetchData()
    },[])

    return(
        <NoticeIndexPageUI
            data = {data}
         />
    )
}