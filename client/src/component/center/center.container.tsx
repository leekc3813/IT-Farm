import CenterPageUI from "./center.presenter";
import { useEffect, useState } from "react";

declare global {
    interface Window {
      kakao: any;
    }
  }

export default function CenterPage():JSX.Element{
    /* 초기 화면크기 (대한민국 남한크기) */
    const [mapLevel, setMapLevel] = useState(13)

    /* 초기 화면좌표 (대한민국 중앙) */
    const [mapCenterX, setCenterX] = useState(35.9078)
    const [mapCenterY, setCenterY] = useState(127.7669)

    useEffect(() => {
        const kakaoMapScript = document.createElement('script')
        kakaoMapScript.async = true
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=e2d0f62bb57fb90b0596f6376a3fa842&autoload=false`
        document.head.appendChild(kakaoMapScript)
      
        const onLoadKakaoAPI = () => {
            window.kakao.maps.load(() => {
              var container = document.getElementById('map')
              var options = {
                center: new window.kakao.maps.LatLng(mapCenterX, mapCenterY), // 대한민국 중심 지점 좌표
                level: mapLevel, // 확대 수준을 조정하여 대한민국 전체를 보이도록 설정
              }
              var map = new window.kakao.maps.Map(container, options)
            })
          }

          kakaoMapScript.addEventListener('load', onLoadKakaoAPI)

      }, [])

    return (
        <CenterPageUI
         />
    )
}