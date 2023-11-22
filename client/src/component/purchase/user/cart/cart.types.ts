export interface IUserCartPageUIProps {
    data : FetchData[];
}

interface FetchData {
    product_name: string;
    order_date : string;
    count : string;
    center : string;
}