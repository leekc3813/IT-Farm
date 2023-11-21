import QnaDetailPageUI from "./qnaDetail.presenter";
import { IQnaDetailPageProps } from "./qnaDetail.types";
import { useRouter } from "next/router";

export default function QnaDetailPage(props:IQnaDetailPageProps):JSX.Element{
    const router = useRouter()

    const onClickDetail = () => {
        router.push(`/purchase/board/qna/${props.data.qna_id}`)
    }

    return (
        <QnaDetailPageUI
            data = {props.data}
            index = {props.index}
            onClickDetail = {onClickDetail} 
        />
    )
}