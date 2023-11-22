import { ChangeEvent } from 'react'

export interface IListDetailPageUIProps {
    onClickOrder: () => void;
    onChangeMount: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickBasket: () => void;
    submitReview: () => void;
    onChangeReviewContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeReviewScore: (value: number) => void;
    editReview: (review_id: number) => void;
    removeReview: (review_id: number) => void;
    title: string;
    data: {
        price: number;
        photo: string;
    };
    reviewData: ReviewData[];
    reviewContent: string;
    reviewScore: number;
}

interface FetchData {
    id: number;
    name: string;
    kind: string;
    count: number;
    price: number;
    photo: string;
}

interface ReviewData {
    review_id: number;
    order: number;
    product_id: number;
    nickname: string;
    content: string;
    photo: string;
    score: number;
    regdate: string;
}