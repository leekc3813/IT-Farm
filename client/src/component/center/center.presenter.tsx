import styles from './center.module.css'
import { ICenterPageUIProps } from './center.types'

export default function CenterPageUI(props: ICenterPageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
            <div>ssss</div>
            <div id="map" className={styles.maps}></div>
            <div>ssss</div>
        </div>
    )
}