# D-Station

## 링크 : [D-Station 홈페이지](http://k7e106.p.ssafy.io/)

## 소개 영상 : [소개 영상 링크]()
</br>

## 🖥 프로젝트 진행 기간

2022.10.11(화) ~ 2022.11.18(금)
SSAFY 7기 2학기 자율 프로젝트 - D-Station

</br>

## 🚀 D-Station - 배경

개발자의 시대, 개발자 수요가 늘어감에 따라 많은 사람들이 개발 공부에 도전하고 있습니다.

하지만 코딩을 처음 접하는 사람에겐 어떤 것부터 시작해야되는지, 인터넷에서 시키는대로 공부했는데 다음엔 또 뭘 배워야하는지 막막한 심정일 겁니다.

그런 분들을 위해 준비했습니다. 

**개발 공부 로드맵 서비스, D-Station 입니다!**

</br>

## 🔎 D-Station - 개요

_- 로드맵 및 학습 관리 서비스 -_




## ✔ 주요 기술

---

**Backend**

- Springboot
- Spring Data JPA
- Spring Security
- Spring Validation
- Spring Web
- Query DSL
- Swagger
- Gradle
- MySQL
- Oauth

**Frontend**

- React
- HTML
- JavaScript
- CSS

**CI/CD**

- AWS EC2
- NGINX
- SSL
- Docker
- Jenkins

---

## ✔ 프로젝트 파일 구조

---

### Frontend

```
frontend
├─public
│  ├─assets
│  │  └─images
│  │      ├─Canyon
│  │      ├─Earth
│  │      ├─frontend
│  │      ├─Pebbles
│  │      ├─tiles
│  │      └─WoodCeiling
│  └─glb
└─src
    ├─api
    ├─assets
    │  ├─fonts
    │  └─images
    ├─components
    │  ├─auth
    │  ├─board
    │  ├─dots
    │  ├─loader
    │  ├─main
    │  ├─mission
    │  ├─modal
    │  ├─navbar
    │  ├─profile
    │  ├─roadmap
    │  │  ├─HTMLsection
    │  │  └─Threesection
    │  │      ├─Base
    │  │      ├─Mission
    │  │      ├─Planet
    │  │      └─Satellite
    │  │          ├─GlobalPlanet
    │  │          └─PythonPlanet
    │  ├─scene
    │  ├─survey
    │  └─til
    ├─pages
    │  ├─auth
    │  ├─board
    │  ├─loader
    │  ├─main
    │  ├─notFound
    │  ├─profile
    │  ├─roadmap
    │  └─til
    ├─recoil
    ├─service
    ├─state
    └─styles

```

### Backend

