import styles from './listDetail.module.css'
import { IListDetailPageUIProps } from './listDetail.types'

export default function ListDetailPageUI(props:IListDetailPageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.leftContainer}>
                    <img src='https://via.placeholder.com/470/FFFF00/000000' alt='상품이미지' />
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.contentTitle}>유기농 홍고추 1kg</div>
                    <div className={styles.subText}>원산지: 국내산</div>
                    <div className={styles.subText}>1580원 1근/600g</div>
                    <div className={styles.subText}>주문수량</div>
                    <input className={styles.quantityInput} type='number' placeholder='단위 1kg/500g' min="1" max="10" />
                    <button className={styles.quantityButton}>장바구니 담기</button>
                    <button onClick={props.onClickOrder} className={styles.quantityButton}>바로구매</button>
                </div>
            </div>
        </div>
    )
}