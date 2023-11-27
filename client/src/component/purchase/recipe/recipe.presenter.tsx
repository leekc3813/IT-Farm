import styles from './recipe.module.css'
import Link from 'next/link'
import { IRecipePageUIProps } from './recipe.types'

export default function RecipePageUI(props:IRecipePageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>
                    레시피
                </h2>
                <div className={styles.contentContainer}>
                    {props.data.map((data,index) => {
                        return(
                            <Link key={index} className={styles.link} href={`/purchase/recipe/${data.recipe_id}`}>
                                <div className={styles.contentBox}>
                                    <div className={styles.imgBox}>
                                        <img src= {data.photo} alt='상품이미지' />
                                    </div>
                                    <div className={styles.contentsBox}>
                                        <p className={styles.contentsTitle}>{data.subject}</p>
                                        <p className={styles.contentsPrice}>{data.content}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
} 