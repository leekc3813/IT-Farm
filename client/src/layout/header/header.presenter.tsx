import {SearchOutlined,ShoppingOutlined,HomeOutlined, KeyOutlined, StopOutlined,ShoppingCartOutlined  } from '@ant-design/icons'
import styles from './header.module.css'
import { IHeaderPageUIProps } from './header.types'


export default function HeaderPageUI(props:IHeaderPageUIProps):JSX.Element {
    return(
         <div className={`${styles.body} ${props.visible ? '' : styles.hidden}`}>
            <div  className={styles.headerTitle}>
                <div onClick={props.onClickPurchase} className={styles.headerTitleContainer}>
                    <img src='/img/home/logo_2green.png' alt='상품이미지' className={styles.headerTitle} />
                </div>
                <div className={styles.infoBox3}>
                    <HomeOutlined onClick={props.onClickHome} className={styles.headerIcon} />
                    <ShoppingOutlined onClick={props.onClickBasket} className={styles.headerIcon} />
                    <ShoppingCartOutlined onClick = {props.onClickCart}  className={styles.headerIcon} />
                    {props.localLogin ?
                        <StopOutlined onClick = {props.onClickLogout} className={styles.headerIcon} />
                        : 
                        <KeyOutlined onClick = {props.onClickRegister} className={styles.headerIcon} />
                    }
                    {props.usertype === 'admin' ?
                        <div onClick={props.onClickCenter} className={styles.moveCenter}>센터이동</div>
                        :
                        ''
                    }
                </div>
            </div>
            <div className={styles.headerInfoContainer}>
                <div className={styles.infoBox1}>
                </div>
                <div className={styles.infoBox2}>
                    <div onClick={props.onClickPurchaseList} className={styles.categorieBox}>
                        상품목록
                    </div>
                    <div onClick={props.onClickRecipe} className={styles.categorieBox}>
                        레시피
                    </div>
                    <div onClick={props.onClickEvent} className={styles.categorieBox}>
                        EVENT
                    </div>
                    <div className={styles.categorieBox}>
                        <a href="#">고객센터</a>
                        <ul className={styles.sub_cate01}>
                            <li className={styles.noChild}>
                                <a href="/purchase/board/notice">공지사항</a>
                            </li>
                            <li className={styles.noChild}>
                                <a href="/purchase/board/qna">Q&A</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    )
}