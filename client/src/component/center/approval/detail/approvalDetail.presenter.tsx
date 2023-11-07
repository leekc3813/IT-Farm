import styles from './approvalDetail.module.css'
import { CheckCircleOutlined } from '@ant-design/icons'
import { IApprovalDetailPageUIProps } from './approvalDetail.types'

export default function ApprovalDetailPageUI(props:IApprovalDetailPageUIProps):JSX.Element {
    return(
        <div className={styles.container}>
            <div className={styles.content}>{props.farmData?.farm_name}</div>
            <div className={styles.content}>{props.farmData?.farm_address}</div>
            <div className={styles.content}>{props.farmData?.eco}</div>
            <div className={styles.selectBox}>
                <div className={styles.select}>
                    {props.farmData?.kind}
                </div>
                <div className={styles.select}>
                    {props.farmData?.crop}kg
                </div>
            </div>
            
            <div className={styles.selectBox}>
                <div className={styles.select}>
                    수락
                </div>
                <div className={styles.select}>
                    거절
                </div>
            </div>
        </div>
    )
}