import QnaDetailPage from "./detail/qnaDetail.container"
import styles from "./qna.module.css";
import { IQnaPageUIProps } from "./qna.types";
import { Pagination } from 'antd';

export default function QnaPageUI(props: IQnaPageUIProps): JSX.Element {
  return (
    <div className={styles.body}>
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          <h2>Q&A</h2>
        </div>
        <div className={styles.table}>
          <div className={styles.tableHead}>
            <div className={styles.headCol1}>제목</div>
            <div className={styles.headCol2}>작성자</div>
            <div className={styles.headCol3}>작성일</div>
          </div>
          {/* <div className={styles.tablebody}>
            <div className={styles.bodyCol1}>{props.data[0]?.subject}</div>
            <div className={styles.bodyCol2}>{props.data[0]?.regdate}</div>
            <div className={styles.bodyCol3}>{props.data[0]?.content}</div>
          </div> */}
          {props.data?.map((data, index) => {
            return (
              <QnaDetailPage
                key={index}
                data={data}
                index={index}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}