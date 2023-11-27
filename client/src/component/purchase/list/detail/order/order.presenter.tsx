import styles from './order.module.css'
import {  Modal } from 'antd'
import { IPurchaseOrderPageUIProps } from './order.types'
import DaumPostcode from 'react-daum-postcode'

export default function PurchaseOrderPageUI(props:IPurchaseOrderPageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.title}>구매하기</div>
                
                <div className={styles.infoBox}>
                    <div className={styles.contentInfo}>
                        상품명 :
                    </div>
                    <div className={styles.content}>
                        {props.productTitle}
                    </div>
                </div>
                <div className={styles.infoBox}>
                    <div className={styles.contentInfo}>
                        주문수량 :
                    </div>
                    <div className={styles.content}>
                        {props.mount}
                    </div>
                </div>
                <p className={styles.subTitle}>주소</p>
                {
                        props.isOpen && (
                        <Modal
                            open={props.isOpen}
                            onOk={props.onToggleModal}
                            onCancel={props.onToggleModal}
                          >
                         <DaumPostcode onComplete={props.handleComplete} />
                       </Modal> 
                        )
                }
                <div className={styles.registerInputForm}>
                    <input value={props.q1} className={styles.registerNum} type='text' placeholder='주소번호' readOnly />
                    <button onClick={props.onToggleModal} className={styles.searchButton}>검색</button>
                </div>
                {props.errorData.q1 && <span className={styles.error}>주소를 검색해주세요.</span>}
                <input value={props.q3} className={styles.reigsterAddress1} type='text' placeholder='주소' readOnly/>
                {props.errorData.q3 && <span className={styles.error}>주소를 검색해주세요.</span>}
                <input onChange={(event) => props.onChangeDetailadress('detailadress', event.target.value)} className={styles.reigsterAddress2} type='text' placeholder='상세주소' />
                {props.errorData.detailadress && <span className={styles.error}>상세주소를 입력해주세요.</span>}
                <div className={styles.submitButtonContainer}>
                    <button onClick={props.onClickSubmit} className={styles.submitButton}>구매하기</button>
                </div>
                
            </div>
        </div>
    )
}