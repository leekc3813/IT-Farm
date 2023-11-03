import { ChangeEvent } from "react";

export interface ISellerRegisterPageUIProps {
    onToggleModal : () => void;
    q1 : string;
    q3 : string;
    detailadress : string;
    isOpen : boolean;
    isEdit : boolean;
    onClickSubmit : () => void;
    handleComplete : (data:any) => void;
    onChangeDetailadress : (name:string, value : string) => void;
    errorData: {
        q1: boolean;
        q3: boolean;
        detailadress: boolean;
        farmName: boolean;
        area: boolean;
        quantity: boolean;
        method: boolean;
      };
}

export interface ISellerRegisterPageProps {
  isEdit : boolean;
}