import styles from './approval.module.css'
import { Radio } from 'antd';
import { IApprovalPageUIProps } from './approval.types';
import ApprovalDetailPage from './detail/approvalDetail.container';

export default function ApprovalPageUI(props: IApprovalPageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.title}>물품승인</div>
                <Radio.Group className={styles.placement} value={props.placement} onChange={props.placementChange}>
                    <Radio.Button className={styles.placementButton} value="정읍">정읍</Radio.Button>
                    <Radio.Button className={styles.placementButton} value="고창">고창</Radio.Button>
                    <Radio.Button className={styles.placementButton} value="익산">익산</Radio.Button>
                    <Radio.Button className={styles.placementButton} value="아산">아산</Radio.Button>
                    <Radio.Button className={styles.placementButton} value="청주">청주</Radio.Button>
                </Radio.Group>
                <div className={styles.detailContainer}>
                    <div className={styles.infoBox}>
                        <div className={styles.infoContent}>농장이름</div>
                        <div className={styles.infoContent}>농장주소</div>
                        <div className={styles.infoContent}>농업방식</div>
                        <div className={styles.infoContent}>종류</div>
                        <div className={styles.infoContent}>비고</div>
                    </div>
                    {props.farmData?.map((farmData) => {
                        return (
                            <ApprovalDetailPage 
                                farmData = {farmData}
                            />
                        )
                    })}
                    
                </div>
            </div>
            
        </div>
    )
}