import axios from "axios";
import ListDetailPageUI from "./listDetail.presenter";
import { useRouter } from "next/router";
import { useEffect} from 'react'
import { errorMonitor } from "stream";

export default function ListDetailPage():JSX.Element{
    const router = useRouter()
    const decodedString = decodeURIComponent(router.asPath.slice(15));

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/product/detail/${decodedString.replace(' ','_')}`)

        }catch(error){
            console.log(errorMonitor)
        }
    }

    const onClickBasket = async () => {
        try{
            const response = await axios.post('http://localhost:8000/',{
                product_id : '아이디',
                count : '수량'
            })
                
        }catch(error){
            console.log(error)
        }
    }

    return(
        <ListDetailPageUI />
    )
}