import axios from "axios";
import RecipeDetailPageUI from "./recipeDetail.presenter";
import { useRouter } from "next/router";
import { useEffect, useState} from 'react';

export default function RecipeDetailPage():JSX.Element {
    const [data, setData] = useState([])
    const router = useRouter()

    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:8000/recipe/detail/',{
            recipe_id : router.asPath.slice(17),
            })
            setData(response.data)
            console.log(response.data)
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