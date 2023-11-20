import styles from './center.module.css'
import { ICenterPageUIProps } from './center.types'
import { Radio } from 'antd';

export default function CenterPageUI(props: ICenterPageUIProps):JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.title}>품목현황</div>
                <Radio.Group className={styles.placement} value={props.placement} onChange={props.placementChange}>
                    <Radio.Button className={styles.placementButton} value="전국">전국</Radio.Button>
                    <Radio.Button className={styles.placementButton} value="정읍">정읍</Radio.Button>
                    <Radio.Button className={styles.placementButton} value="고창">고창</Radio.Button>
                    <Radio.Button className={styles.placementButton} value="익산">익산</Radio.Button>
                    <Radio.Button className={styles.placementButton} value="아산">아산</Radio.Button>
                    <Radio.Button className={styles.placementButton} value="청주">청주</Radio.Button>
                </Radio.Group>
                <div className={styles.title}>홍고추</div>
                <div className={styles.contentBox}>
                    {props.sum?.map((data,index) => {
                        if( data.kind === '홍고추'){
                            return (
                                <div className={styles.contentInner} key={index}>
                                    <div className={styles.subTitle}>{data.eco}</div>
                                    <div className={styles.weight}>{data.total_crop}kg</div>
                                </div>
                            )
                        }else{
                            return <div></div>
                        }
                    })}
                </div>
                <div className={styles.title}>청양고추</div>
                <div className={styles.contentBox}>
                    {props.sum?.map((data,index) => {
                            if( data.kind === '청양고추'){
                                return (
                                    <div className={styles.contentInner} key={index}>
                                        <div className={styles.subTitle}>{data.eco}</div>
                                        <div className={styles.weight}>{data.total_crop}kg</div>
                                    </div>
                                )
                            }else{
                                return <div></div>
                            }
                        })}
                </div>
                <div className={styles.title}>건고추</div>
                <div className={styles.contentBox}>
                    {props.sum?.map((data,index) => {
                                if( data.kind === '건고추'){
                                    return (
                                        <div className={styles.contentInner} key={index}>
                                            <div className={styles.subTitle}>{data.eco}</div>
                                            <div className={styles.weight}>{data.total_crop}kg</div>
                                        </div>
                                    )
                                }else{
                                    return <div></div>
                                }
                            })}
                </div>
                <div className={styles.title}>고춧가루</div>
                <div className={styles.contentBox}>
                    <div className={styles.weight}>35kg</div>
                </div>
            </div>
            <div id="map" className={styles.maps} />
            <div className={styles.container}>
                <div className={styles.title}>농장등록현황</div>
                <div className={styles.farmContainer}>
                    <div className={styles.farmInfoBox}>
                        <div className={styles.farmInfo}>농장이름</div>
                        <div className={styles.farmInfo}>농장주소</div>
                        <div className={styles.farmInfo}>농경방법</div>
                    </div>
                        {props.enrollData?.map((data) => {
                            return (
                                <div className={styles.farmInfoBox}>
                                    <div className={styles.farmContent}>
                                        {data.name}
                                    </div>
                                    <div className={styles.farmContent}>
                                        {data.address}
                                    </div>
                                    <div className={styles.farmContent}>
                                        {data.method}
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}