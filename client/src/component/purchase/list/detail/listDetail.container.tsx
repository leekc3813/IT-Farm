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
    const [data, setData] = useState([])
    const [reviewData, setReviewData] = useState([])
    const [reviewContent, setReviewContent] = useState('')
    const [reviewScore, setReviewScore] = useState(0)

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}product/detail/${decodedString}/`)
            localStorage.setItem('orderprice',response.data.price)
            setData(response.data)
            const response2 = await axios.get(`${BASE_URL}order/review/read/${decodedString}/`)
            setReviewData(response2.data)

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

    const submitReview = async () => {
        try {
            if(!reviewContent) {
                alert('리뷰를 입력해주세요.')
                return
            }

            if(reviewScore === 0) {
                alert('별점을 입력해주세요.')
                return
            }

            const response = await axios.post(`${BASE_URL}order/review/create/`,{
                produt_name : decodedString,
                content : reviewContent,
                score : reviewScore,
            })

        }catch(error){
            console.log(error)
        }
        
    }

    const onChangeReviewContent = (event:ChangeEvent<HTMLTextAreaElement>) => {
        setReviewContent(event.target.value)
    }

    const onChangeReviewScore = (value:number) => {
        setReviewScore(value)
    } 

    return(
        <ListDetailPageUI 
            onClickOrder = {onClickOrder}
            onChangeMount = {onChangeMount}
            onClickBasket = {onClickBasket}
            title = {title}
            data = {data}
            reviewData = {reviewData}
            submitReview = {submitReview}
            reviewContent = {reviewContent}
            reviewScore = {reviewScore}
            onChangeReviewContent = {onChangeReviewContent}
            onChangeReviewScore = {onChangeReviewScore}
         />
    )
}