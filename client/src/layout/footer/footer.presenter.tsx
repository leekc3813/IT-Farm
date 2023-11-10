import {SearchOutlined, ShoppingOutlined,HomeOutlined, StopOutlined, KeyOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import styles from './footer.module.css'
import { IFooterPageUIProps } from './footer.types'

export default function FooterPageUI(props:IFooterPageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.iconBox}>
                <HomeOutlined onClick={props.onClickHome} className={styles.headerIcon} />
            </div>
            <div className={styles.iconBox}>
                <ShoppingOutlined onClick={props.onClickBasket} className={styles.headerIcon} />
            </div>
            <div className={styles.iconBox}>
                <ShoppingCartOutlined onClick = {props.onClickCart}  className={styles.headerIcon} />
            </div>
            <div className={styles.iconBox}>
                {props.localLogin ? 
                    <StopOutlined onClick = {props.onClickLogout} className={styles.headerIcon} />
                    :
                    <KeyOutlined onClick = {props.onClickRegister} className={styles.headerIcon} />
                }
            </div>
        </div>
    )
}