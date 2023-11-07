import { RadioChangeEvent } from "antd";

export interface IApprovalPageUIProps {
    placement : string;
    placementChange : (e: RadioChangeEvent) => void;
    farmData : Farm []
}

interface Farm {
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