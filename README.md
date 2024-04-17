# **(☞ ﾟヮﾟ)☞ REQUEST_PAGE☜(ﾟヮﾟ ☜)**

15팀 과제

# **༼ つ ◕*◕ ༽つ TEAM*총대장님과 아이들 | 과제**

## **👫 팀원**

- 조은총, 전수현, 최병현, 조용우
- 배포주소 : [https://wantedrequire.herokuapp.com/](https://wantedrequire.herokuapp.com/)
- 기술 스택

<p align="center">
<img alt="html" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
<img alt="css3" src = "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
<img alt="TypeScript" src = "https://img.shields.io/badge/TypeScript-%231572B6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" />
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
</p>

- 협업툴: Slack, Notion, Github

## **✔과제 구현 목록**

- 네비게이션바
    - 모바일 반응형 레이아웃
    - 햄버거 메뉴
    - 반응형 애니메이션
- 필터
    - 조건에 맞는 필터링
    - 필터링 리셋 이벤트
    - 상품명 및 상품코드
- 상품 카드
    - 견적 요청 카드
    - 카드 hover 애니메이션
    - 추가 옵션 상품 등록
    - 할인율 계산
    - 빈화면
- API 통신
- 토글과 카드 영역 연동 이벤트

## **📆개발 기간**

- 기간: 2022년 2월 7일 ~ 2022년 2월 9일 (3일간)

## **📃프로젝트 구조**

```
📦src
 ┣ 📂api
 ┃ ┣ 📜client.ts
 ┃ ┗ 📜getInforList.ts
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┗ 📜Button.tsx
 ┃ ┣ 📂nav
 ┃ ┃ ┣ 📜Nav.tsx
 ┃ ┃ ┗ 📜SideNav.tsx
 ┃ ┗ 📂setFilter
 ┃ ┃ ┣ 📜Filter.tsx
 ┃ ┃ ┣ 📜FilterLayout.tsx
 ┃ ┃ ┗ 📜Toggle.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useInfoListState.ts
 ┣ 📂modules
 ┃ ┣ 📂filter
 ┃ ┃ ┣ 📂reducers
 ┃ ┃ ┃ ┣ 📜material.ts
 ┃ ┃ ┃ ┣ 📜method.ts
 ┃ ┃ ┃ ┗ 📜toggle.ts
 ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┗ 📜types.ts
 ┃ ┗ 📜index.ts
 ┣ 📂pages
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📜CardBoard.tsx
 ┃ ┃ ┣ 📜InfoListForm.tsx
 ┃ ┃ ┣ 📜InfoListTemplate.tsx
 ┃ ┃ ┗ 📜MainPage.tsx
 ┃ ┗ 📜RequestBodyContainer.tsx
 ┣ 📂styles
 ┃ ┣ 📜global-style.ts
 ┃ ┣ 📜styled.d.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂types
 ┃ ┣ 📂components
 ┃ ┃ ┗ 📜infolist.ts
 ┃ ┣ 📂props
 ┃ ┃ ┗ 📜optionalProps.ts
 ┃ ┗ 📂styles
 ┃ ┃ ┣ 📂cardboard
 ┃ ┃ ┃ ┗ 📜ContainerType.ts
 ┃ ┃ ┣ 📂infoListForm
 ┃ ┃ ┃ ┗ 📜ContainerType.ts
 ┃ ┃ ┗ 📜ButtonType.ts
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┗ 📜Router.tsx
```

## **🔎구현 기능 및 개인 역할**

> **조용우 & 전수현:**
> 
> 네비게이션 바, 전체적인 레이아웃, 모바일 반응형 레이아웃과 사이드 슬라이드의 구조와 애니메이션 등을 같이 구현하였습니다. 제한된 컴포넌트들 안에서만 state를 주고 받았기 때문에 리덕스를 쓰는 대신 state를 따로 선언하여 컴포넌트 간의 소통이 일어나도록 구현하였습니다. 또 styled component에서도 프로퍼티를 받아 윈도우 크기에 따라 다른 스타일이 적용되도록 만들었습니다. 
> 

## **❗소감 및 후기**



**전수현:** 

타입스크립트를 사용해서 프로젝트를 한다는 것이 처음에는 어려웠지만, 프로젝트를 진행하면서 차차 감을 잡아가게 되었다. 스타일 값이 잘 적용이 안돼서 어려움을 겪었는데 다양한 css 스타일을 적용해봄으로써 css 작동 방식을 조금 더 제대로 이해할 수 있게 된 것 같다.

## **📕레퍼런스**

- 이 프로젝트는 [원티드 프론트엔드 프리온보딩](https://www.wanted.co.kr/events/pre_onboarding_course_6)으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
