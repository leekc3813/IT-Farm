import styles from './data.module.css'
import { IDataPageUIProps } from './data.types'
import { Chart } from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';

export default function DataPageUI(props: IDataPageUIProps):JSX.Element{
    const canvasEl = useRef(null);

    useEffect(() => {
        if (canvasEl.current !== null) {
          const ctx = canvasEl.current;
  
          const labels = ['1','2','3','4','5'];
  
          const data = {
            labels: labels,
            datasets: [
              {
                label: '실제 생산량',
                data: [10,20,30,40],
                fill: false,
                borderColor : 'rgb(227, 106, 131)',
                tension: 0.1,
                backgroundColor: 'rgb(227, 106, 131)',
                
              },
              {
                label: '예측 생산량',
                data: [50,10,30,20,10],
                fill: false,
                borderColor: 'rgb(111, 162, 247)',
                tension: 0.1,
                backgroundColor: [
                    'rgb(111, 162, 247)',
                  ],
              },
            ],
          };
  
          const myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                scales: {
                  y: {
                    beginAtZero: true, // Set y-axis starting point to 0
                  },
                },
              },
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
                  예측 생산량
              </p>
              <div className={styles.chartBox}>
                  <canvas ref={canvasEl} />
              </div>
            </div>
        </div>
    )
}