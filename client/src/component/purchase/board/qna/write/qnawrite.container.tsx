import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";
import QnaWritePageUI from "./qnawrite.presenter";
import { BASE_URL } from '@/src/config/config';

export default function QnaWritePage(): JSX.Element {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    const handleWriteClick = async () => {
        if (!title) {
            alert('제목을 입력해주세요')
            return
        }

        if (!content) {
            alert('내용을 입력해주세요')
            return
        }

        try {
            const response = await axios.post(`${BASE_URL}qna/create/`, {
                subject: title,
                content: content,
            });

            if (response.status === 201) {
                alert('Q&A등록 성공')
                router.push('/purchase/board/qna');
            } else {
                alert('Q&A등록 실패')
            }


        } catch (error: any) {
            console.log(error)
            if (error.response.status === 401) {
                alert('로그인 x')
                router.push('/register')
            }
        }
    };

    const handleCancleClick = async() =>{
        router.push('/purchase/board/qna')
    }

    return (
        <QnaWritePageUI
            handleTitleChange={handleTitleChange}
            handleContentChange={handleContentChange}
            handleWriteClick={handleWriteClick}
            handleCancleClick={handleCancleClick}
        />
    )
}