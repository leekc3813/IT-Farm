export interface IHeaderPageUIProps {
    visible : boolean;
    localLogin : boolean;
    usertype : string;
    onClickHome : () => void;
    onClickPurchase : () => void;
    onClickRegister : () => void;
    onClickLogout : () => void;
    onClickCenter : () => void;
}