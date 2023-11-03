import styles from './sellerinfo.module.css'

export default function SellerinfoPageUI():JSX.Element {
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    나의 농장정보
                </div>
                <div className={styles.farmContainer}>
                    <div className={styles.farminfoBox}>
                        <div className={styles.farminfoName}>
                            농장이름
                        </div>
                        <div className={styles.farminfoaddress}>
                            농장주소
                        </div>
                        <div className={styles.farminfoSelect}>
                            비고
                        </div>
                    </div>
                    <div className={styles.farmBox}>
                        <div className={styles.farmName}>
                            희건이네농장
                        </div>
                        <div className={styles.farmAddress}>
                            광주 광산구 풍영로330번길 34 101동 1701호
                        </div>
                        <div className={styles.farmSelectBox}>
                            <div className={styles.farmSelect}>
                                수정
                            </div>
                            <div className={styles.farmSelect}>
                                삭제
                            </div>
                        </div>
                    </div>
                    <div className={styles.farmBox}>
                        <div className={styles.farmName}>
                            희건이네농장
                        </div>
                        <div className={styles.farmAddress}>
                            광주 광산구 풍영로330번길 34 101동 1701호
                        </div>
                        <div className={styles.farmSelectBox}>
                            <div className={styles.farmSelect}>
                                수정
                            </div>
                            <div className={styles.farmSelect}>
                                삭제
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.title}>
                    나의 신청정보
                </div>
                <div className={styles.farmContainer}>
                    <div className={styles.farminfoBox}>
                        <div className={styles.farminfoName}>
                            우편번호
                        </div>
                        <div className={styles.farminfoContent}>
                            농사기법
                        </div>
                        <div className={styles.farminfoContent}>
                            품종
                        </div>
                        <div className={styles.farminfoContent}>
                            생산량
                        </div>
                        <div className={styles.farminfoContent}>
                            등록일자
                        </div>     
                    </div>
                    <div className={styles.farmBox}>
                        <div className={styles.farmName}>
                            62225
                        </div>
                        <div className={styles.farmName}>
                            유기농
                        </div>
                        <div className={styles.farmName}>
                            청고추
                        </div>
                        <div className={styles.farmName}>
                            3kg
                        </div>
                        <div className={styles.farmName}>
                            2023-11-03
                        </div>
                    </div>
                    <div className={styles.farmBox}>
                        <div className={styles.farmName}>
                            62213
                        </div>
                        <div className={styles.farmName}>
                            일반
                        </div>
                        <div className={styles.farmName}>
                            건고추
                        </div>
                        <div className={styles.farmName}>
                            5kg
                        </div>
                        <div className={styles.farmName}>
                            2023-11-03
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}