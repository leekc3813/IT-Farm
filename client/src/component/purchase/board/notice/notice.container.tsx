import { useState, useEffect } from "react";
import NoticePageUI from "./notice.presenter";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "@/src/config/config";

export default function NoticePage():JSX.Element {
    
    const [data, setData] = useState([])

    const router = useRouter()

    const fetchData = async () => {
        try{
            const response = await axios.get(`${BASE_URL}notice/read/?notice_type=1`)
            if (response.status === 200){
                setData(response.data)
            }else{
                console.log('server 에러')
            }
        }catch(error:any){
            console.log(error)
            if (error.response.status === 401){
                alert('로그인 x')
                router.push('/register')
            }
        }  
    }

    useEffect(() => {
        fetchData();
    },[])
    
    const onClickWrite = () => {
        router.push('/purchase/board/notice/write')
    }

    const user_type = localStorage.getItem('usertype')

    return(
        <NoticePageUI
            isAdmin = {user_type}
            onClickWrite = {onClickWrite}
            data = {data}
        />
    )
}