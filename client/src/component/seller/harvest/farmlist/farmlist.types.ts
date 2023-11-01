export interface IFarmlistPageProps {
    farmData : {
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
}

export interface IFarmlistPageUIProps {
    farmData : {
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
    onClickIcon : () => void;
    onClickIcon2 : () => void;
    isClick : boolean;
}
