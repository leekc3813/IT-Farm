import NoticeDetailPageUI from "./noticeDetail.presenter";
import { INoticeDetailPageProps } from "./noticeDetail.types";
import { useRouter } from "next/router";

export default function NoticeDetailPage(props:INoticeDetailPageProps):JSX.Element{
    const router = useRouter()

    const onClickDetail = () => {
        router.push(`/purchase/board/notice/detail/${props.data.notice_id}`)
    }

    return (
        <NoticeDetailPageUI
            data = {props.data}
            index = {props.index}
            onClickDetail = {onClickDetail} 
        />
    )
}