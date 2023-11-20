export interface ISellerinfoPageUIProps {
    farmsData : Farms[];
    productData : Products[];
}

interface Farms {
    address : string,
    address_detail : string,
    area : number,
    center : string,
    created_at : string,
    id : number,
    mail_number : number,
    method : string,
    name : string,
    quantity : number,
    updated_at : string,
    user_id : number
}

interface Products {
    id : number;
    farm_id : number;
    eco : string;
    kind : string;
    crop : string;
    center : string;
    state : string;
    created_at : string;
    updated_at : string;
    farm_name : string;
    farm_address : string;
}