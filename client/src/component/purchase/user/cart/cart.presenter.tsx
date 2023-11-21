import styles from './cart.module.css'
import { IUserCartPageUIProps } from './cart.types'

export default function UserCartPageUI(props:IUserCartPageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <p className={styles.title}>주문현황</p>
                <div className={styles.container}>
                    <div className={styles.infoContainer}>
                        <div className={styles.info}>상품명</div>
                        <div className={styles.info}>수량</div>
                        <div className={styles.info}>구매일시</div>
                        <div className={styles.info}>센터</div>
                    </div>
                    {props.data.map((data,index) => {
                        return(
                            <div key={index} className={styles.infoContainer}>
                                <div className={styles.info}>{data.product_name}</div>
                                <div className={styles.info}>{data.count}</div>
                                <div className={styles.info}>{data.order_date.slice()}</div>
                                <div className={styles.info}>{data.center}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}