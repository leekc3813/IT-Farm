import PurchaseOrderPageUI from "./order.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/src/config/config";
import { useRecoilState } from "recoil";
import { orderState } from "@/src/store/order";

export default function PurchaseOrderPage(): JSX.Element {
    const router = useRouter()

    const product = decodeURIComponent(router.asPath.replace('/order', '').slice(15))
    const [productTitle, setProductTitle] = useState(product)
    const [mount, setMount] = useRecoilState(orderState)

    const [formData, setFormData] = useState({
        q1: '',
        q3: '',
        detailadress: '',
    })

    const [errorData, setErrorData] = useState({
        q1: false,
        q3: false,
        detailadress: false,
    })

    const [isOpen, setIsOpen] = useState(false)

    const onToggleModal = () => {
        setIsOpen((prev) => !prev)
    }

    const handleComplete = (data: any) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            q1: data.zonecode,
            q3: data.address
        }));

        onToggleModal(); // 주소창은 자동으로 사라지므로 모달만 꺼주면
    }

    const onChangeDetailadress = (name: string, value: string) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const onClickSubmit = async () => {
        const newErrorData = { ...errorData };
        Object.keys(formData).forEach((key) => {
            const formDataKey = key as keyof typeof formData;
            if (formData[formDataKey] === '') {
                setErrorData((prev) => ({
                    ...prev,
                    [key]: true
                }))
            } else {
                setErrorData((prev) => ({
                    ...prev,
                    [key]: false
                }))
            }
        });
        const isFormDataValid = Object.values(formData).every((value) => value.trim() !== '');

        if (isFormDataValid) {
            // All fields have a non-empty value
            try {
                /*isEdit가 false == 등록 */
                const response = await axios.post(`${BASE_URL}order/create/`, {
                    product_name: productTitle,
                    count: mount,
                    mail_number: formData.q1,
                    address: formData.q3,
                    address_detail: formData.detailadress
                })
                if (response.status == 201) {
                    alert("등록성공")
                    router.push('/purchase/list')
                }
            } catch (error: any) {
                console.log(error)
                if (error.response.status === 401) {
                    alert('로그인 x')
                    router.push('/register')
                }
            }
        } else {
            alert("항목을 전부 채워주세요!")
        }
    }

    return (
        <PurchaseOrderPageUI
            onToggleModal={onToggleModal}
            q1={formData.q1}
            q3={formData.q3}
            detailadress={formData.detailadress}
            isOpen={isOpen}
            productTitle={productTitle}
            errorData={errorData}
            handleComplete={handleComplete}
            onChangeDetailadress={onChangeDetailadress}
            mount={mount}
            onClickSubmit={onClickSubmit}
        />
    )
}