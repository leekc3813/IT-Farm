import Link from 'next/link'
import styles from './purchaseList.module.css'

export default function PurchaseListPageUI():JSX.Element {
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    홍고추
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentBox}>
                        <div className={styles.imgBox}>
                            <img src='/img/purchase/list/홍고추.png' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>유기농 홍고추 1kg</p>
                            <p className={styles.contentsPrice}>12,000원</p>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='/img/purchase/list/국내산_홍고추.png' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>무농약 홍고추 1kg</p>
                            <p className={styles.contentsPrice}>10,000원</p>
                        </div>
                    </div>                 
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='/img/purchase/list/청홍고추.png' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>청홍고추 1kg</p>
                            <p className={styles.contentsPrice}>5,500원</p>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='/img/purchase/list/청홍고추2.png' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>청홍고추 500g</p>
                            <p className={styles.contentsPrice}>10,000원</p>
                        </div>
                    </div>
                </div>
                <div className={styles.title}>
                    청고추
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentBox}>
                        <div className={styles.imgBox}>
                            <img src='/img/purchase/list/청고추.png' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>유기농 청고추 1kg</p>
                            <p className={styles.contentsPrice}>12,000원</p>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='/img/purchase/list/국내산_풋고추.png' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>무농약 청고추 1kg</p>
                            <p className={styles.contentsPrice}>10,000원</p>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='/img/purchase/list/국내산_친환경_풋고추.png' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>청고추 500g</p>
                            <p className={styles.contentsPrice}>8,000원</p>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='/img/purchase/list/친환경_풋고추.png' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>청고추 1kg</p>
                            <p className={styles.contentsPrice}>8,000원</p>
                        </div>
                    </div>
                </div>
                <div className={styles.title}>
                    건고추
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentBox}>
                        <div className={styles.imgBox}>
                            <img src='/img/purchase/list/건고추.png' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>유기농 건고추 1kg</p>
                            <p className={styles.contentsPrice}>12,000원</p>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='/img/purchase/list/건고추2.jpg' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>무농약 건고추 1kg</p>
                            <p className={styles.contentsPrice}>10,000원</p>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='/img/purchase/list/건고추3.jpg' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>일반 건고추 1kg</p>
                            <p className={styles.contentsPrice}>8,000원</p>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='/img/purchase/list/건고추500g.jpg' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>일반 건고추 500g</p>
                            <p className={styles.contentsPrice}>5,500원</p>
                        </div>
                    </div>
                </div>
                <div className={styles.title}>
                    고춧가루
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentBox}>
                        <div className={styles.imgBox}>
                            <img src='/img/purchase/list/고춧가루.png' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>국산 고추가루 1kg</p>
                            <p className={styles.contentsPrice}>12,000원</p>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                        <div className={styles.imgBox}>
                            <img src='/img/purchase/list/유기농_태양초_고춧가루.png' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>유기농 태양초 고춧가루 1kg</p>
                            <p className={styles.contentsPrice}>14,000원</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}