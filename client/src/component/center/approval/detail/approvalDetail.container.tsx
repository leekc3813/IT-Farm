import ApprovalDetailPageUI from "./approvalDetail.presenter";
import axios from "axios";
import { IApprovalDetailPageProps } from "./approvalDetail.types";
import { useState } from "react";
import { BASE_URL } from "@/src/config/config";


export default function ApprovalDetailPage(props: IApprovalDetailPageProps):JSX.Element{

     const onCLickApproval = async () => {
        try {
            const response = await axios.put(`${BASE_URL}farm_product/update/`,{
                farm_product_id : props.farmData.id,
            })

            if(response.status === 201){
                alert('승인성공')
                console.log('승인성공')
                window.location.reload();
            }else{
                alert('승인실패')
                console.log('승인실패')
            }
        }catch(error){
            console.log('error', error)
        }
     }

     const onClickRefuse = async () => {
        try{
            const response = await axios.delete(`${BASE_URL}farm_product/delete/${props.farmData.id}/`)

            if(response.status === 200){
                alert('삭제성공')
                console.log('삭제성공')
                window.location.reload();

            }else{
                alert('삭제실패')
                console.log('삭제실패')
            }
        }catch(error){
            console.log('error',error)
        }
     }

    return(
        <ApprovalDetailPageUI
            farmData={props.farmData}
            onCLickApproval = {onCLickApproval}
            onClickRefuse = {onClickRefuse}
         />
    )
}