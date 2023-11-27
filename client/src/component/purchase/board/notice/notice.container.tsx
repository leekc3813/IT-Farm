import { useState, useEffect } from "react";
import NoticePageUI from "./notice.presenter";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "@/src/config/config";
import { userState } from "@/src/store/states";
import { useRecoilState } from "recoil";

export default function NoticePage(): JSX.Element {

    const [data, setData] = useState([])

    const [localUser, setLocalUser] = useRecoilState(userState)
    const [isAdmin, setIsAdmin] = useState(false)

    const router = useRouter()

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}notice/read/?notice_type=1`)
            setData(response.data)

            if (localStorage.getItem('usertype') === 'admin') {
                setIsAdmin(true)
            }
        } catch (error: any) {
            if (error.response.status === 401) {
                alert('로그인 x')
                router.push('/register')
            }
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const onClickWrite = () => {
        router.push('/purchase/board/notice/write')
    }

    return (
        <NoticePageUI
            isAdmin={isAdmin}
            onClickWrite={onClickWrite}
            data={data}
        />
    )
}