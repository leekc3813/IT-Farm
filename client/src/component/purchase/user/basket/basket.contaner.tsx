import { BASE_URL } from "@/src/config/config";
import UserBasketPageUI from "./basket.presenter";
import axios from "axios";
import {useEffect , useState} from 'react';
import { useRouter } from "next/router";

export default function UserBasketPage():JSX.Element{
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}cart/read/`)
            
            if (response.status === 200) {
                setData(response.data)
            }

        }catch(error){
            console.log(error)
        }   
    }
    
    return(
        <UserBasketPageUI

         />
    )
}