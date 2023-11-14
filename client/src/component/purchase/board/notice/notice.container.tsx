import { useState, useEffect } from "react";
import NoticePageUI from "./notice.presenter";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "@/src/config/config";

export default function NoticePage():JSX.Element {
    const [isAdmin, setIsAdmin] = useState('admin')
    const [data, setData] = useState([])

    const router = useRouter()

    const fetchData = async () => {
        try{
            const response = await axios.post(`${BASE_URL}notice/read/`, {
            user_id : localStorage.getItem('id'),
            notice_type : 1,
            user_type : localStorage.getItem('usertype'),
            })
            if (response.status === 200){
                setData(response.data)
                
            }else{
                console.log('server 에러')
            }
        }catch(error){
            console.log(error)
        }  
    }

    useEffect(() => {
        fetchData();
    },[])
    
    const onClickWrite = () => {
        router.push('/purchase/board/notice/write')
    }

    return(
        <NoticePageUI
            isAdmin = {isAdmin}
            onClickWrite = {onClickWrite}
            data = {data}
        />
    )
}