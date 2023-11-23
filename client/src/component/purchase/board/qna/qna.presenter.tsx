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
            <div className={styles.headCol0}>번호</div>
            <div className={styles.headCol1}>제목</div>
            <div className={styles.headCol2}>작성자</div>
            <div className={styles.headCol3}>작성일</div>
            <div className={styles.headCol4}>상태</div>
          </div>
          {props.data?.map((data, index) => {
            const reversedIndex = props.data.length -index;
            return (
              <QnaDetailPage
                key={index}
                data={data}
                index={reversedIndex}
              />
            )
          })}
          <div className={styles.searchContainer}>
            {props.isAdmin ?
              '' :
              <button onClick={props.onClickWrite} className={styles.writingButton}>글쓰기</button>
            }
          </div>
          <div className={styles.pageSelect}>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    </div>
  )
}