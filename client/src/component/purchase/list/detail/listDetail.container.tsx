import axios from "axios";
import ListDetailPageUI from "./listDetail.presenter";
import { useRouter } from "next/router";
import { useEffect, useState, ChangeEvent} from 'react'
import { errorMonitor } from "stream";
import { BASE_URL } from "@/src/config/config";

export default function ListDetailPage():JSX.Element{
    const router = useRouter()

    const [mount, setMount] = useState('')

    /* 상품정보 */
    const decodedString = decodeURIComponent(router.asPath.slice(15));

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}product/detail/${decodedString.replace(' ','_')}`)

        }catch(error){
            console.log(errorMonitor)
        }
    }

    const onClickBasket = async () => {
        // 백엔드 연결후 테스트
        // try{
        //     const response = await axios.post(`${BASE_URL}`,{
        //         product_id : decodedString,
        //         count : mount,
        //     })
                
        // }catch(error){
        //     console.log(error)
        // }
        alert('장바구니에 담았습니다.')
        router.push('/purchase/basket/leekc3813')
    }

    const onClickOrder = async () => {
        localStorage.setItem('orderMount','수량')
        router.push(`/purchase/list/${decodedString}/order`)
    }

    const onChangeMount = (event:ChangeEvent<HTMLInputElement>) => {
        setMount(event.target.value)
    }

    return(
        <ListDetailPageUI 
            onClickOrder = {onClickOrder}
            onChangeMount = {onChangeMount}
            onClickBasket = {onClickBasket}
         />
    )
}