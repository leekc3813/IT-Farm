export interface IQnaDetailPageProps {
    data : {
        content : string;
        qna_id : number;
        regdate : string;
        subject : string;
        user_type : string;
        nickname : string;
        status: number;
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
        status: number;
    },
    index : number;
    onClickDetail : () => void;
}