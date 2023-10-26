import {SearchOutlined, UserOutlined, ShoppingOutlined  } from '@ant-design/icons'
import styles from './header.module.css'
import { IHeaderPageUIProps } from './header.types'


export default function HeaderPageUI(props:IHeaderPageUIProps):JSX.Element {
    return(
         <div className={`${styles.body} ${props.visible ? '' : styles.hidden}`}>
            <div className={styles.headerTitle}>
                IT-Farm
            </div>
            <div className={styles.headerInfoContainer}>
                <div className={styles.infoBox1}>
                    
                </div>
                <div className={styles.infoBox2}>
                    <div className={styles.categorieBox}>
                        NEW
                    </div>
                    <div className={styles.categorieBox}>
                        BEST
                    </div>
                    <div className={styles.categorieBox}>
                        SALE
                    </div>
                    <div className={styles.categorieBox}>
                        EVENT
                    </div>
                </div>
                <div className={styles.infoBox3}>
                    <SearchOutlined className={styles.headerIcon} />
                    <UserOutlined className={styles.headerIcon} />
                    <ShoppingOutlined className={styles.headerIcon} />
                </div>
            </div>
        </div> 
    )
}