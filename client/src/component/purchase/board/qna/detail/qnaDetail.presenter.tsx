import styles from './qnaDetail.module.css'
import { IQnaDetailPageUIProps } from './qnaDetail.types'

export default function NoticeDetailPageUI(props:IQnaDetailPageUIProps):JSX.Element {
    return(
        <div onClick={props.onClickDetail} className={styles.tableBody}>
            <div className={styles.bodyCol1}>{props.data.subject}</div>
            <div className={styles.bodyCol2}>{props.data.nickname}</div>
            <div className={styles.bodyCol3}>
                {props.data.regdate}
            </div>
            <div className={styles.bodyCol4}>{props.data.status? '답변 완료':'답변 대기'}</div>
        </div>
    )
}