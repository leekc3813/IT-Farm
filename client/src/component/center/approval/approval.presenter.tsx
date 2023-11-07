import styles from './approval.module.css'
import { Radio } from 'antd';
import { IApprovalPageUIProps } from './approval.types';

export default function ApprovalPageUI(props: IApprovalPageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
            <Radio.Group className={styles.placement} value={props.placement} onChange={props.placementChange}>
                <Radio.Button className={styles.placementButton} value="정읍">정읍</Radio.Button>
                <Radio.Button className={styles.placementButton} value="고창">고창</Radio.Button>
                <Radio.Button className={styles.placementButton} value="익산">익산</Radio.Button>
                <Radio.Button className={styles.placementButton} value="아산">아산</Radio.Button>
                <Radio.Button className={styles.placementButton} value="청주">청주</Radio.Button>
            </Radio.Group>
        </div>
    )
}