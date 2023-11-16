export interface IUserCartPageUIProps {
    data : FetchData[];
}

interface FetchData {
    product: string;
    order_date : string;
    count : string;
    center : string;
}