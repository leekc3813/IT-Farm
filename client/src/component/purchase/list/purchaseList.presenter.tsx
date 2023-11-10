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
                            <img src='https://via.placeholder.com/321x221/FFFF00/000000' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>유기농 홍고추</p>
                            <p className={styles.contentsPrice}>12000원 1kg</p>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='https://via.placeholder.com/321x221/FFFF00/000000' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>무농약 홍고추</p>
                            <p className={styles.contentsPrice}>10000원 1kg</p>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='https://via.placeholder.com/321x221/FFFF00/000000' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>일반 홍고추</p>
                            <p className={styles.contentsPrice}>8000원 1kg</p>
                        </div>
                    </div>
                </div>
                <div className={styles.title}>
                    청고추
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentBox}>
                        <div className={styles.imgBox}>
                            <img src='https://via.placeholder.com/321x221/FFFF00/000000' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>유기농 홍고추</p>
                            <p className={styles.contentsPrice}>12000원 1kg</p>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='https://via.placeholder.com/321x221/FFFF00/000000' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>무농약 홍고추</p>
                            <p className={styles.contentsPrice}>10000원 1kg</p>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='https://via.placeholder.com/321x221/FFFF00/000000' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>일반 홍고추</p>
                            <p className={styles.contentsPrice}>8000원 1kg</p>
                        </div>
                    </div>
                </div>
                <div className={styles.title}>
                    건고추
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentBox}>
                        <div className={styles.imgBox}>
                            <img src='https://via.placeholder.com/321x221/FFFF00/000000' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>유기농 홍고추</p>
                            <p className={styles.contentsPrice}>12000원 1kg</p>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='https://via.placeholder.com/321x221/FFFF00/000000' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>무농약 홍고추</p>
                            <p className={styles.contentsPrice}>10000원 1kg</p>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='https://via.placeholder.com/321x221/FFFF00/000000' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>일반 홍고추</p>
                            <p className={styles.contentsPrice}>8000원 1kg</p>
                        </div>
                    </div>
                </div>
                <div className={styles.title}>
                    고추가루
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentBox}>
                        <div className={styles.imgBox}>
                            <img src='https://via.placeholder.com/321x221/FFFF00/000000' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>국산 고추가루</p>
                            <p className={styles.contentsPrice}>12000원 1kg</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}