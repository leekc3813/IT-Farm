import styles from './purchase.module.css'
import { Carousel } from 'antd'
import { IPurchasePageUIProps } from './purchase.types'


export default function PurchasePageUI(props:IPurchasePageUIProps):JSX.Element {
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
                        <div className={styles.contentBox}>
                            <div className={styles.contentImgContainer}>
                                <img className={styles.contentImg} src='/img/purchase/list/홍고추.png' alt='상품이미지' />
                            </div>
                            <div className={styles.contentInfoContainer}>
                                <div className={styles.contentName}>
                                    유기농 홍고추
                                </div>
                                <div className={styles.price}>
                                        13890원
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.contentImgContainer}>
                                <img className={styles.contentImg} src='/img/purchase/list/청고추.png' alt='상품이미지' />
                            </div>
                            <div className={styles.contentInfoContainer}>
                                <div className={styles.contentName}>
                                    유기농 청고추
                                </div>
                                <div className={styles.price}>
                                        13000원
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.contentImgContainer}>
                                <img className={styles.contentImg} src= '/img/purchase/list/건고추.png' alt='상품이미지' />
                            </div>
                            <div className={styles.contentInfoContainer}>
                                <div className={styles.contentName}>
                                    유기농 건고추
                                </div>
                                <div className={styles.price}>
                                        13890원
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.contentImgContainer}>
                                <img className={styles.contentImg} src='/img/purchase/list/고춧가루.png' alt='상품이미지' />
                            </div>
                            <div className={styles.contentInfoContainer}>
                                <div className={styles.contentName}>
                                    국산 고추가루
                                </div>
                                <div className={styles.price}>
                                        13890원
                                </div>
                            </div>
                        </div>
                        
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