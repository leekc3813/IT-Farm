import styles from './listDetail.module.css'
import { IListDetailPageUIProps } from './listDetail.types'
import { Rate } from 'antd';
import React from 'react'; 

export default function ListDetailPageUI(props:IListDetailPageUIProps):JSX.Element{


    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.leftContainer}>
                    <img src={props.data?.photo} alt='상품이미지' />
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.contentTitle}>{props.title}</div>
                    <div className={styles.subText}>원산지: 국내산</div>
                    <div className={styles.subText}>무료배송</div>
                    <div className={styles.lineStyle}></div>
                    <div className={styles.orderCount}>
                        <div className={styles.subText}>주문수량: </div>
                        <input onChange={props.onChangeMount} className={styles.quantityInput} type='number' placeholder='단위 1kg' min="1" max="10" />
                    </div>
                    <div className={styles.priceText}>{props.data?.price}원(1kg)</div>
                    
                    <div className={styles.buttonContainer}>
                        <button onClick={props.onClickBasket} className={styles.quantityButton}>장바구니 담기</button>
                        <button onClick={props.onClickOrder} className={styles.quantityButton2}>바로구매</button>
                    </div>
                    
                </div>
            </div>
            <div className={styles.reviewContainer}>
                <p className={styles.reviewTitle}>
                    상품리뷰작성
                </p>
                <div className={styles.writeContainer}>
                    <div className={styles.starContainer}>
                        <Rate
                            onChange={props.onChangeReviewScore} 
                            defaultValue={0} 
                        />
                    </div>
                    
                    <textarea onChange={props.onChangeReviewContent} className={styles.writeInput} rows={5} cols={48} ></textarea>
                    <button onClick={props.submitReview} className={styles.writeSubmit}>리뷰작성</button>
                </div>
                <p className={styles.reviewTitle}>
                    상품리뷰
                </p>
                <div className={styles.reviewBox}>
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
                        <div className={styles.reviewInfo}>
                            별점
                        </div>
                        <div className={styles.reviewInfo}>
                            비고
                        </div>
                    </div>
                    {props.reviewData.map((data,index) => {
                        return (
                            <div key={index} className={styles.reviewInfoBox2}>
                                <div className={styles.reviewInfo}>
                                    {data.nickname}
                                </div>
                                <div className={styles.reviewInfo}>
                                    {data.content}
                                </div>
                                <div className={styles.reviewInfo}>
                                    {data.regdate.slice(0,10)}
                                </div>
                                <div className={styles.reviewInfo}>
                                    {data.score}
                                </div>
                                <div className={styles.selectBox}>
                                    <div onClick={() => props.editReview(data.review_id)} className={styles.select}>
                                        수정
                                    </div>
                                    <div onClick={() => props.removeReview(data.review_id)} className={styles.select}>
                                        삭제
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}