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
                    <Link className={styles.link} href={'/purchase/list/유기농 홍고추'}>
                        <div className={styles.contentBox}>
                            <div className={styles.imgBox}>
                                <img src='/img/purchase/list/홍고추.png' alt='상품이미지' />
                            </div>
                            <div className={styles.contentsBox}>
                                <p className={styles.contentsTitle}>유기농 홍고추</p>
                                <p className={styles.contentsWeight}>1kg</p>
                                <p className={styles.contentsPrice}>19,870원</p>
                            </div>
                        </div>
                    </Link>
                    <Link className={styles.link} href={'/purchase/list/무농약 홍고추'}>
                        <div className={styles.contentBox}>
                            <div className={styles.imgBox}>
                                <img src='/img/purchase/list/국내산_홍고추.png' alt='상품이미지' />
                            </div>
                            <div className={styles.contentsBox}>
                                <p className={styles.contentsTitle}>무농약 홍고추</p>
                                <p className={styles.contentsWeight}>1kg</p>
                                <p className={styles.contentsPrice}>18,400원</p>
                            </div>
                        </div>
                    </Link>
                    <Link className={styles.link} href={'/purchase/list/일반 홍고추'}>
                        <div className={styles.contentBox}>
                            <div className={styles.imgBox}>
                                <img src='/img/purchase/list/청홍고추.png' alt='상품이미지' />
                            </div>
                            <div className={styles.contentsBox}>
                                <p className={styles.contentsTitle}>일반 홍고추</p>
                                <p className={styles.contentsWeight}>1kg</p>
                                <p className={styles.contentsPrice}>14,700원</p>
                            </div>
                        </div>
                    </Link>        
                </div>
                <div className={styles.title}>
                    청양고추
                </div>
                <div className={styles.contentContainer}>
                    <Link className={styles.link} href={'/purchase/list/유기농 청양고추'}>
                        <div className={styles.contentBox}>
                            <div className={styles.imgBox}>
                                <img src='/img/purchase/list/청고추.png' alt='상품이미지' />
                            </div>
                            <div className={styles.contentsBox}>
                                <p className={styles.contentsTitle}>유기농 청양고추</p>
                                <p className={styles.contentsWeight}>1kg</p>
                                <p className={styles.contentsPrice}>12,580원</p>
                            </div>
                        </div>
                    </Link>
                    <Link className={styles.link} href={'/purchase/list/무농약 청양고추'}>
                        <div className={styles.contentBox}>
                            <div className={styles.imgBox}>
                                <img src='/img/purchase/list/국내산_풋고추.png' alt='상품이미지' />
                            </div>
                            <div className={styles.contentsBox}>
                                <p className={styles.contentsTitle}>무농약 청양고추</p>
                                <p className={styles.contentsWeight}>1kg</p>
                                <p className={styles.contentsPrice}>9,960원</p>
                            </div>
                        </div>
                    </Link>
                    <Link className={styles.link} href={'/purchase/list/일반 청양고추'}>
                        <div className={styles.contentBox}>
                            <div className={styles.imgBox}>
                                <img src='/img/purchase/list/친환경_풋고추.png' alt='상품이미지' />
                            </div>
                            <div className={styles.contentsBox}>
                                <p className={styles.contentsTitle}>일반 청양고추</p>
                                <p className={styles.contentsWeight}>1kg</p>
                                <p className={styles.contentsPrice}>8,590원</p>
                            </div>
                        </div>
                    </Link>   
                </div>
                <div className={styles.title}>
                    건고추
                </div>
                <div className={styles.contentContainer}>
                    <Link className={styles.link} href={'/purchase/list/유기농 건고추'}>
                        <div className={styles.contentBox}>
                            <div className={styles.imgBox}>
                                <img src='/img/purchase/list/건고추.png' alt='상품이미지' />
                            </div>
                            <div className={styles.contentsBox}>
                                <p className={styles.contentsTitle}>유기농 건고추</p>
                                <p className={styles.contentsWeight}>1kg</p>
                                <p className={styles.contentsPrice}>14,900원</p>
                            </div>
                        </div>
                    </Link>
                    <Link className={styles.link} href={'/purchase/list/무농약 건고추'}>
                        <div className={styles.contentBox}>
                            <div className={styles.imgBox}>
                                <img src='/img/purchase/list/건고추2.jpg' alt='상품이미지' />
                            </div>
                            <div className={styles.contentsBox}>
                                <p className={styles.contentsTitle}>무농약 건고추</p>
                                <p className={styles.contentsWeight}>1kg</p>
                                <p className={styles.contentsPrice}>14,420원</p>
                            </div>
                        </div>
                    </Link>
                    <Link className={styles.link} href={'/purchase/list/일반 건고추'}>
                        <div className={styles.contentBox}>
                            <div className={styles.imgBox}>
                                <img src='/img/purchase/list/건고추3.jpg' alt='상품이미지' />
                            </div>
                            <div className={styles.contentsBox}>
                                <p className={styles.contentsTitle}>일반 건고추</p>
                                <p className={styles.contentsWeight}>1kg</p>
                                <p className={styles.contentsPrice}>11,900원</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.title}>
                    고춧가루
                </div>
                <div className={styles.contentContainer}>
                    <Link className={styles.link} href={'/purchase/list/국산 고춧가루'}>
                        <div className={styles.contentBox}>
                            <div className={styles.imgBox}>
                                <img src='/img/purchase/list/고춧가루.png' alt='상품이미지' />
                            </div>
                            <div className={styles.contentsBox}>
                                <p className={styles.contentsTitle}>국산 고춧가루</p>
                                <p className={styles.contentsWeight}>1kg</p>
                                <p className={styles.contentsPrice}>19,580원</p>
                            </div>
                        </div>
                    </Link>
                    <Link className={styles.link} href={'/purchase/list/유기농 태양초 고춧가루'}>
                        <div className={styles.contentBox}>
                            <div className={styles.imgBox}>
                                <img src='/img/purchase/list/유기농_태양초_고춧가루.png' alt='상품이미지' />
                            </div>
                            <div className={styles.contentsBox}>
                                <p className={styles.contentsTitle}>유기농 태양초 고춧가루</p>
                                <p className={styles.contentsWeight}>1kg</p>
                                <p className={styles.contentsPrice}>44,100원</p>
                            </div>
                        </div>
                    </Link>   
                </div>
            </div>
        </div>
    )
}