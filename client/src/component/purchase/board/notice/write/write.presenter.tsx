import React from "react";
import styles from "./write.module.css";
import { IWritePageUIProps } from "./write.types";

export default function WritePageUI(props:IWritePageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.writeContainer}>
                <div className={styles.titleContainer}>
                    <h2>공지사항</h2>
                </div>
                <div className={styles.listContainer}>
                    <div className={styles.listTitleContainer}>
                        <div className={styles.listTitleHead}>제목</div>
                        <div className={styles.listTitleBody}>
                            <input onChange={props.handleTitleChange} type="text" className={styles.titleInput} />
                            <div className={styles.titleCheckName}>
                                <input type="checkbox" className={styles.titleCheckbox} />
                                공지사항
                            </div>
                            <div className={styles.titleCheckName}>
                                <input type="checkbox" className={styles.titleCheckbox} />
                                노하우
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