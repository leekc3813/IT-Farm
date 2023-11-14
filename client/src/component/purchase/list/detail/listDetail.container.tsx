import axios from "axios";
import ListDetailPageUI from "./listDetail.presenter";
import { useRouter } from "next/router";
import { useEffect} from 'react'
import { errorMonitor } from "stream";
import { BASE_URL } from "@/src/config/config";

export default function ListDetailPage():JSX.Element{
    const router = useRouter()
    const decodedString = decodeURIComponent(router.asPath.slice(15));

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}product/detail/${decodedString.replace(' ','_')}`)

        }catch(error){
            console.log(errorMonitor)
        }
    }

    const onClickBasket = async () => {
        try{
            const response = await axios.post(`${BASE_URL}`,{
                product_id : '아이디',
                count : '수량'
            })
                
        }catch(error){
            console.log(error)
        }
    }

    const onClickOrder = async () => {
        localStorage.setItem('orderMount','수량')
        router.push(`/purchase/list/${decodedString}/order`)
    }

    return(
        <ListDetailPageUI 
        onClickOrder = {onClickOrder}
         />
    )
}