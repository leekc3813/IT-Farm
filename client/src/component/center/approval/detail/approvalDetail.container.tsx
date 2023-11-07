import ApprovalDetailPageUI from "./approvalDetail.presenter";
import axios from "axios";
import { IApprovalDetailPageProps } from "./approvalDetail.types";


export default function ApprovalDetailPage(props: IApprovalDetailPageProps):JSX.Element{

     const onCLickApproval = async () => {
        try {
            const response = await axios.post('http://localhost:8000/farm_product/update/',{
                user_id : localStorage.getItem('id'),
                farm_id : 'props로 받아온 아이디',
            },{
                headers : {
                    Authorization : localStorage.getItem('accesstoken')
                }
            })
        }catch(error){
            console.log('error', error)
        }
     }

     const onClickRefuse = async () => {
        try{
            const response = await axios.post('http://farm_product/delete/',{
                user_id : localStorage.getItem('id'),
                farm_product_id : 'props로 받아온 프로덕트',
            },{
                headers : {
                    Authorization : localStorage.getItem('accestoken')
                }
            })
        }catch(error){
            console.log('error',error)
        }
     }

    return(
        <ApprovalDetailPageUI
            farmData={props.farmData}
         />
    )
}