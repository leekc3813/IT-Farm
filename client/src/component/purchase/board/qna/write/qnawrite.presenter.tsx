import React from "react";
import styles from "./qnawrite.module.css";
import { IQnaWritePageUIProps } from "./qnawrite.types";

export default function QnaWritePageUI(props:IQnaWritePageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.writeContainer}>
                <div className={styles.titleContainer}>
                    <h2>Q&A</h2>
                </div>
                <div className={styles.listContainer}>
                    <div className={styles.listTitleContainer}>
                        <div className={styles.listTitleHead}>제목</div>
                        <div className={styles.listTitleBody}>
                            <input onChange={props.handleTitleChange} type="text" className={styles.titleInput} />
                            <div className={styles.titleCheckName}>
                                <input type="checkbox" className={styles.titleCheckbox} />
                                상품
                            </div>
                            <div className={styles.titleCheckName}>
                                <input type="checkbox" className={styles.titleCheckbox} />
                                배송
                            </div>
                        </div>
                    </div>
                    <div className={styles.listContentContainer}>
                        <div className={styles.contentHead}>본문</div>
                        <div className={styles.contentBody}>
                            <input onChange={props.handleContentChange} type="text" className={styles.contentTextArea} />
                        </div>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={props.handleCancleClick} className={styles.buttonStyle1}>취소</button>
                    <button onClick={props.handleWriteClick} className={styles.buttonStyle2}>등록</button>
                </div>
            </div>
        </div>
    )
}