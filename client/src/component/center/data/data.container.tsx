import DataPageUI from "./data.presenter";
import {useState} from 'react';
import axios from "axios";
import { BASE_URL } from "@/src/config/config";
import { useRouter } from "next/router";

export default function DataPage():JSX.Element {
    const [formData, setFormData] = useState({
        area : '',
        humidity : '',
        temp : '',
        underground : '',
        radiation : '',
    }) 

    const [outputData, setOutputData] = useState(0)

    const router = useRouter()

    const [result, setresult] = useState(1)

    const onChangeDetailData = (name : string, value : string) => {
        setFormData((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const onClickSubmit = async () => {
        if (!formData.area || !formData.humidity || !formData.temp || !formData.underground || !formData.radiation) {
            alert('항목을 전부 채워주세요');
            return;
        }

        try {
            const response = await axios.post(`${BASE_URL}output_model/pred/`,{
                area : formData.area,
                humi : formData.humidity,
                temp : formData.temp,
                earth : formData.underground,
                radio : formData.radiation,
            })
            setOutputData(response.data.output.toFixed(4))

        }catch(error:any){
            if (error.response.status === 401){
                alert('로그인 x')
                router.push('/register')
            }
        }  
    }

    return(
        <DataPageUI 
        formData = {formData}
        onChangeDetailData = {onChangeDetailData}
        result = {result}
        onClickSubmit = {onClickSubmit}
        outputData = {outputData}
        />
    )
}