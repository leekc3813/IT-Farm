import { stubFalse } from 'lodash'
import styles from './data.module.css'
import { IDataPageUIProps } from './data.types'


export default function DataPageUI(props: IDataPageUIProps):JSX.Element{


    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>                
              <p className={styles.title}>
                  생산량 예측
              </p>
              <div className={styles.inputContainer}>
                <div className={styles.inputBox}>
                  <div className={styles.inputTitle}>면적:</div>
                  <input onChange={(event) => props.onChangeDetailData('area',event.target.value)} type='text' placeholder=' 면적을 입력하세요' />
                </div>
                <div className={styles.inputBox}>
                  <div className={styles.inputTitle}>평균 습도:</div>
                  <input onChange={(event) => props.onChangeDetailData('humidity',event.target.value)} type='text' placeholder=' 평균습도를 입력하세요' />
                </div>
                <div className={styles.inputBox}>
                  <div className={styles.inputTitle}>평균 기온:</div>
                  <input onChange={(event) => props.onChangeDetailData('temp',event.target.value)} type='text' placeholder=' 평균기온을 입력하세요' />
                </div>
                <div className={styles.inputBox}>
                  <div className={styles.inputTitle}>평균 지중온도:</div>
                  <input onChange={(event) => props.onChangeDetailData('underground',event.target.value)} type='text' placeholder=' 평균 지중온도를 입력하세요' />
                </div>
                <div className={styles.inputBox}>
                  <div className={styles.inputTitle}>복사량:</div>
                  <input onChange={(event) => props.onChangeDetailData('radiation',event.target.value)} type='text' placeholder=' 복사량을 입력하세요' />
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={props.onClickSubmit} className={styles.inputButton}>예측하기</button>
                </div>
              </div>
            </div>
        </div>
    )
}