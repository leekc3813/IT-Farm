import SellerinfoFarmslistPage from './farmslist/farmslist.container'
import styles from './sellerinfo.module.css'
import { ISellerinfoPageUIProps } from './sellerinfo.types'

export default function SellerinfoPageUI(props:ISellerinfoPageUIProps):JSX.Element {
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.mainTitle}>
                    내정보
                </div>
                <div className={styles.title}>
                    농장 정보
                </div>
                <div className={styles.farmContainer}>
                    <div className={styles.farminfoBox}>
                        <div className={styles.farminfoName}>
                            농장명
                        </div>
                        <div className={styles.farminfoaddress}>
                            주소
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
                    신청 정보
                </div>
                <div className={styles.farmContainer}>
                    <div className={styles.farminfoBox}>
                        <div className={styles.farminfoName}>
                            농장명
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
                        <div className={styles.farminfoContent}>
                            상태
                        </div>
                    </div>
                    {props.productData?.map((data,index) => {
                        return(
                            <div key={index} className={styles.farmBox}>
                                <div className={styles.farmName}>
                                     {data.farm_name}
                                </div>
                                <div className={styles.farmName}>
                                    {data.eco}
                                </div>
                                <div className={styles.farmName}>
                                    {data.kind}
                                </div>
                                <div className={styles.farmName}>
                                    {data.crop}kg
                                </div>
                                <div className={styles.farmName}>
                                    {data.updated_at.slice(0,10)}
                                </div>
                                <div className={styles.farmName}>
                                    {data.state}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}