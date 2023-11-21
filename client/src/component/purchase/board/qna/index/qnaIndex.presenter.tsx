import styles from './qnaIndex.module.css'
import { IQnaIndexPageUIProps } from './qnaIndex.types'

export default function QnaIndexPageUI(props: IQnaIndexPageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.titleForm}>
                    {props.data[0]?.subject}
                </div>
                <div className={styles.dateForm}>
                    {props.data[0]?.regdate}
                </div>
                <div className={styles.contentForm}>
                    {props.data[0]?.content}
                </div>
            </div>
        </div>
    )
}