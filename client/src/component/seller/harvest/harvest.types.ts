export interface IHarvestPageUIProps {
    farmData : Farm[] | null;
    onChangeDetail : (name:string, value : string) => void;
    errorData : {
        farmId : boolean,
        unit_type : boolean,
        crop : boolean,
        eco : boolean,
        yield : boolean,
    }
    onClickSubmit : () => void;
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