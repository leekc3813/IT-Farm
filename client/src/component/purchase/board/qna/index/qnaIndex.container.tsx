import axios from "axios";
import QnaIndexPageUI from "./qnaIndex.presenter";
import { useRouter } from "next/router";
import { useEffect, useState, ChangeEvent } from "react";
import { BASE_URL } from "@/src/config/config";

export default function QnaIndexPage(): JSX.Element {
    const router = useRouter()

    const [isAdmin, setIsAdmin] = useState(false)
    const address = router.asPath.slice(20)
    const [data, setData] = useState([])
    const [commentData, setCommentData] = useState([])
    const [commentContent, setCommentContent] = useState('')

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}qna/detail/${address}/`)
            setData(response.data)

            const response2 = await axios.get(`${BASE_URL}qna/comment/read/${address}/`)
            setCommentData(response2.data)

            if (localStorage.getItem('usertype') === 'admin') {
                setIsAdmin(true)
            }
        } catch (error: any) {
            console.log(error)
            if (error.response.status === 401) {
                alert('로그인 x')
                router.push('/register')
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const submitComment = async () => {
        try {
            if (!commentContent) {
                alert('댓글을 입력해주세요.')
                return
            }

            const response = await axios.post(`${BASE_URL}qna/comment/create/`, {
                qna: address,
                content: commentContent,
            })

            alert('댓글 등록완료.')
            window.location.reload();
        } catch (error: any) {
            if (error.response.status === 401) {
                alert('로그인 x')
                router.push('/register')
            } else {
                alert(error.response.data.message)
            }
        }
    }

    const onChangeCommentContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setCommentContent(event.target.value)
    }

    const editComment = async (comment_id: number) => {
        try {
            if (!commentContent) {
                alert('수정할 항목을 입력해주세요.')
                return
            }

            const response = await axios.put(`${BASE_URL}qna/comment/update/`, {
                comment_id: comment_id,
                content: commentContent,
            })

            alert('댓글 수정완료.')
            window.location.reload();

        } catch (error: any) {
            console.log(error)
            if (error.response.status === 401) {
                alert('로그인 x')
                router.push('/register')
            }
        }
    }

    const removeComment = async (comment_id: number) => {
        try {
            const response = await axios.delete(`${BASE_URL}qna/comment/delete/${comment_id}/`)

            alert('댓글 삭제성공.')
            window.location.reload();
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <QnaIndexPageUI
            data={data}
            commentData={commentData}
            submitComment={submitComment}
            commentContent={commentContent}
            onChangeCommentContent={onChangeCommentContent}
            editComment={editComment}
            removeComment={removeComment}
            isAdmin={isAdmin}
        />
    )
}