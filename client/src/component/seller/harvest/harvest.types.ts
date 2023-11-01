export interface IHarvestPageUIProps {
    farmData : Farm[] | null;
}

interface Farm {
    address : string;
    address_detail : string;
    area : number;
    created_at : string;
    id : number;
    mail_number : number;
    method : string;
    name : string;
    quantity : number;
    updated_at : string;
}