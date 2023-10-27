import styles from './purchase.module.css'
import { Carousel } from 'antd'
import { IPurchasePageUIProps } from './purchase.types'


export default function PurchasePageUI(props:IPurchasePageUIProps):JSX.Element {
    return(
        <div>
            <div className={styles.bannerVisible}>
                <Carousel className={styles.bannerContainer} autoplay>
                    <div>
                      <img className={styles.bannerImg}  src='https://file.cafe24cos.com/banner-admin-live/upload/ecudemo276582/695a2861-60e6-4532-b6fa-fbb93ec15fb1.png' alt='bannerImg' />
                    </div>
                    <div>
                        <img className={styles.bannerImg} src='https://file.cafe24cos.com/banner-admin-live/upload/ecudemo276582/005955a2-5d06-4886-e495-56672683de90.png' alt='bannerImg' />
                    </div>
                </Carousel>
            </div>
            
            <div className={styles.body}>
                ss
            </div>
        </div>
    )
}