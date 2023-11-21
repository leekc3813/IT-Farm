import styles from './data.module.css'
import { IDataPageUIProps } from './data.types'
import { Chart } from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';

export default function DataPageUI(props: IDataPageUIProps):JSX.Element{
    const canvasEl = useRef(null);

    useEffect(() => {
        if (canvasEl.current !== null) {
          const ctx = canvasEl.current;
  
          const labels = ['현재 생산량', '예측 생산량'];
  
          const data = {
            labels: labels,
            datasets: [
              {
                label: 'Line Chart',
                data: [70, 30],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                backgroundColor: [
                    'rgb(227, 106, 131)',
                    'rgb(111, 162, 247)',
                  ],
              },
            ],
          };
  
          const myLineChart = new Chart(ctx, {
            type: 'bar',
            data: data,
          });
  
          return function cleanup() {
            myLineChart.destroy();
          };
        }
      });

    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <p className={styles.title}>
                    데이터입력
                </p>
                <div className={styles.inputContainer}>
                    <div className={styles.inputBox}>
                        <p className={styles.subtitle}>
                            평균습도
                        </p>
                        <input onChange={(event) => props.onChangeDetailData('humidity',event.target.value)} className={styles.input} type='text' />
                    </div>
                    <div className={styles.inputBox}>
                        <p className={styles.subtitle}>
                            평균기온
                        </p>
                        <input onChange={(event) => props.onChangeDetailData('temp',event.target.value)} className={styles.input} type='text' />
                    </div>
                    <div className={styles.inputBox}>
                        <p className={styles.subtitle}>
                            평균 지중온도
                        </p>
                        <input onChange={(event) => props.onChangeDetailData('underground',event.target.value)} className={styles.input} type='text' />
                    </div>
                    <div className={styles.inputBox}>
                        <p className={styles.subtitle}>
                            복사량
                        </p>
                        <input onChange={(event) => props.onChangeDetailData('radiation',event.target.value)} className={styles.input} type='text' />
                    </div>
                </div>
                <button onClick={props.onClickSubmit} className={styles.submitButton} >생산량 예측하기</button>
                <p className={styles.title}>
                    예측 생산량
                </p>
                <input className={styles.input} type='text' readOnly value={props.result}/>
                <div className={styles.chartBox}>
                    <canvas ref={canvasEl} />
                </div>
            </div>
        </div>
    )
}