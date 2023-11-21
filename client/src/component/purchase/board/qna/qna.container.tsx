import { BASE_URL } from "@/src/config/config";
import QnaPageUI from "./qna.presenter";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


export default function QnaPage(): JSX.Element {
    const [data, setData] = useState([]);

    const router = useRouter()

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}qna/read/`)
            console.log(response.data)
            setData(response.data)

        } catch (error: any) {
            console.log(error)
            if (error.response.status === 401) {
                alert('로그인 x')
                router.push('/register')
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <QnaPageUI
            data={data}
        />
    )
}