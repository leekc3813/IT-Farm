import NoticeDetailPage from "./detail/noticeDateil.container";
import styles from "./notice.module.css";
import { INoticePageUIProps } from "./notice.types";
import { Pagination } from 'antd';

export default function NoticePageUI(props:INoticePageUIProps):JSX.Element {
    return(
        <div className={styles.body}>
            <div className={styles.contentContainer}>
                <div className={styles.title}>
                    <h2>공지사항</h2>
                </div>
                <div className={styles.table}>
                    <div className={styles.tableHead}>
                        <div className={styles.headCol1}>번호</div>
                        <div className={styles.headCol2}>제목</div>
                        <div className={styles.headCol3}>작성자</div>
                        <div className={styles.headCol4}>작성일</div>
                    </div>
                    
                        {props.data?.map((data,index) => {
                            const reversedIndex = props.data.length -index -1;
                            return(
                                <NoticeDetailPage
                                    key={index} 
                                    data = {data}
                                    index = {reversedIndex}
                                />
                            )
                        })}
                        
                    <div className={styles.searchContainer}>
                        {props.isAdmin ?
                            <button onClick={props.onClickWrite} className={styles.writingButton}>글쓰기</button>
                            :
                            ''
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