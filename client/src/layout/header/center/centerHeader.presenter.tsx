import styles from './centerHeader.module.css'
import { IHeaderCenterPageUIProps } from './centerHeader.types'
import {SearchOutlined,ShoppingOutlined,HomeOutlined, KeyOutlined, StopOutlined  } from '@ant-design/icons'

export default function HeaderCenterPageUI(props: IHeaderCenterPageUIProps):JSX.Element{
    return(
        <div className={`${styles.body} ${props.visible ? '' : styles.hidden}`}>
            <div onClick={props.onClickCenter}  className={styles.headerTitle}>
                IT-Farm Center
            </div>
            <div className={styles.headerInfoContainer}>
                <div className={styles.infoBox1}>
                </div>
                <div className={styles.infoBox2}>
                    <div onClick={props.onClickApproval} className={styles.categorieBox}>
                        물품승인
                    </div>
                    <div onClick={props.onClickData} className={styles.categorieBox}>
                        데이터
                    </div>
                </div>
                <div className={styles.infoBox3}>
                    {props.localLogin ?
                        <StopOutlined onClick={props.onClickLogout} className={styles.headerIcon} />
                        : 
                        <KeyOutlined  className={styles.headerIcon} />
                    }
                    <button onClick={props.onClickBuy} className={styles.moveButton} >구매페이지</button>
                    <button onClick = {props.onClickSell} className={styles.moveButton} >농부페이지</button>
                </div>
            </div>
        </div> 
    )
}