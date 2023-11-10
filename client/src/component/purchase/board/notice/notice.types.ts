export interface INoticePageUIProps {
    isAdmin: string | null;
    onClickWrite : () => void;
    data : Datas[];
}

interface Datas {
    content : string;
    notice_id : number;
    notice_type : number;
    regdate : string;
    subject : string;
    user_type : string;
}