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
                    <div className={styles.tableBody}>
                        <div className={styles.bodyCol1}>1</div>
                        <div className={styles.bodyCol2}>몰 오픈을 축하합니다.</div>
                        <div className={styles.bodyCol3}>EC Hosting</div>
                        <div className={styles.bodyCol4}>
                            2023-10-25
                            <br />
                            15:39:13
                        </div>
                    </div>
                    <div className={styles.searchContainer}>
                        <div className={styles.formContainer}>
                            <select className={styles.formSelect1}>
                                <option value="week">일주일</option>
                                <option value="month">한달</option>
                                <option value="month3">세달</option>
                                <option value="all">전체</option>
                            </select>
                            <select className={styles.formSelect2}>
                                <option value="subject">제목</option>
                                <option value="content">내용</option>
                                <option value="name">작성자</option>
                            </select>
                            <input
                                id="search"
                                name="search"
                                className={styles.formInput}
                                placeholder=""
                                value=""
                                type="text"
                            />
                            <a
                                href="#none"
                                className={styles.formSearchButton}
                                onClick={() => BeforeUnloadEvent.form_submit("boardSearchForm")}
                            >
                                찾기
                            </a>
                        </div>
                        {props.isAdmin === 'admin' ?
                            <button className={styles.writingButton}>글쓰기</button>
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