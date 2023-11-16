import { BASE_URL } from "@/src/config/config";
import UserCartPageUI from "./cart.presenter";
import axios from "axios";
import {useState , useEffect} from "react";

export default function UserCartPage():JSX.Element{
    const [data, setData] = useState([])
    
    const fetchData = async () => {
        try{
            const response = await axios.get(`${BASE_URL}order/read/`)

            setData(response.data)  

        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return(
        <UserCartPageUI
            data = {data}
         />
    )
}