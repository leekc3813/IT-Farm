import styles from './farmslist.module.css'
import { ISellerinfoFarmslistPageUIProps } from './farmslist.types'

export default function SellerinfoFarmslistPageUI(props: ISellerinfoFarmslistPageUIProps):JSX.Element{
    return(
        <div className={styles.farmBox}>
            <div className={styles.farmName}>
                {props.farmsData.name}
            </div>
            <div className={styles.farmAddress}>
                {props.farmsData.address + ' ' + props.farmsData.address_detail}
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
    )
}