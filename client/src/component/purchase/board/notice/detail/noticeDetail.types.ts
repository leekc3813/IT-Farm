export interface INoticeDetailPageProps {
    data : {
        content : string;
        notice_id : number;
        notice_type : number;
        regdate : string;
        subject : string;
        user_type : string;
    },
    index : number;
}

export interface INoticeDetailPageUIProps {
    data : {
        content : string;
        notice_id : number;
        notice_type : number;
        regdate : string;
        subject : string;
        user_type : string;
    },
    index : number;
    onClickDetail : () => void;
}