```
backend
    ├─.gradle
    │  ├─6.7
    │  │  ├─executionHistory
    │  │  ├─fileChanges
    │  │  ├─fileHashes
    │  │  └─vcsMetadata-1
    │  ├─buildOutputCleanup
    │  ├─checksums
    │  ├─configuration-cache
    │  └─vcs-1
    ├─.settings
    ├─bin
    │  ├─default
    │  ├─main
    │  │  └─com
    │  │      └─ssafy
    │  │          ├─api
    │  │          │  ├─controller
    │  │          │  ├─request
    │  │          │  │  ├─jisickin
    │  │          │  │  ├─MBTI
    │  │          │  │  ├─quiz
    │  │          │  │  ├─reply
    │  │          │  │  ├─til
    │  │          │  │  └─user
    │  │          │  ├─response
    │  │          │  │  ├─cs
    │  │          │  │  ├─galaxy
    │  │          │  │  ├─grading
    │  │          │  │  ├─jisickin
    │  │          │  │  ├─mbti
    │  │          │  │  ├─mission
    │  │          │  │  ├─planet
    │  │          │  │  ├─profile
    │  │          │  │  ├─quiz
    │  │          │  │  ├─ReferenceData
    │  │          │  │  ├─reply
    │  │          │  │  ├─satellite
    │  │          │  │  ├─til
    │  │          │  │  └─user
    │  │          │  └─service
    │  │          ├─common
    │  │          │  ├─auth
    │  │          │  ├─exception
    │  │          │  │  └─handler
    │  │          │  ├─model
    │  │          │  │  └─response
    │  │          │  └─util
    │  │          ├─config
    │  │          └─db
    │  │              ├─entity
    │  │              ├─qentity
    │  │              └─repository
    │  └─querydsl
    │      └─com
    │          └─ssafy
    │              └─db
    │                  └─entity
    ├─gradle
    │  └─wrapper
    ├─json
    │  └─testDir
    └─src
        └─main
            ├─generated
            │  └─com
            │      └─ssafy
            │          └─db
            │              └─entity
            ├─java
            │  └─com
            │      └─ssafy
            │          ├─api
            │          │  ├─controller
            │          │  ├─request
            │          │  │  ├─jisickin
            │          │  │  ├─MBTI
            │          │  │  ├─quiz
            │          │  │  ├─reply
            │          │  │  ├─til
            │          │  │  └─user
            │          │  ├─response
            │          │  │  ├─cs
            │          │  │  ├─galaxy
            │          │  │  ├─grading
            │          │  │  ├─jisickin
            │          │  │  ├─mbti
            │          │  │  ├─mission
            │          │  │  ├─planet
            │          │  │  ├─profile
            │          │  │  ├─quiz
            │          │  │  ├─ReferenceData
            │          │  │  ├─reply
            │          │  │  ├─satellite
            │          │  │  ├─til
            │          │  │  └─user
            │          │  └─service
            │          ├─common
            │          │  ├─auth
            │          │  ├─exception
            │          │  │  └─handler
            │          │  ├─model
            │          │  │  └─response
            │          │  └─util
            │          ├─config
            │          └─db
            │              ├─entity
            │              ├─qentity
            │              └─repository
            └─resources
```

## ✔ 협업 툴

---

