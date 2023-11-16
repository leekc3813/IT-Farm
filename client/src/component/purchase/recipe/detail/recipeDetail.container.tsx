import axios from "axios";
import RecipeDetailPageUI from "./recipeDetail.presenter";
import { useRouter } from "next/router";
import { useEffect, useState} from 'react';
import { BASE_URL } from "@/src/config/config";

export default function RecipeDetailPage():JSX.Element {
    const [data, setData] = useState([])
    const router = useRouter()

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}recipe/detail/${router.asPath.slice(17)}/`)
            setData(response.data)
        }catch(error){
            console.log(error)
        }  
    }

    useEffect(() => {
        fetchData();
    },[])

    return(
        <RecipeDetailPageUI 
            data = {data}   
        />
    )
}