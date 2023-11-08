export interface IQnaPageUIProps{
    data : DataSet [];
}

interface DataSet {
    content: string;
    nickname : string;
    qna_id : number;
    regdate : string;
    status : number;
    subject : string;
    user_type : string
}