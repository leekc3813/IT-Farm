import styles from './qnaIndex.module.css'
import { IQnaIndexPageUIProps } from './qnaIndex.types'

export default function QnaIndexPageUI(props: IQnaIndexPageUIProps): JSX.Element {
    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.titleForm}>
                    {props.data[0]?.subject}
                </div>
                <div className={styles.dateForm}>
                    작성일: {props.data[0]?.regdate}
                </div>
                <div className={styles.contentForm} dangerouslySetInnerHTML={{__html:props.data[0]?.content}}/>
            </div>
            <div className={styles.reviewContainer}>
                {props.isAdmin ?
                    <div>
                        <p className={styles.reviewTitle}>
                            댓글작성
                        </p>
                        <div className={styles.writeContainer}>
                            <textarea onChange={props.onChangeCommentContent} className={styles.writeInput} rows={5} cols={48} ></textarea>
                            <button onClick={props.submitComment} className={styles.writeSubmit}>댓글작성</button>
                        </div>
                    </div> : ''}
                <p className={styles.reviewTitle}>
                    댓글
                </p>
                <div className={styles.reviewBox}>
                    {props.isAdmin ?
                        <div className={styles.reviewCenterInfoBox}>
                            <div className={styles.reviewInfo}>
                                작성자
                            </div>
                            <div className={styles.reviewInfo}>
                                내용
                            </div>
                            <div className={styles.reviewInfo}>
                                작성일자
                            </div>
                            <div className={styles.reviewInfo}>
                                비고
                            </div>
                        </div>
                        :
                        <div className={styles.reviewInfoBox}>
                            <div className={styles.reviewInfo}>
                                작성자
                            </div>
                            <div className={styles.reviewInfo}>
                                내용
                            </div>
                            <div className={styles.reviewInfo}>
                                작성일자
                            </div>
                        </div>
                    }
                    {props.commentData?.map((data, index) => {
                        return (
                            <div>
                                {props.isAdmin ?
                                    <div key={index} className={styles.reviewCenterInfoBox}>
                                        <div className={styles.reviewInfo}>
                                            admin
                                        </div>
                                        <div className={styles.reviewInfo}>
                                            {data.content}
                                        </div>
                                        <div className={styles.reviewInfo}>
                                            {data.regdate.slice(0, 10)}
                                        </div>
                                        <div className={styles.selectBox}>
                                            <div onClick={() => props.editComment(data.comment_id)} className={styles.select}>
                                                수정
                                            </div>
                                            <div onClick={() => props.removeComment(data.comment_id)} className={styles.select}>
                                                삭제
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div key={index} className={styles.reviewInfoBox}>
                                        <div className={styles.reviewInfo}>
                                            admin
                                        </div>
                                        <div className={styles.reviewInfo}>
                                            {data.content}
                                        </div>
                                        <div className={styles.reviewInfo}>
                                            {data.regdate.slice(0, 10)}
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}