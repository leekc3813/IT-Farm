import axios from "axios";
import HarvestPageUI from "./harvest.presenter";
import { useEffect, useState } from "react";

export default function HarvestPage():JSX.Element {
    const [farmData, setfarmData] = useState([])

    const fetchData = async ()=> {
        // const token = localStorage.getItem('accesstoken')
        try {
            const response = await axios.post('http://localhost:8000/farms/read/',{
                name : '찬이네농장'
            })
            setfarmData(response.data)
            console.log(response.data)
        }catch(error){
            console.log('error',error)
        }  
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <HarvestPageUI
            farmData = {farmData}
         />
    )
}