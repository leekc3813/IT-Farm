import { ChangeEvent } from 'react'

export interface IQnaIndexPageUIProps {
    data: QnaData[];
    commentData: CommentData[];
    submitComment: () => void;
    commentContent: string;
    onChangeCommentContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    editComment: (comment_id: number) => void;
    removeComment: (comment_id: number) => void;
    isAdmin: boolean;
}

interface QnaData {
    content: string;
    qna_id: number;
    regdate: string;
    subject: string;
    user_type: string;
}

interface CommentData {
    comment_id: number;
    qna: number;
    content: string;
    regdate: string;
}