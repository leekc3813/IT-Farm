import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";
import WritePageUI from "./write.presenter";
import { IWritePageProps } from "./write.types";

export default function WritePage(props:IWritePageProps):JSX.Element {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        // console.log(title)
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
        // console.log(content)
    };

    const handleWriteClick = async () => {
        try {
            const response = await axios.post('http://localhost:3000/purchase/board/notice',{
                subject: title,
                content: content,
                user_type: localStorage.getItem('usertype'),
                notice_type: 1,
            });

            if(response.status === 201){
                alert('공지등록 성공')
                router.push('/notice');
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