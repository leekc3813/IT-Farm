import styles from './sellerHome.module.css'
import { Carousel } from 'antd'
import {ClockCircleOutlined, CommentOutlined, HeartOutlined, MailOutlined, ReadOutlined, ShoppingCartOutlined, SmileOutlined, SyncOutlined, UserOutlined, WalletOutlined, WifiOutlined} from '@ant-design/icons'
import { ISellerHomePageUIProps } from './sellerHome.types'

export default function SellerHomePageUI(props: ISellerHomePageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.bannerVisible}>
                <Carousel className={styles.bannerContainer} autoplay>
                    <div>
                      <img className={styles.bannerImg}  src='https://ceo.yogiyo.co.kr/_next/static/media/banner-multi-burden-event-lg.87547498.png' alt='bannerImg' />
                    </div>
                    <div>
                        <img className={styles.bannerImg} src='https://ceo.yogiyo.co.kr/_next/static/media/banner-origin-2-lg.cacf2466.png' alt='bannerImg' />
                    </div>
                </Carousel>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.main}>
                    <div className={styles.container1}>
                        <div className={styles.greetBoxs}>
                            <div className={styles.greetContainer}>
                                <div className={styles.greetInfoBox}>
                                    IT-Farm 사장님 반갑습니다<br />
                                    농장정보를 입력해주세요 :&#41;
                                </div>
                                <button onClick={props.onClickRegister} className={styles.greetButton}>
                                    농장정보 입력하기
                                </button>
                            </div>
                            <div className={styles.greetContainer}>
                                <div className={styles.greetInfoBox}>
                                    수확을 하셨나요?<br />
                                    수확량을 등록해주세요 :&#41;
                                </div>
                                <button onClick={props.onClickHarvest} className={styles.greetButton}>
                                    수확량 등록하기
                                </button>
                            </div>
                        </div>
                        
                        <div className={styles.recipeContainer}>
                            <span className={styles.recipeTitle}>스마트팜 운영 노하우를 알려드려요!</span>
                            <div className={styles.recipeContentContainer}>
                                <div className={styles.recipeBox}>
                                    <img className={styles.recipeImg} src='/img/home/seller/001.png' alt='노하우이미지' />
                                    <span className={styles.recipeContent}>내부 CO2(ppm)</span>
                                </div>
                                <div className={styles.recipeBox}>
                                    <img className={styles.recipeImg} src='/img/home/seller/002.png' alt='노하우이미지' />
                                    <span className={styles.recipeContent}>일사량-외부(W/m-2)</span>
                                </div>
                                <div className={styles.recipeBox}>
                                    <img className={styles.recipeImg} src='/img/home/seller/003.png' alt='노하우이미지' />
                                    <span className={styles.recipeContent}>내부 습도(%)</span>
                                </div>
                                <div className={styles.recipeBox}>
                                    <img className={styles.recipeImg} src='/img/home/seller/004.png' alt='노하우이미지' />
                                    <span className={styles.recipeContent}>이슬점 온도</span>
                                </div>
                            </div>
                            <div className={styles.plus}>
                                더보기
                            </div>
                        </div>
                        <div className={styles.sectionContainer}>
                            공지사항
                            <div className={styles.sectionPlus}>
                                더보기
                            </div>
                        </div>
                        <div className={styles.noticeContainer}>
                            <div className={styles.noticeBox}>
                                <div className={styles.noticeContent}>
                                    IT-Farm 사장님 페이지가 개설되었습니다!
                                </div>
                                <div className={styles.noticeDate}>
                                    2023-10-30
                                </div>
                            </div>
                            <div className={styles.noticeBox}>
                                <div className={styles.noticeContent}>
                                    ※ 농장정보 입력 주의사항 ※
                                </div>
                                <div className={styles.noticeDate}>
                                    2023-11-10
                                </div>
                            </div>
                            <div className={styles.noticeBox}>
                                <div className={styles.noticeContent}>
                                    세금계산서 발행 관련 공지
                                </div>
                                <div className={styles.noticeDate}>
                                    2023-11-10
                                </div>
                            </div>
                            <div className={styles.noticeBox}>
                                <div className={styles.noticeContent}>
                                    스마트팜 운영 노하우 게시판이 개설되었습니다!!
                                </div>
                                <div className={styles.noticeDate}>
                                    2023-11-28
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container2}>
                        <div className={styles.greetContainer2}>
                            <div className={styles.greet2Box}>
                                <ReadOutlined className={styles.greet2Icon} />
                                <div className={styles.greet2InfoBox}>
                                    <span className={styles.greet2InfoTitle}>잇팜과 함께해요!</span>
                                    <span className={styles.greet2InfoContent}>잇팜이 알려주는 노하우로 성공적으로 스마트팜을 운영해봐요.</span>
                                </div>
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