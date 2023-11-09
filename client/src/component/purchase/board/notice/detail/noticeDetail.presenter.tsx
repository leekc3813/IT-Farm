import styles from './noticeDetail.module.css'
import { INoticeDetailPageUIProps } from './noticeDetail.types'

export default function NoticeDetailPageUI(props:INoticeDetailPageUIProps):JSX.Element {
    return(
        <div onClick={props.onClickDetail} className={styles.tableBody}>
            <div className={styles.bodyCol1}>{props.index}</div>
            <div className={styles.bodyCol2}>{props.data.subject}</div>
            <div className={styles.bodyCol3}>admin</div>
            <div className={styles.bodyCol4}>
                {props.data.regdate}
            </div>
        </div>
    )
}