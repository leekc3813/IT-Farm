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

    const onClickSignUp = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/users/register/', {
                nickName,
                email,
                password,
            });
            console.log('실행')
            console.log(response)
            if (response.status === 201) {
                setIsLogin((prev) => !prev)
                setNickName('')
                setEmail('')
                setPassword('')
                alert('회원가입이 성공적으로 완료되었습니다.')
            }
        } catch (error) {
            console.log('Error', error)
        }
    }

    return (
        <RegisterPageUI
            onClickSignUp={onClickSignUp}
            onChangeNickName={onChangeNickName}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onClickLoginState={onClickLoginState}
            onClickMoveHome={onClickMoveHome}
            isLogin={isLogin}
            nickName={nickName}
            email={email}
            password={password}
        />
    )
}