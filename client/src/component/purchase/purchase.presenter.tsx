import styles from './purchase.module.css'
import { Carousel } from 'antd'
import { IPurchasePageUIProps } from './purchase.types'
import { Chart } from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '@/src/config/config';
import Link from 'next/link';

export default function PurchasePageUI(props:IPurchasePageUIProps):JSX.Element {
    const canvasEl = useRef(null);

    const [positive, setPositive] = useState(70)
    const [negative, setNegative] = useState(30)

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}review_model/pred/`)
            setPositive(response.data.positive/(response.data.positive+response.data.negative)*100)
            setNegative(response.data.negative/(response.data.positive+response.data.negative)*100)

        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    },[])

    useEffect(() => {
      if (canvasEl.current !== null) {
        const ctx = canvasEl.current;

        const labels = ['긍정', '부정'];

        const data = {
          labels: labels,
          datasets: [
            {
              label: 'Line Chart',
              data: [positive, negative],
              fill: false,
            //   borderColor: 'rgb(75, 192, 192)',
              backgroundColor : [
                'rgb(0, 102, 46)',
                'lightgray',
              ],
              tension: 0.1,
            },
          ],
        };

        const myLineChart = new Chart(ctx, {
          type: 'doughnut',
          data: data,
        });

        return function cleanup() {
          myLineChart.destroy();
        };
      }
    });

    return(
        <div>
            <div className={styles.bannerVisible}>
                <Carousel className={styles.bannerContainer}>
                    <div>
                      <img className={styles.bannerImg}  src='/img/purchase/event1.png' alt='bannerImg' />
                    </div>
                    <div>
                        <img className={styles.bannerImg} src='/img/purchase/event2.png' alt='bannerImg' />
                    </div>
                </Carousel>
            </div>
            <div className={styles.body}>
                <div className={styles.wrapper}>
                    <div className={styles.contentTitleContainer}>
                        <div className={styles.contentTitleBox}>
                            <h1 className={styles.contentTitle} >BEST! SELLER!</h1>
                        </div>
                        <div className={styles.contentTitleSubBox}>
                            <h3 className={styles.contentTitleSub} >베스트 셀러를 만나보세요!</h3>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <Link className={styles.link} href={'/purchase/list/무농약 홍고추'} >
                            <div className={styles.contentBox}>
                                <div className={styles.contentImgContainer}>
                                    <img className={styles.contentImg} src='/img/purchase/list/홍고추.png' alt='상품이미지' />
                                </div>
                                <div className={styles.contentInfoContainer}>
                                    <div className={styles.contentName}>
                                        유기농 홍고추
                                    </div>
                                    <div className={styles.price}>
                                            13,890원
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className={styles.link} href={'/purchase/list/유기농 청양고추'} >
                            <div className={styles.contentBox}>
                                <div className={styles.contentImgContainer}>
                                    <img className={styles.contentImg} src='/img/purchase/list/청고추.png' alt='상품이미지' />
                                </div>
                                <div className={styles.contentInfoContainer}>
                                    <div className={styles.contentName}>
                                        유기농 청양고추
                                    </div>
                                    <div className={styles.price}>
                                            13,000원
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className={styles.link} href={'/purchase/list/유기농 건고추'} >
                            <div className={styles.contentBox}>
                                <div className={styles.contentImgContainer}>
                                    <img className={styles.contentImg} src= '/img/purchase/list/건고추.png' alt='상품이미지' />
                                </div>
                                <div className={styles.contentInfoContainer}>
                                    <div className={styles.contentName}>
                                        유기농 건고추
                                    </div>
                                    <div className={styles.price}>
                                            13,890원
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className={styles.link} href={'/purchase/list/국산 고춧가루'}>
                            <div className={styles.contentBox}>
                                <div className={styles.contentImgContainer}>
                                    <img className={styles.contentImg} src='/img/purchase/list/고춧가루.png' alt='상품이미지' />
                                </div>
                                <div className={styles.contentInfoContainer}>
                                    <div className={styles.contentName}>
                                        국산 고춧가루
                                    </div>
                                    <div className={styles.price}>
                                            13,890원
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.contentTitleContainer}>
                        <div className={styles.contentTitleBox}>
                            <h1 className={styles.contentTitle} >EVENT</h1>
                        </div>
                        <div className={styles.contentTitleSubBox}>
                            <h3 className={styles.contentTitleSub} >
                                진행중인 이벤트를 만나보세요!
                            </h3>
                        </div>
                    </div>
                    <div className={styles.eventContainer}>
                        <img className={styles.eventImg} src='https://file.cafe24cos.com/banner-admin-live/upload/ecudemo276582/45eb6083-3982-4ce1-d4b0-043c998d4630.png' alt='이벤트사진' /> 
                    </div>
                    <div className={styles.contentTitleContainer}>
                        <div className={styles.contentTitleBox}>
                            <h1 className={styles.contentTitle} >SATISFACTION</h1>
                        </div>
                        <div className={styles.contentTitleSubBox}>
                            <h3 className={styles.contentTitleSub}>소중한 회원님들의 만족도 입니다!</h3>
                        </div>
                        <div className={styles.chartContainer}>
                            <div className={styles.chartBox} >
                                <canvas ref={canvasEl} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerContainer}>
                <div className={styles.footerBox}>
                    <div className={styles.footerMediumStyle}>
                        서비스 이용약관
                    </div>
                    <div className={styles.footerMediumStyle}>
                        사이트 이용약관
                    </div>
                    <div className={styles.footerMediumStyle}>
                        개인정보 처리방침
                    </div>
                    <div className={styles.footerMediumStyle}>
                        전자금융거래 이용약관
                    </div>
                    <div className={styles.footerMediumStyle}>
                        광고 상품 이용약관
                    </div>
                </div>
                <div className={styles.footerBox}>
                    <div className={styles.footerLageStyle}>
                        주식회사 IT-Farm
                    </div>
                </div>
                <div className={styles.footerBox}>
                    <div className={styles.footerSmallStyle}>
                        주소
                    </div>
                    <div className={styles.footerMediumStyle}>
                        광주광역시 동구 제봉로 92 (대성학원 1-3층)
                    </div>
                </div>
                <div className={styles.footerBox}>
                    <div className={styles.footerSmallStyle}>
                        제휴문의
                    </div>
                    <div className={styles.footerMediumStyle}>
                        1715leekc@naver.com
                    </div>
                </div>
                <div className={styles.footerBox}>
                    <div className={styles.footerSmallStyle}>
                        고객만족센터
                    </div>
                    <div className={styles.footerMediumStyle}>
                        1715leekc@naver.com
                    </div>
                </div>
            </div>
        </div>
    )
}