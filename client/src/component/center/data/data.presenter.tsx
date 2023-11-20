import styles from './data.module.css'

export default function DataPageUI():JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <p className={styles.title}>
                    데이터입력
                </p>
                <div className={styles.inputContainer}>
                    <div className={styles.inputBox}>
                        <p className={styles.subtitle}>
                            평균습도(%)
                        </p>
                        <input className={styles.input} type='text' />
                    </div>
                    <div className={styles.inputBox}>
                        <p className={styles.subtitle}>
                            평균기온(%)
                        </p>
                        <input className={styles.input} type='text' />
                    </div>
                    <div className={styles.inputBox}>
                        <p className={styles.subtitle}>
                            평균 지중온도(%)
                        </p>
                        <input className={styles.input} type='text' />
                    </div>
                    <div className={styles.inputBox}>
                        <p className={styles.subtitle}>
                            복사량
                        </p>
                        <input className={styles.input} type='text' />
                    </div>
                </div>
                <button className={styles.submitButton} >생산량 예측하기</button>
                <p className={styles.title}>
                    예측 생산량
                </p>
                <input className={styles.input} type='text' readOnly value='0'/>
            </div>
        </div>
    )
}