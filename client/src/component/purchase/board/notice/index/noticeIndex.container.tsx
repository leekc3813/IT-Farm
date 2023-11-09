import axios from "axios";
import NoticeIndexPageUI from "./noticeIndex.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NoticeIndexPage():JSX.Element {
    const router = useRouter()

    const address = router.asPath.slice(23)
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:8000/notice/detail/',{
            user_id : localStorage.getItem('id'),
            notice_id : address,
            },{
                headers : {
                    Authorization : localStorage.getItem('accesstoken')
                }
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