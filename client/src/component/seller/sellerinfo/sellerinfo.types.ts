export interface ISellerinfoPageUIProps {
    farmsData : Farms[]
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