import styles from './sellerRegister.module.css'
import { Select, Modal } from 'antd'
import { ISellerRegisterPageUIProps } from './sellerRegister.types'
import DaumPostcode from 'react-daum-postcode'

export default function SellerRegisterPageUI(props:ISellerRegisterPageUIProps):JSX.Element {
    // const handleChange = (value: string) => {
    //     console.log(`selected ${value}`);
    //   };

    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                {props.isEdit ? <span className={styles.registerTitle}>농장 수정</span> : <span className={styles.registerTitle}>농장 등록</span>}
                <div className={styles.inputContainer}>
                    <div className={styles.registerSection1}>
                        <div className={styles.registerBox}>
                            <div className={styles.registerInputBox}>
                                <span className={styles.registerInputTitle}>농장명</span>
                                <input onChange={(event) => props.onChangeDetailadress('farmName', event.target.value)} name='farmName' className={styles.registerInput} type='text'/>
                                {props.errorData.farmName && <span className={styles.error}>농장명을 입력해주세요.</span> }
                            </div>
                            <div className={styles.registerInputBox}>
                                <span className={styles.registerInputTitle}>평수</span>
                                <input onChange={(event) => props.onChangeDetailadress('area', event.target.value)} name='area' className={styles.registerInput} type='text'/>
                                {props.errorData.area && <span  className={styles.error}>평수를 입력해주세요.</span>}
                            </div>
                        </div>
                        <div className={styles.registerBox}>
                            <div className={styles.registerInputBox}>
                                <span className={styles.registerInputTitle}>재식수량</span>
                                <input onChange={(event) => props.onChangeDetailadress('quantity', event.target.value)} name='quantity' className={styles.registerInput} type='text'/>
                                {props.errorData.quantity && <span className={styles.error}>재식수량을 입력해주세요.</span>}
                            </div>
                            <div className={styles.registerInputBox}>
                                <span className={styles.registerInputTitle}>재배방법</span>
                                <Select
                                    style={{ width: 120 }}
                                    onChange={(value) => props.onChangeDetailadress('method', value)}
                                    options={[
                                    { value: '토경', name: '토경' },
                                    { value: '수경', name: '수경' },
                                    ]}
                                />
                                {props.errorData.method && <span className={styles.error}>재배방법을 선택해주세요.</span>}
                            </div>
                        </div>
                    </div>
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
                    <div className={styles.registerSection2}>
                        <span className={styles.registerInputTitle}>주소</span>
                        <div className={styles.registerInputForm}>
                            <input value={props.q1} className={styles.registerNum} type='text' placeholder='주소번호' readOnly />
                            <button onClick={props.onToggleModal} className={styles.searchButton}>검색</button>
                        </div>
                        {props.errorData.q1 && <span className={styles.error}>주소를 검색해주세요.</span>}
                        <input value={props.q3} className={styles.reigsterAddress1} type='text' placeholder='주소' readOnly/>
                        {props.errorData.q3 && <span className={styles.error}>주소를 검색해주세요.</span>}
                        <input onChange={(event) => props.onChangeDetailadress('detailadress', event.target.value)} className={styles.reigsterAddress2} type='text' placeholder='상세주소' />
                        {props.errorData.detailadress && <span className={styles.error}>상세주소를 입력해주세요.</span>}
                    </div>
                    <div className={styles.submitContainer}>
                        {props.isEdit ?
                            <button onClick={props.onClickSubmit} className={styles.submitButton}>수정하기</button>
                            :
                            <button onClick={props.onClickSubmit} className={styles.submitButton}>등록하기</button>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}