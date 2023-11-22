import DataPageUI from "./data.presenter";
import {useState} from 'react';
import axios from "axios";
import { BASE_URL } from "@/src/config/config";
import { useRouter } from "next/router";

export default function DataPage():JSX.Element {
    const [formData, setFormData] = useState({
        humidity : '',
        temp : '',
        underground : '',
        radiation : '',
    }) 

    const router = useRouter()

    const [result, setresult] = useState(1)

    const onChangeDetailData = (name : string, value : string) => {
        setFormData((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const onClickSubmit = async () => {
        try {
            const response = await axios.post(`${BASE_URL}output_model/pred/`,{
                humi : formData.humidity,
                temp : formData.temp,
                earth : formData.underground,
                radio : formData.radiation,
            })
            setresult(response.data.output)

        }catch(error:any){
            console.log(error)
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
        />
    )
}