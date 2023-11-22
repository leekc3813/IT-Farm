import axios from "axios";
import NoticeIndexPageUI from "./noticeIndex.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/src/config/config";

export default function NoticeIndexPage(): JSX.Element {
    const router = useRouter()

    const address = router.asPath.slice(23)
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}notice/detail/${address}/`)
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
        <NoticeIndexPageUI
            data={data}
        />
    )
}