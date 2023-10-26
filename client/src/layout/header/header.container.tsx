import { useEffect, useState, useRef, useMemo } from "react";
import throttle from "lodash/throttle";
import HeaderPageUI from "./header.presenter";

export default function HeaderPage():JSX.Element {
    /* 내렸을때 true 올릴때 false */
    const [visible, setVisible] = useState(true);

    const beforeScrollY = useRef(0);

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
        <HeaderPageUI
            visible = {visible}
         />
    )
}