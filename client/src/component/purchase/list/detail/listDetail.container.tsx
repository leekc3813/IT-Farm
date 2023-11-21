import axios from "axios";
import ListDetailPageUI from "./listDetail.presenter";
import { useRouter } from "next/router";
import { useEffect, useState, ChangeEvent } from 'react'
import { errorMonitor } from "stream";
import { BASE_URL } from "@/src/config/config";
import { orderState } from "@/src/store/order";
import { useRecoilState } from "recoil";

export default function ListDetailPage(): JSX.Element {
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
            localStorage.setItem('orderprice', response.data.price)
            setData(response.data)
            const response2 = await axios.get(`${BASE_URL}order/review/read/${decodedString}/`)
            setReviewData(response2.data)

        } catch (error: any) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    const onClickBasket = async () => {
        try {
            const response = await axios.post(`${BASE_URL}cart/create/`, {
                product_name: decodedString,
                count: mount,
            })
            alert('장바구니에 담았습니다.')
        } catch (error: any) {
            console.log(error)
            if (error.response.status === 401) {
                alert('로그인 x')
                router.push('/register')
            }
        }
    }

    const onClickOrder = async () => {
        if (!mount) {
            alert('수량을 입력해주세요.')
            return
        }

        /* 아래 orderprice는 임시 */
        localStorage.setItem('orderprice', '받아온 price')
        if (localStorage.getItem('loginstate')) {
            router.push(`/purchase/list/${decodedString}/order`)
        } else {
            alert('로그인 x')
            router.push('/register')
        }

    }

    const onChangeMount = (event: ChangeEvent<HTMLInputElement>) => {
        setMount(event.target.value)
    }

    const submitReview = async () => {
        try {
            if (!reviewContent) {
                alert('리뷰를 입력해주세요.')
                return
            }

            if (reviewScore === 0) {
                alert('별점을 입력해주세요.')
                return
            }

            const response = await axios.post(`${BASE_URL}order/review/create/`, {
                produt_name: decodedString,
                content: reviewContent,
                score: reviewScore,
            })

            alert('리뷰 등록완료.')

        } catch (error: any) {
            console.log(error)
            if (error.response.status === 401) {
                alert('로그인 x')
                router.push('/register')
            }
        }

    }

    const onChangeReviewContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setReviewContent(event.target.value)
    }

    const onChangeReviewScore = (value: number) => {
        setReviewScore(value)
    }

    const editReview = async (review_id: number) => {
        try {
            if (!reviewContent) {
                alert('수정할 항목을 입력해주세요.')
                return
            }

            if (reviewScore === 0) {
                alert('수정할 점수를 입력해주세요.')
                return
            }

            const response = await axios.put(`${BASE_URL}order/review/update/`, {
                review_id: review_id,
                content: reviewContent,
                score: reviewScore,
            })

            alert('리뷰 수정완료.')

        } catch (error: any) {
            console.log(error)
            if (error.response.status === 401) {
                alert('로그인 x')
                router.push('/register')
            }
        }
    }

    const removeReview = async (review_id: number) => {
        try {
            const response = await axios.delete(`${BASE_URL}order/review/delete/${review_id}/`)

            alert('리뷰 삭제성공.')
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <ListDetailPageUI
            onClickOrder={onClickOrder}
            onChangeMount={onChangeMount}
            onClickBasket={onClickBasket}
            title={title}
            data={data}
            reviewData={reviewData}
            submitReview={submitReview}
            reviewContent={reviewContent}
            reviewScore={reviewScore}
            onChangeReviewContent={onChangeReviewContent}
            onChangeReviewScore={onChangeReviewScore}
            editReview={editReview}
            removeReview={removeReview}
        />
    )
}