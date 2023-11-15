import { BASE_URL } from "@/src/config/config";
import UserBasketPageUI from "./basket.presenter";
import axios from "axios";
import {useEffect} from 'react';
import { useRouter } from "next/router";

export default function UserBasketPage():JSX.Element{
    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}cart/read/`)
        }catch(error){
            console.log(error)
        }   
    }
    

    return(
        <UserBasketPageUI />
    )
}