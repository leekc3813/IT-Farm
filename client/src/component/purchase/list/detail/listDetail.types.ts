import {ChangeEvent} from 'react'

export interface IListDetailPageUIProps {
    onClickOrder : () => void;
    onChangeMount : (event:ChangeEvent<HTMLInputElement>) => void;
    onClickBasket : () => void;
    submitReview : () => void;
    onChangeReviewContent : (event:ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeReviewScore : (value:number) => void;
    title : string;
    data : FetchData[];
    reviewData : ReviewData[];
    reviewContent: string;
    reviewScore : number;
}

interface FetchData {
    id : string;
    name: string;
    kind : string;
    count : number;
    price : number;
    photo : string;
}

interface ReviewData {
    review_id : number;
    order : number;
    product_id : number;
    nickname : string;
    content : string;
    photo : string;
    score : number;
    regdate : string;
}