import axios from "axios";
import HarvestPageUI from "./harvest.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { harvestState } from "@/src/store/harvest";


export default function HarvestPage():JSX.Element {
    const router = useRouter()

    const [farmData, setfarmData] = useState([])

    const [harvest, setHarvest] = useRecoilState(harvestState)

    const [formData, setFormData] = useState({
        farmId : harvest,
        crop : '',
        eco : '',
        unitType : '',
        yield : '',
    })

    const [errorData, setErrorData] = useState({
        farmId : false,
        crop : false,
        eco : false,
        unit_type : false,
        yield : false,
    })

    const onChangeDetail = (name: string, value : string) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name] : value
          }));
    }

    const fetchData = async ()=> {
        try {
            const response = await axios.post('http://localhost:8000/farms/read/',{
                user_id : localStorage.getItem('id')
            })
            console.log(response.data)
            setfarmData(response.data)
        }catch(error){
            console.log('error',error)
        }  
    }

    useEffect(() => {
        fetchData();
    }, [])

    const onClickSubmit = async () => {
        const newErrorData = {...errorData}

        Object.keys(formData).forEach((key) => {
            const formDataKey = key as keyof typeof formData;
            if (formData[formDataKey] === ''){
                setErrorData((prev) => ({
                    ...prev,
                    [key] : true
                }))
            }else{
                setErrorData((prev) => ({
                    ...prev,
                    [key] : false
                }))
            }
        })
        const isFormDataValid = Object.values(formData).every((value) => value.trim() !== '')

        if (isFormDataValid){
            try{
                const response = await axios.post('http://localhost:8000/farm_product/create/',{
                user_id : localStorage.getItem('id'),
                farm_id : localStorage.getItem('harvest'),
                eco : formData.eco,
                kind : formData.crop,
                crop : formData.yield,
                unit_type : formData.unitType,
                })

                console.log(response)
                alert('등록성공')
                router.push('/seller')

            }catch(error){
                console.log('error', error)
            }
            
        }else{
            alert("항목을 전부 채워주세요!")
        }
    }

    return(
        <HarvestPageUI
            farmData = {farmData}
            onChangeDetail = {onChangeDetail}
            errorData = {errorData}
            onClickSubmit = {onClickSubmit}
         />
    )
}