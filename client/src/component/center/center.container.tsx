import CenterPageUI from "./center.presenter";
import { useEffect, useState } from "react";
import type { RadioChangeEvent } from 'antd';

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

    const [placement, setPlacement] = useState('전국')

    const [center, setCenter] = useState('')
    const [location , setlocation] = useState([
      { name: '정읍', latitude: 35.5631, longitude: 126.8512 },
      { name: '고창', latitude: 35.4354, longitude: 126.7108 },
      { name: '익산', latitude: 35.9457, longitude: 126.9547 },
      { name: '아산', latitude: 36.7920, longitude: 127.0026 },
      { name: '청주', latitude: 36.6418, longitude: 127.4855 }
    ])

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
    
          // 각 위치의 좌표와 정보
          var locations = location
    
          // 마커와 정보 윈도우(말풍선)를 생성하여 각 위치에 추가
          const markers = locations.map(location => {
            var markerPosition = new window.kakao.maps.LatLng(location.latitude, location.longitude)
            var marker = new window.kakao.maps.Marker({
              position: markerPosition,
              map: map
            })
    
            var infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="padding:5px">${location.name}</div>`
            })
    
            // 정보 윈도우 열고 닫기를 토글하기 위한 상태
            var isInfoWindowOpen = false
    
            // 마커를 클릭하면 정보 윈도우를 열거나 닫기
            window.kakao.maps.event.addListener(marker, 'click', function() {
              if (isInfoWindowOpen) {
                infowindow.close()
              } else {
                infowindow.open(map, marker)
                setCenter(location.name)
              }
              isInfoWindowOpen = !isInfoWindowOpen
            })
    
            return { marker, infowindow }
          })
        })
      }
    
      kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
    }, [placement])

    const placementChange = (e: RadioChangeEvent) => {
      setPlacement(e.target.value);
      if (e.target.value === '전국'){
        setCenterX(35.9078)
        setCenterY(127.7669)
        setPlacement('전국')
        setMapLevel(13)
      }else if( e.target.value === '정읍'){
        setCenterX(35.5631)
        setCenterY(126.8512)
        setPlacement('정읍')
        setMapLevel(9)
      }else if(e.target.value === '고창'){
        setCenterX(35.4354)
        setCenterY(126.7108)
        setPlacement('고창')
        setMapLevel(9)

      }else if(e.target.value === '익산'){
        setCenterX(35.9457)
        setCenterY(126.9547)
        setPlacement('익산')
        setMapLevel(9)

      }else if(e.target.value === '아산'){
        setCenterX(36.7920)
        setCenterY(127.0026)
        setPlacement('아산')
        setMapLevel(9)

      }else if(e.target.value === '청주'){
        setCenterX(36.6418)
        setCenterY(127.4855)
        setPlacement('청주')
        setMapLevel(9)
      }else {
        console.log('잘못된 주소')
      }
    };

    
    
    return (
        <CenterPageUI
          placement = {placement}
          placementChange = {placementChange}
         />
    )
}