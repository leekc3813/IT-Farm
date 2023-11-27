import { BASE_URL } from "@/src/config/config";
import RecipePageUI from "./recipe.presenter";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function RecipePage(): JSX.Element {
    const [data, setData] = useState([])

    const router = useRouter()

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}recipe/read/`)
            setData(response.data)
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

    return (
        <RecipePageUI
            data={data}
        />
    )
}