import axios from "axios";
import HarvestPageUI from "./harvest.presenter";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { harvestState } from "@/src/store/harvest";

export default function HarvestPage():JSX.Element {
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
        console.log(formData)
    }

    const fetchData = async ()=> {
        const token = localStorage.getItem('accesstoken')
        try {
            const response = await axios.post('http://localhost:8000/farms/read/',{
                id : localStorage.getItem('id')
            })
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
            //api생성되면 넣어주기
        }else{
            alert("항목을 전부 채워주세요!")
        }
    }

    return(
        <HarvestPageUI
            farmData = {farmData}
            onChangeDetail = {onChangeDetail}
            errorData = {errorData}
         />
    )
}