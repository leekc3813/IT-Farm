export interface IQnaDetailPageProps {
    data : {
        content : string;
        qna_id : number;
        regdate : string;
        subject : string;
        user_type : string;
        nickname : string;
    },
    index : number;
}

export interface IQnaDetailPageUIProps {
    data : {
        content : string;
        qna_id : number;
        regdate : string;
        subject : string;
        user_type : string;
        nickname : string;
    },
    index : number;
    onClickDetail : () => void;
}