- [Gitlab](https://lab.ssafy.com/s07-final/S07P31E106)
- [Notion](https://diligent-cent-c07.notion.site/E106-3bb4be8141f541e1aeb45222fa79e04e)
- [JIRA](https://ssafy.atlassian.net/jira/software/c/projects/S07P31E106/boards/133/roadmap)
- [Figma](https://www.figma.com/file/ll0gCzfnEzjV78gekLmVid/Untitled?node-id=18%3A2)
- [MatterMost](https://meeting.ssafy.com/s07p30e1/channels/e106)
- [Webex](https://ssafyclass.webex.com/wbxmjs/joinservice/sites/ssafyclass/meeting/download/4cfcc806017e4553b1bed28def8fc288)

## ✔ 협업 환경

---

- 요구사항 명세서/API 명세서
  - [구글 드라이브](https://docs.google.com/spreadsheets/d/1AY91HPQE2U5A4moqEUbk0ArZB9k_AmO43n0VHn3FC4Q/edit#gid=538209592)에서 기획 내용을 공유 및 수정
- Gitlab
  - 코드 버전 관리
  - MR 템플릿 사용
  - 기능별 branch 생성, 개발.
  - 커밋 컨밴션 Udacity convention 사용
- JIRA
  - 개발 기획에 따라 에픽, 이슈 생성
  - 매주 첫 워킹데이에 개인 목표량을 설정하여 Sprint 진행
  - 업무의 우선순위를 설정하고, 할당량을 정하여 Story Point를 설정한 뒤 In-Progress -> Done 순으로 작업
  - 소멸 차트를 통해 스프린트 진척도 확인
- 회의
  - 매일 아침 스크럼 진행, 진행 중인 내용 및 이슈 공유
  - 프론트엔드 <-> 백엔드 요구사항 소통
  - 팀원 칭찬 타임
  - 매일 오후 스크럼 진행, 오늘 진행한 내용 공유
- Notion
  - 회의록/피드백/스크럼/상담내용 등 저장
  - 개발 참고 자료 업로드, 필요 개념 공유
  - 개발 도중 발생한 이슈 저장
  - 컨벤션 정리
  - 각종 명세서 등 모두가 공유해야 하는 문서 관리
- Figma
  - 목업 제작, 와이어프레임제작, 디자인 작업 공유

## ✔ 팀원 역할 분배

---

|   Name   | 김가흔           | 정민지                  | 이동근           | 김대영                        | 김유정                          | 박찬호                             |
| :------: | ---------------- | ----------------------- | ---------------- | ----------------------------- | ------------------------------- | ---------------------------------- |
| Profile  |  ![김가흔](https://user-images.githubusercontent.com/98456240/203209752-16a39ef9-2984-4fbf-b99a-7b06d66454aa.png)   | ![정민지](https://user-images.githubusercontent.com/98456240/203209768-acfe46ba-6991-48a8-83ce-489fced6138c.png) |  ![이동근](https://user-images.githubusercontent.com/98456240/203209764-27215605-d3e2-4232-ba13-b38b24c931a2.png)   |   ![김대영](https://user-images.githubusercontent.com/98456240/203209754-7e149081-ba3d-471c-8cd3-eb4cdb9b0fb2.png) | ![김유정](https://user-images.githubusercontent.com/51036842/185786075-586f3cae-09af-4332-bc42-b168a92ecf27.png) | ![박찬호](https://user-images.githubusercontent.com/51036842/185786083-433277e3-8b93-446b-a73a-f26ac7225e60.png)                  |
| Position | Frontend & UI/UX | 팀장 & Frontend & UI/UX | Frontend & UI/UX | Backend Develop & CI/CD | Backend Develop & CI/CD | Backend Develop & CI/CD |
|   Git    |    [gheun0712](https://github.com/gheun0712)   |    [minzzz1st7](https://github.com/minzzz1st7) |    [move-geun](https://github.com/move-geun)        |   [gresbin](https://github.com/gresbin)  | [yujeonge](https://github.com/yujeonge)                          | [taurus429](https://github.com/taurus429)                             |

## ✔ 설계 산출물

---

- [설계 문서](https://docs.google.com/spreadsheets/d/1AY91HPQE2U5A4moqEUbk0ArZB9k_AmO43n0VHn3FC4Q/edit#gid=538209592)
  - 요구사항 정의서
  - API 명세서
- [ERD](https://www.erdcloud.com/d/AnyvDMRshSL5Ac3DX)

## ✔ 프로젝트 결과물
---

## 👔 발표 자료
---
- [중간발표자료](https://docs.google.com/presentation/d/18G2of-JtpQr43J7P27Zm4BOHEdkHVKwkz7IGMF9BrzA/edit#slide=id.g967d9b3c40_0_855)
- [최종발표자료]()
---

## 🎵 서비스 화면

### 1. 메인 화면
___
![메인로드맵접속](https://user-images.githubusercontent.com/98456240/203209761-e331c606-ebf4-4454-87b0-5f431849715e.gif)


  - #### 은하
    - three.js로 은하 표시

  - #### 네비게이션
    - 추천 과정
    - 검색

  - #### 행성리스트
    - 은하 선택 후 행성리스트 표시

  - #### 로딩
    - 로딩 중 CS지식 표시


### 2. 로드맵
___
![로드맵](https://user-images.githubusercontent.com/98456240/203209757-c3888743-9df2-487c-a7f0-661203aad014.gif)

  - #### 행성
    - 행성 정보와 위성 리스트 표시

  - #### 위성
    - 위성 정보와 미션 리스트 표시

  - #### 미션
![퀴즈](https://user-images.githubusercontent.com/98456240/203209773-751884a3-6412-4d24-a9bf-79a05857bcc8.gif)
    - 미션 정보 표시
    - TIL 작성 가능
    - 퀴즈 풀기 or 코드 풀기 가능

### 3. 질문하기
___
![질문게시판](https://user-images.githubusercontent.com/98456240/203209771-d3af7f11-0dac-4e62-a4c8-fc8d6b8ebd59.gif)


  - #### 질문 목록
    - 질문 목록 확인

  - #### 검색
    - 게시글의 제목 및 내용에 있는 키워드로 검색

  - #### 질문하기
    - 태그별로 선택 후, 질문글을 작성
    - 코드 작성 가능

  - #### 댓글
    - 코드 작성 가능
    - 댓글 작성 

### 4. 마이페이지
___
![mbti](https://user-images.githubusercontent.com/98456240/203209743-f54cd873-5b32-4b42-af50-9cbd80c72819.gif)


- #### MBTI별 개발자 직종 추천받기
  - 12개의 질문을 통해 사용자의 mbti 개발자 직종 추천

- #### 레벨업 게이지
  - TIL작성, 코드 및 퀴즈를 맞히면 게이지 상승

- #### 개발 업적 확인
  - 미션 완료 행성 표시

- #### 진행 중인 행성
  - 진행 중인 행성 표시

- #### til 잔디심기
  - til 작성된 날짜에 잔디 표시

---


# 포팅 메뉴얼


## 사용 기술 스택


front-end : NodeJS, React

back-end: Java, Spring boot, JPA, gradle, Docker, NginX, Jenkins

|기술 스택|버전|
|--|--|
NodeJS|19.0.0|
React|18.2.0|
OpenJDK|1.8.0_192|
Spring boot|2.4.5|
QueryDSL|4.4.0|
Docker|20.10.17|
NginX|1.18.0|
Jenkins|2.346|
Gradle|6.9|

#

## Frontend 배포

### 로컬 실행 방법

```
git clone https://lab.ssafy.com/s07-final/S07P31E106.git
cd frontend
npm i
npm start
```

### Dockerfile 을 사용한 빌드 및 배포

Dockerfile을 작성하여 Nginx와 react를 함께 배포합니다.
프로젝트내의 frontend 디렉토리의 루트 경로에서 다음 명령어를 실행합니다.


S07P31E106/frontend/nginx.conf
```conf
server {
    listen 80;
    location / {
        root    /app/build;
        index   index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

-  nginx 경로를 설정할 nginx.conf 파일을 추가합니다

S07P31E106/frontend/Dockerfile
```Dockerfile
# Dockerfile

# nginx 이미지를 사용합니다. 뒤에 tag가 없으면 latest 를 사용합니다.
FROM nginx

# root 에 app 폴더를 생성
RUN mkdir /app

# work dir 고정
WORKDIR /app

# work dir 에 build 폴더 생성 /app/build
RUN mkdir ./build

# host pc의 현재경로의 build 폴더를 workdir 의 build 폴더로 복사
ADD ./build ./build

# nginx 의 default.conf 를 삭제
RUN rm /etc/nginx/conf.d/default.conf

# host pc 의 nginx.conf 를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d

# 80 포트 오픈
EXPOSE 80
# https 사용을 위한 443 포트 오픈 
EXPOSE 443
# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]
```

그 다음 도커파일을 작성합니다 nginx.conf 에 적혀있는 것을 컨테이너내 설정으로 변경합니다.

이후 다음 명령어를 차례로 입력하여 module을 설치, 빌드, 도커 이미지를 만들고 컨테이너에서 배포합니다.

```
# module 설치
npm update

# 빌드 파일 생성
CI=false npm run build

# 도커 이미지 빌드
docker build -t front:0.1 .

# 도커 컨테이너를 이용한 프론트엔드 배포
docker run --name front -d -p 3000:80 front:0.1
```
# 

## backend 배포

### 로컬에서 실행 방법

build 결과물 얻기

```
git clone https://lab.ssafy.com/s07-final/S07P31E106.git
cd backend
```

S07P31E106/backend 에서
```
gradle clean build
```

그러면 .jar 파일이 S07P31E106/backend/build/libs 위치에 생성됩니다.
```
java -jar [jar파일명] 
```
을 실행하면 자바 백엔드 서버가 열립니다.

---

### Dockerfile을 사용한 배포( 추후 자동 배포를 위한 과정)
Dockerfile을 backend 폴더에서 작성합니다.

S07P31E106/backend의 Dockerfile
```Docker
FROM openjdk:8
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE=build/libs/ssafy-web-project-1.0-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Seoul
RUN apt-get install -y tzdata
```


S07P31E106/backend
```
docker build -t back:0.1 .
docker run --name back -p 8081:8080 back:0.1 
```

다음을 실행하면 배포가 완료됩니다.
