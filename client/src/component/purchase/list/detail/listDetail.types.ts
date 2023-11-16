import {ChangeEvent} from 'react'

export interface IListDetailPageUIProps {
    onClickOrder : () => void;
    onChangeMount : (event:ChangeEvent<HTMLInputElement>) => void;
    onClickBasket : () => void;
    title : string;
}