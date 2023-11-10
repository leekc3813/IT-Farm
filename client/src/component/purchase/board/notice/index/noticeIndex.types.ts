export interface INoticeIndexPageUIProps {
    data : NoticeData []
}

interface NoticeData  {
    content : string;
    notice_id : number;
    notice_type : number;
    regdate : string;
    subject : string;
    user_type : string;
}