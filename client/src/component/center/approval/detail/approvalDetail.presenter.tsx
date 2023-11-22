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
                <div onClick={props.onCLickApproval} className={`${styles.select} ${styles.blue}`}>
                    수락
                </div>
                <div onClick={props.onClickRefuse} className={`${styles.select} ${styles.red}`}>
                    거절
                </div>
            </div>
        </div>
    )
}