import RecipePageUI from "./recipe.presenter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RecipePage():JSX.Element {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await axios.get('http://localhost:8000/recipe/read')
        setData(response.data)
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