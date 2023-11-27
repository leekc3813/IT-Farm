import SellerinfoPageUI from "./sellerinfo.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/src/config/config";

export default function SellerinfoPage(): JSX.Element {
    const router = useRouter()
    const [farmsData, setFarmsData] = useState([])
    const [productData, setProductData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}farms/read/`)
            const response2 = await axios.get(`${BASE_URL}farm_product/read/`)
            setFarmsData(response.data)
            setProductData(response2.data)
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


    return (
        <SellerinfoPageUI
            farmsData={farmsData}
            productData={productData}
        />
    )
}