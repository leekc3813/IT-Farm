import axios from "axios";
import ListDetailPageUI from "./listDetail.presenter";
import { useRouter } from "next/router";
import { useEffect, useState, ChangeEvent} from 'react'
import { errorMonitor } from "stream";
import { BASE_URL } from "@/src/config/config";
import { orderState } from "@/src/store/order";
import { useRecoilState } from "recoil";

export default function ListDetailPage():JSX.Element{
    const router = useRouter()

    const [mount, setMount] = useRecoilState(orderState)
    

    /* 상품정보 */
    const decodedString = decodeURIComponent(router.asPath.slice(15));
    const [title, setTitle] = useState(decodedString)


    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}product/detail/${decodedString}/`)
            localStorage.setItem('orderprice','받아온 price')

        }catch(error){
            console.log(errorMonitor)
        }
    }

    useEffect(() => {
        fetchData()
    },[])


    const onClickBasket = async () => {
        try{
            const response = await axios.post(`${BASE_URL}cart/create/`,{
                product_name : decodedString,
                count : mount,
            })
                
        }catch(error){
            console.log(error)
        }
        alert('장바구니에 담았습니다.')
    }

    const onClickOrder = async () => {
        if(!mount) {
            alert('수량을 입력해주세요.')
            return
        }
        
        /* 아래 orderprice는 임시 */
        localStorage.setItem('orderprice','받아온 price')
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
            title = {title}
         />
    )
}