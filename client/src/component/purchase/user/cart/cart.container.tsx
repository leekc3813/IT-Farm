import { BASE_URL } from "@/src/config/config";
import UserCartPageUI from "./cart.presenter";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function UserCartPage(): JSX.Element {
    const [data, setData] = useState([])

    const router = useRouter()

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}order/read/`)

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
        <UserCartPageUI
            data={data}
        />
    )
}