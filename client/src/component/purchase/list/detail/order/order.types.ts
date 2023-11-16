export interface IPurchaseOrderPageUIProps {
    onToggleModal : () => void;
    q1 : string;
    q3 : string;
    detailadress : string;
    isOpen : boolean;
    productTitle : string;
    mount : string;
    handleComplete : (data:any) => void;
    onChangeDetailadress : (name:string, value : string) => void;
    errorData: {
        q1: boolean;
        q3: boolean;
        detailadress: boolean;
      };
      onClickSubmit : () => void;
}