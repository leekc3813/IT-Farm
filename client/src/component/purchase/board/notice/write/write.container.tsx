import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";
import WritePageUI from "./write.presenter";
import { BASE_URL } from '@/src/config/config';

export default function WritePage(): JSX.Element {
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
            const response = await axios.post(`${BASE_URL}notice/create/`, {
                subject: title,
                content: content,
                notice_type: 1,
            });

            if (response.status === 201) {
                alert('공지등록 성공')
                router.push('/purchase/board/notice');
            } else {
                alert('공지등록 실패')
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
        router.push('/purchase/board/notice')
    }

    return (
        <WritePageUI
            handleTitleChange={handleTitleChange}
            handleContentChange={handleContentChange}
            handleWriteClick={handleWriteClick}
            handleCancleClick={handleCancleClick}
        />
    )
}