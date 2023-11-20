import DataPageUI from "./data.presenter";
import {useState} from 'react';
import axios from "axios";
import { BASE_URL } from "@/src/config/config";

export default function DataPage():JSX.Element {
    const [formData, setFormData] = useState({
        humidity : '',
        temp : '',
        underground : '',
        radiation : '',
    }) 

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

        }catch(error){

        }
    }

    return(
        <DataPageUI 
        formData = {formData}
        onChangeDetailData = {onChangeDetailData}
        result = {result}
        />
    )
}