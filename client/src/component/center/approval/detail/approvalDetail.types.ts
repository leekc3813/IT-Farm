export interface IApprovalDetailPageProps {
    farmData : {
        center : string;
    created_at :string;
    crop : number;
    eco : string;
    farm_address : string;
    farm_id : number;
    farm_name :string;
    kind : string;
    state : string;
    updated_at : string;
    id : number;
    } 
}

export interface IApprovalDetailPageUIProps {
    farmData : {
        center : string;
    created_at :string;
    crop : number;
    eco : string;
    farm_address : string;
    farm_id : number;
    farm_name :string;
    kind : string;
    state : string;
    updated_at : string;
    id : number;
    } 
    onCLickApproval : () => void;
    onClickRefuse : () => void;
}