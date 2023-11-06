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
                    <div className={styles.contentInner}>
                        <div className={styles.subTitle}>유기농</div>
                        <div className={styles.weight}>35kg</div>
                    </div>
                    <div className={styles.contentInner}>
                        <div className={styles.subTitle}>무농약</div>
                        <div className={styles.weight}>35kg</div>
                    </div>
                    <div className={styles.contentInner}>
                        <div className={styles.subTitle}>일반</div>
                        <div className={styles.weight}>35kg</div>
                    </div>
                </div>
                <div className={styles.title}>청고추</div>
                <div className={styles.contentBox}>
                    <div className={styles.contentInner}>
                        <div className={styles.subTitle}>유기농</div>
                        <div className={styles.weight}>35kg</div>
                    </div>
                    <div className={styles.contentInner}>
                        <div className={styles.subTitle}>무농약</div>
                        <div className={styles.weight}>35kg</div>
                    </div>
                    <div className={styles.contentInner}>
                        <div className={styles.subTitle}>일반</div>
                        <div className={styles.weight}>35kg</div>
                    </div>
                </div>
                <div className={styles.title}>건고추</div>
                <div className={styles.contentBox}>
                    <div className={styles.contentInner}>
                        <div className={styles.subTitle}>유기농</div>
                        <div className={styles.weight}>35kg</div>
                    </div>
                    <div className={styles.contentInner}>
                        <div className={styles.subTitle}>무농약</div>
                        <div className={styles.weight}>35kg</div>
                    </div>
                    <div className={styles.contentInner}>
                        <div className={styles.subTitle}>일반</div>
                        <div className={styles.weight}>35kg</div>
                    </div>
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
                    <div className={styles.farmInfoBox}>
                        <div className={styles.farmContent}>
                            장완이네
                        </div>
                        <div className={styles.farmContent}>
                            시그니엘 1101호
                        </div>
                        <div className={styles.farmContent}>
                            로얄뷰
                        </div>
                    </div>
                    <div className={styles.farmInfoBox}>
                        <div className={styles.farmContent}>
                            sss
                        </div>
                        <div className={styles.farmContent}>
                            sss
                        </div>
                        <div className={styles.farmContent}>
                            sss
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}