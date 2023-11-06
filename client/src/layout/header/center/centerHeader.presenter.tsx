import styles from './centerHeader.module.css'
import { IHeaderCenterPageUIProps } from './centerHeader.types'
import {SearchOutlined,ShoppingOutlined,HomeOutlined, KeyOutlined, StopOutlined  } from '@ant-design/icons'

export default function HeaderCenterPageUI(props: IHeaderCenterPageUIProps):JSX.Element{
    return(
        <div className={`${styles.body} ${props.visible ? '' : styles.hidden}`}>
            <div  className={styles.headerTitle}>
                IT-Farm Center
            </div>
            <div className={styles.headerInfoContainer}>
                <div className={styles.infoBox1}>
                </div>
                <div className={styles.infoBox2}>
                    <div className={styles.categorieBox}>
                        하위목록1
                    </div>
                    <div className={styles.categorieBox}>
                        하위목록2
                    </div>
                </div>
                <div className={styles.infoBox3}>
                    <HomeOutlined  className={styles.headerIcon} />
                    <SearchOutlined className={styles.headerIcon} />
                    {props.localLogin ?
                        <StopOutlined className={styles.headerIcon} />
                        : 
                        <KeyOutlined  className={styles.headerIcon} />
                    }
                    <ShoppingOutlined className={styles.headerIcon} />
                </div>
            </div>
        </div> 
    )
}