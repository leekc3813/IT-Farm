import styles from './home.module.css';

export function HomePageUI ():JSX.Element {
    return (
        <div className={styles.homeBody}>
            <div className={styles.homeWrapper}>
                <div className={styles.titleContainer}>
                    <img src='/img/home/homelogos.png' className={styles.logo} />
                    <div className={styles.logoTitle}>
                        IT-Farm
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.selectButton}>사러왔어요</button>
                    <button className={styles.selectButton}>판매할래요</button>
                </div>
            </div>
        </div>
    )
}