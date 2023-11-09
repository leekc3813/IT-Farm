import styles from "./qna.module.css";
import { IQnaPageUIProps } from "./qna.types";

export default function QnaPageUI(props: IQnaPageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
          {props.data[0]?.subject}
          {props.data[0]?.regdate}
          {props.data[0]?.content}
        </div>
    )
}