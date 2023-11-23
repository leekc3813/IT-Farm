import styles from './noticeIndex.module.css'
import { INoticeIndexPageUIProps } from './noticeIndex.types'

export default function NoticeIndexPageUI(props: INoticeIndexPageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.titleForm}>
                    {props.data[0]?.subject}
                </div>
                <div className={styles.dateForm}>
                    작성일: {props.data[0]?.regdate}
                </div>
                <div className={styles.contentForm} dangerouslySetInnerHTML={{__html:props.data[0]?.content}}/>
            </div>
        </div>
    )
}