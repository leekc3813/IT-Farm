import SellerRegisterPageUI from "./sellerRegister.presenter";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ISellerRegisterPageProps } from "./sellerRegister.types";
import { BASE_URL } from "@/src/config/config";


export default function SellerRegisterPage(props: ISellerRegisterPageProps): JSX.Element {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(props.isEdit)
    const [formData, setFormData] = useState({
        q1: '',
        q3: '',
        detailadress: '',
        farmName: '',
        area: '',
        quantity: '',
        method: ''
    });

    const [errorData, setErrorData] = useState({
        q1: false,
        q3: false,
        detailadress: false,
        farmName: false,
        area: false,
        quantity: false,
        method: false,
    })

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
                if (!isEdit) {
                    const response = await axios.post(`${BASE_URL}farms/create/`, {
                        name: formData.farmName,
                        area: formData.area,
                        mail_number: formData.q1,
                        address: formData.q3,
                        address_detail: formData.detailadress,
                        method: formData.method,
                        quantity: formData.quantity
                    })
                    if (response.status == 201) {
                        alert("등록성공")
                        router.push('/seller')
                    }
                } else {
                    const response = await axios.put(`${BASE_URL}farms/update/`, {
                        farm_id: router.asPath.slice(22),
                        name: formData.farmName,
                        area: formData.area,
                        mail_number: formData.q1,
                        address: formData.q3,
                        address_detail: formData.detailadress,
                        method: formData.method,
                        quantity: formData.quantity
                    })
                    if (response.status == 201) {
                        alert("수정성공")
                        router.push('/seller')
                    }
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
        <SellerRegisterPageUI
            onToggleModal={onToggleModal}
            q1={formData.q1}
            q3={formData.q3}
            detailadress={formData.detailadress}
            isOpen={isOpen}
            handleComplete={handleComplete}
            onChangeDetailadress={onChangeDetailadress}
            onClickSubmit={onClickSubmit}
            errorData={errorData}
            isEdit={isEdit}
        />
    )
}