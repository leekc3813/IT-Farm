export interface IUserBasketPageUIProps{
    data : DataSet[];
    onClickCancle : (cart_id:string) => void;
}

interface DataSet {
    cart_id : string;
    user_id : string;
    count : number;
    product_id : string;
    created_at : string;
    updated_at : string
}