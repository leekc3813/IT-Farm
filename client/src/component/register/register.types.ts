import { ChangeEvent } from "react"

export interface IRegisterPageUIProps {
    onClickSignUp: () => void;
    onChangeNickName : (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeEmail : (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword : (event: ChangeEvent<HTMLInputElement>) => void;
    onClickLoginState : () => void;
    onClickMoveHome : () => void;
    isLogin : boolean;
    nickName : string;
    email : string;
    password : string;
}