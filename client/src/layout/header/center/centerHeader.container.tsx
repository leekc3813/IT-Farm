import { useEffect, useState, useRef, useMemo } from "react";
import throttle from "lodash/throttle";
import { useRecoilState } from "recoil";
import { loginState } from "@/src/store/states";
import HeaderCenterPageUI from "./centerHeader.presenter";

export default function CenterHeaderPage():JSX.Element{

    const [visible, setVisible] = useState(true);

    const beforeScrollY = useRef(0);

    const [localLogin, setLocalLogin] = useRecoilState(loginState)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const handleScroll = useMemo(
        () =>
          throttle(() => {
            const currentScrollY = window.scrollY;
            if (beforeScrollY.current < currentScrollY) {
              setVisible(false);
            } else {
              setVisible(true);
            }
            beforeScrollY.current = currentScrollY;
          }, 250),
        [beforeScrollY]
      );
    return(
        <HeaderCenterPageUI
            visible = {visible}
            localLogin = {localLogin}
         />
    )
}