import styles from './basket.module.css'
import Link from 'next/link'

export default function UserBasketPageUI():JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    장바구니
                </div>
                <div className={styles.listContainer}>
                    <div className={styles.listInfoBox}>
                        <div className={styles.listInfo}>상품명</div>
                        <div className={styles.listInfo}>수량</div>
                        <div className={styles.listInfo}>비고</div>
                    </div>
                    
                        <div className={styles.contentBox}>
                            <div className={styles.listInfo}>유기농 청고추</div>
                            <div className={styles.listInfo}>8근</div>
                            <div className={styles.selectBox}>
                                <Link className={styles.link} href={'/purchase/list/받아온상품명/order'}>
                                    <span className={styles.select}>
                                        구매
                                    </span>
                                </Link>
                                <span className={styles.select}>
                                    취소
                                </span>
                            </div>
                        </div>            
                </div>
            </div>
        </div>
    )
}