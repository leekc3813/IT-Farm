import { useRouter } from "next/router";
import { useState } from "react";
import { ChangeEvent } from "react"
import RegisterPageUI from "./register.presenter";
import axios from "axios"

export default function RegisterPage(): JSX.Element {
    const router = useRouter()

    const [nickName, setNickName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isLogin, setIsLogin] = useState(true) /* 로그인창 true, 회원가입창 false */

    const onChangeNickName = (event: ChangeEvent<HTMLInputElement>) => {
        setNickName(event.target.value)
    }

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onClickLoginState = () => {
        setIsLogin((prev) => !prev)
    }

    const onClickMoveHome = () => {
        router.push('/')
    }


    const submitLogin = () => {
        if (localStorage.getItem('userState') === 'buyer') {
            router.push('/purchase')
            return
        }

        if (localStorage.getItem('userState') === 'seller') {
            router.push('/seller')
            return
        }
    }

    return (
        <RegisterPageUI
            onChangeNickName={onChangeNickName}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onClickLoginState={onClickLoginState}
            onClickMoveHome={onClickMoveHome}
            submitLogin={submitLogin}
            isLogin={isLogin}
            nickName={nickName}
            email={email}
            password={password}
        />
    )
}