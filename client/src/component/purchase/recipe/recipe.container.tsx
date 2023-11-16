import { BASE_URL } from "@/src/config/config";
import RecipePageUI from "./recipe.presenter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RecipePage():JSX.Element {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}recipe/read/`)
            setData(response.data)
        }catch(error) {
            console.log(error)
        }
    }

    useEffect (()=> {
        fetchData();
    },[])

    return(
        <RecipePageUI 
            data = {data}
        />
    )
}