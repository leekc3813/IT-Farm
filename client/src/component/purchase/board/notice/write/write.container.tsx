import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";
import WritePageUI from "./write.presenter";

export default function WritePage():JSX.Element {
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
        if(!title) {
            alert('제목을 입력해주세요')
            return
        }

        if(!content) {
            alert('내용을 입력해주세요')
            return
        }

        try {
            const response = await axios.post('http://localhost:8000/notice/create/',{
                user_id : localStorage.getItem('id'),
                subject: title,
                content: content,
                user_type: localStorage.getItem('usertype'),
                notice_type: 1,
            },{
                headers : {
                    Authorization : localStorage.getItem('token')
                }
            });

            if(response.status === 201){
                alert('공지등록 성공')
                router.push('/purchase/board/notice');
            }else{
                alert('공지등록 실패')
            }

            
        } catch (error) {

            console.error('데이터 저장 오류:', error);
        }
    };
    return(
        <WritePageUI 
            handleTitleChange = {handleTitleChange}
            handleContentChange = {handleContentChange}
            handleWriteClick = {handleWriteClick}
        />
    )
}