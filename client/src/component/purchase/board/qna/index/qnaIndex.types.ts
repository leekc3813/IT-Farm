export interface IQnaIndexPageUIProps {
    data : QnaData []
}

interface QnaData  {
    content : string;
    qna_id : number;
    regdate : string;
    subject : string;
    user_type : string;
}