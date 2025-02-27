# 간편한 투두 리스트, ☑️ReToDo

## 📆 개발기간

<br/>

2025년 2월 22일 ~ 2025년 2월 27일 (6일)

<br/>

## 💻 서비스 소개

<br/>

회원가입과 로그인을 통해 모바일과 데스크톱 어디서든 사용할 수 있는 간편한 투두 리스트 서비스입니다.

&nbsp;&nbsp;&nbsp;&nbsp;👉[ReTodo 구경하기](https://todo-8e0b2.web.app/authpage)👈
- 테스트 계정 이메일: test@login.com
- 테스트 계정 패스워드: test123

- 실행 방법: 배포된 [링크](https://todo-8e0b2.web.app/authpage)로 접속하거나 로컬 서버 구동
- git clone 후 npm install -> npm run dev 실행
<br/>

## ✨ 개발 환경 및 기술 스택

- React
- React-Router-Dom
- Recoil
- Styled-Components
- Firebase

  <br/>
## 📂 디렉토리 구조

<br />

```
📦src
 ┣ 📂assets : 에셋
 ┣ 📂components : 컴포넌트
 ┃ ┣ 📂LoginForm
 ┃ ┣ 📂LogoutButton
 ┃ ┣ 📂shared : 공용 컴포넌트
 ┃ ┃ ┣ 📂Navigation
 ┃ ┃ ┗ 📂ToggleSwitch
 ┃ ┣ 📂SignUpForm
 ┃ ┣ 📂TodoContainer
 ┃ ┣ 📂TodoForm
 ┃ ┗ 📂TodoList.jsx
 ┣ 📂firebase : Firebase 세팅
 ┣ 📂pages : 각 페이지
 ┣ 📂recoil : 전역 상태관리
 ┃ ┣ 📂atoms
 ┃ ┗ 📂selectors
 ┣ 📂router : 라우터 관리
 ┣ 📂styles : 전역, 페이지 스타일
 ┣ 📂utils : 유틸 함수
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```

 <br />
 
 ## 💡 주요 기능 소개
 

|회원가입|로그인|라이트-다크모드|
|----|----|----|
|<img src="https://github.com/user-attachments/assets/39270df7-c71f-41ab-9dff-b30d47bae8be" width="250" height="400">|<img src="https://github.com/user-attachments/assets/ba686aeb-9fb4-4808-b686-46b0818e0ede" width="250" height="400">|<img src="https://github.com/user-attachments/assets/f62e1e78-bcbd-4966-bf77-965216bd6bd0" width="250" height="400">|

- 서버에 등록된 이메일과 비밀번호로 로그인 시 ReToDo 페이지로 이동
- 이메일 또는 비밀번호를 잘못 입력한 경우 토스트 팝업으로 알림 출력
- 기본적으로 createdAt 내림차순에 따라 최신 데이터가 위에서 아래로 출력
- 즐겨찾기 등록 시 createdAt 내림차순에 따라 최신 데이터가 위에서 아래로 출력
- 즐겨찾기 해제 시 기존 createdAt 값에 따라 위치 변동
- 유효성 검사(Firebase 응답 값도 함께 사용)
  - 이메일 조건: @포함
  - 비밀번호 조건: 6자 이상
  - 회원가입 시 동일한 이메일 여부 검사
  - 빈칸 입력 검사
- 세션 스토리지에 토큰이 없는 상태에서 메인 페이지(투두 페이지)에 접근 시 Auth 페이지로 이동
- 로그아웃 시 세션 스토리지 토큰 제거, Auth 페이지로 이동
- 라이트-다크모드가 로컬 스토리지에 저장되어 재접속 시 유지 가능
----

|투두등록-즐겨찾기|투두-수정-삭제|검색-기능|
|----|----|----|
|<img src="https://github.com/user-attachments/assets/2c31bf2a-fc31-45c1-b8dd-46b6157b3a8c" width="250" height="400">|<img src="https://github.com/user-attachments/assets/e4f7ac8e-7c27-4963-b1b1-ce303c84de46" width="250" height="400">|<img src="https://github.com/user-attachments/assets/decab681-2e01-4df9-8e21-bbac393d7ea6" width="250" height="400">|

- 투두 작성 시 빈값 검사 후 토스트 팝업으로 알림
- 즐겨찾기 체크하여 투두 제출하면 서버에 반영
- 투두 수정, 삭제가 가능하며 별 모양 아이콘을 클릭 시 즐겨찾기 여부가 서버로 전송
- 투두 리스트에서 검색 가능
 
  
