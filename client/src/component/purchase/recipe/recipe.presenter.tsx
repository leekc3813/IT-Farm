import styles from './recipe.module.css'
import Link from 'next/link'

export default function RecipePageUI():JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    레시피
                </div>
                <div className={styles.contentContainer}>
                    <Link className={styles.link} href={"/purchase/list/유기농홍고추"}>
                        <div className={styles.contentBox}>
                            <div className={styles.imgBox}>
                                <img src='https://via.placeholder.com/321x221/FFFF00/000000' alt='상품이미지' />
                            </div>
                            <div className={styles.contentsBox}>
                                <p className={styles.contentsTitle}>고추참치 찌개</p>
                                <p className={styles.contentsPrice}>도희건</p>
                            </div>
                        </div>
                    </Link>
                    <Link className={styles.link}  href={"/purchase/list/무농약홍고추"}>
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='https://via.placeholder.com/321x221/FFFF00/000000' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>고추볶음밥</p>
                            <p className={styles.contentsPrice}>박은주</p>
                        </div>
                    </div>
                    </Link>
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='https://via.placeholder.com/321x221/FFFF00/000000' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>고추 오므라이스</p>
                            <p className={styles.contentsPrice}>이경찬</p>
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
                    <div className={styles.contentBox}>
                         <div className={styles.imgBox}>
                            <img src='https://via.placeholder.com/321x221/FFFF00/000000' alt='상품이미지' />
                        </div>
                        <div className={styles.contentsBox}>
                            <p className={styles.contentsTitle}>일반 홍고추</p>
                            <p className={styles.contentsPrice}>8000원 1kg</p>
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
            </div>
        </div>
    )
} 