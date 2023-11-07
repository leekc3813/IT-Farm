import { RadioChangeEvent } from "antd";

export interface ICenterPageUIProps {
    placement : string;
    placementChange : (e: RadioChangeEvent) => void;
    enrollData : Enroll[];
    sum : SumData[];
}

interface Enroll {
    address : string;
    address_detail : string;
    area : number;
    center : string;
    created_at : string;
    id : number;
    latitude : number;
    longitude : number;
    method : string;
    name : string;
    quantity : number;
    updated_at : string;
    user_id : number;
}

interface SumData {
    eco : string;
    kind : string;
    total_crop : number;
}