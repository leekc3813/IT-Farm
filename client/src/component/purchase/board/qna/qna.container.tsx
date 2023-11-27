import { BASE_URL } from "@/src/config/config";
import QnaPageUI from "./qna.presenter";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


export default function QnaPage(): JSX.Element {
    const [data, setData] = useState([]);

    const [isAdmin, setIsAdmin] = useState(false)

    const router = useRouter()

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}qna/read/`)
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
        fetchData()
    }, [])

    const onClickWrite = () => {
        router.push('/purchase/board/qna/write')
    }

    return (
        <QnaPageUI
            data={data}
            onClickWrite={onClickWrite}
            isAdmin={isAdmin}
        />
    )
}