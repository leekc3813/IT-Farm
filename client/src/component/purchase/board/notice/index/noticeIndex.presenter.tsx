import styles from './noticeIndex.module.css'

export default function NoticeIndexPageUI():JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.titleForm}>
                    제목
                </div>
                <div className={styles.dateForm}>
                    2023-11-08
                </div>
                <div className={styles.contentForm}>
                    내욘내용
                </div>
            </div>
        </div>
    )
}