import styles from './event.module.css'

export default function EventPageUI():JSX.Element {
    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.bannerBox}>
                    <img src='/img/purchase/event/006.png' alt='배너이미지' />
                </div>
                <div className={styles.bannerBox}>
                    <img src='/img/purchase/event/005.png' alt='배너이미지' />
                </div>
                <div className={styles.bannerBox}>
                    <img src='/img/purchase/event/004.png' alt='배너이미지' />
                </div>
                <div className={styles.bannerBox}>
                    <img src='/img/purchase/event/003.png' alt='배너이미지' />
                </div>
                <div className={styles.bannerBox}>
                    <img src='/img/purchase/event/002.png' alt='배너이미지' />
                </div>
            </div>
        </div>
    )
}