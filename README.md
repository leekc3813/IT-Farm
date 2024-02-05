# 스마트팜 유통 플랫폼 IT-Farm(Front-end)

## 프로젝트 소개
스마트팜 유통 플랫폼 IT-Farm 프로젝트입니다.


소비자 part, 센터 part, 농가 part를 구현한 스마트팜 유통관리 시스템입니다.


데크스탑, 태블릿, 모방일의 삼중구조로 이루어진 반응형 웹사이트 입니다.


## 기능구현

### 유저
회원가입, 로그인 - cokkie와 session을 결합하여 보안성을 높인 로그인기능 구현

### 농장

- 농장등록: farms/create 새로운 농장을 등록합니다

- 농장 정보 불러오기: farms/read/ 현재 등록된 농장 정보를 불러옵니다

- 센터 승인: farm_product/update/ 농가에서 등록한 상품을 센터에서 승인합니다

- 센터 거부: farm_product/delete/<int:farm_product_id>/ 농가에서 등록한 상품을 센터에서 거부합니다

### 소비자 화면 상품

- 상품등록: product/create/ 센터에서 소비자에게 보여줄 상품을 등록합니다

- 상품조회: product/read/ 등록한 상품을 조회합니다

- 상품수정: product/update/ 등록한 상품정보를 수정합니다

- 상품삭제: product/delete/<int:product_id>/ 등록한 상품을 삭제합니다

### 찜목록

- 찜목록등록: cart/create/ 회원의 찜목록을 등록합니다

- 찜목록조회: cart/read/ 찜목록을 조회합니다

- 찜목록수정: cart/update/ 찜목록을 수정합니다

- 찜목록삭제: cart/delete/<int:cart_id>/ 찜목록을 삭제합니다

### 공지사항

- 공지사항등록: notice/create/ 공지사항을 관리자가 작성합니다
  
- 공지사항 불러오기: notice/read/ 공지사항을 불러옵니다
  
- 공지사항 수정: notice/update/ 작성된 공지사항을 수정합니다.

### 리뷰

- 리뷰 등록: order/review/create/ 리뷰를 등록합니다
  
- 리뷰 수정: order/review/update/ 리뷰를 수정합니다
  
- 리뷰 삭제: order/review/delete/<int:review_id>/ 해당회원의 리뷰를 삭제합니다

### 생산량 예측 모델

- 고추작물의 생산량을 예측합니다 output_model/pred/ 타겟: 면적(area), 평균 습도(%), 평균 기온(°C), 평균 지중온도(°C), 복사량 / 예측 작물 생산량

- 리뷰 감정분석 모델 review_model/pred/ 작성된 리뷰들의 감정분석을 합니다

