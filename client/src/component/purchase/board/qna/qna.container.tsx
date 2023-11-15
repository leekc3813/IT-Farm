import { BASE_URL } from "@/src/config/config";
import QnaPageUI from "./qna.presenter";
import axios from "axios";
import { useState, useEffect } from "react";


export default function QnaPage():JSX.Element{
    const [data,setData] = useState([]);

    const fetchData = async () => {
        try{
            const response = await axios.get(`${BASE_URL}qna/read/`)
            console.log(response.data)
            setData(response.data)

        }catch(error){
            console.log('error',error)
        } 
    }

    useEffect(() => {
        fetchData()
    },[])

    return(
        <QnaPageUI
            data = {data}
         />
    )
}