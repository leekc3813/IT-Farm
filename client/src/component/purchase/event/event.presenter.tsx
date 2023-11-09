import styles from './event.module.css'

export default function EventPageUI():JSX.Element {
    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.bannerBox}>
                    <img src='https://via.placeholder.com/1140x280/FFFF00/000000.png?text=Test+Image' alt='배너이미지' />
                </div>
            </div>
        </div>
    )
}