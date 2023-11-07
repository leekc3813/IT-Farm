import styles from './farmlist.module.css'
import { IFarmlistPageUIProps } from './farmlist.types'
import {DownCircleFilled, DownCircleOutlined} from '@ant-design/icons'

export default function FarmlistPageUI(props:IFarmlistPageUIProps):JSX.Element{
    return(
        <div className={styles.container}>
            <div className={styles.leftBox}>
                <span className={styles.farmName}>
                    {props.farmData.name}
                </span>
                <span className={styles.farmContent}>
                    {props.farmData.mail_number}
                </span>
                <span className={styles.farmContent}>
                    {`${props.farmData.address} ${props.farmData.address_detail}`}
                </span>
            </div>
            <div className={styles.rightBox}>
                {props.isClick ?
                    <DownCircleFilled onClick={props.onClickIcon2} className={styles.clickIcon} />
                :    
                    <DownCircleOutlined onClick={props.onClickIcon} className={styles.clickIcon} />
                }
            </div>
        </div>
    )
}