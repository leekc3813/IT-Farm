import {SearchOutlined, UserOutlined, ShoppingOutlined,HomeOutlined} from '@ant-design/icons'
import styles from './footer.module.css'
import { IFooterPageUIProps } from './footer.types'

export default function FooterPageUI(props:IFooterPageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.iconBox}>
                <HomeOutlined onClick={props.onClickHome} className={styles.headerIcon} />
            </div>
            <div className={styles.iconBox}>
            <SearchOutlined className={styles.headerIcon} />
            </div>
            <div className={styles.iconBox}>
            <UserOutlined className={styles.headerIcon} />
            </div>
            <div className={styles.iconBox}>
            <ShoppingOutlined className={styles.headerIcon} />
            </div>
        </div>
    )
}