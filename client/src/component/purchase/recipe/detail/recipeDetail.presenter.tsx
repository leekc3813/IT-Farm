import styles from './recipeDetail.module.css'
import { IRecipeDetailPageUIProps } from './recipeDetail.types'

export default function RecipeDetailPageUI(props:IRecipeDetailPageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    <img src={props.data[0]?.photo} className={styles.img} alt='상세이미지' />
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentTitle}>
                        {props.data[0]?.subject}
                    </div>
                    <div className={styles.author}>
                        작성자: {props.data[0]?.nickname}
                    </div>
                    <div className={styles.author}>
                        작성일자: {props.data[0]?.regdate.slice(0,10)}
                    </div>
                    <div className={styles.content}>
                        {props.data[0]?.content}
                    </div>
                </div>
            </div>
        </div>
    )
}