import SellerinfoFarmslistPage from './farmslist/farmslist.container'
import styles from './sellerinfo.module.css'
import { ISellerinfoPageUIProps } from './sellerinfo.types'

export default function SellerinfoPageUI(props:ISellerinfoPageUIProps):JSX.Element {
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
                    {props.farmsData?.map((farmsData) => {
                        return (
                            <SellerinfoFarmslistPage
                                key = {farmsData.id}
                                farmsData = {farmsData}
                            />
                        )
                    })}
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