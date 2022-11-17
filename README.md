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

**Frontend**

- React
- openVidu browser
- HTML
- JavaScript
- CSS

**CI/CD**

- AWS EC2
- NGINX
- SSL
- Docker
- Jenkins
- openVidu KMS

---

## ✔ 프로젝트 파일 구조

---

### Frontend

```
frontend
├─public
└─src
    ├─app
    ├─assets
    │  ├─fonts
    │  └─images
    ├─common
    │  ├─api
    │  ├─modal
    │  └─navbar
    └─features
        ├─custom
        │  └─page
        ├─game
        ├─gossip
        │  └─page
        ├─help
        │  └─page
        ├─home
        │  └─page
        ├─mypage
        │  └─page
        ├─notfound
        ├─rank
        │  └─page
        ├─statistic
        │  └─page
        ├─user
        │  └─page
        └─userrank
            └─page

```

### Backend

```
backend
├─.gitlab
│  └─merge_request_templates
├─.gradle
│  ├─6.7
│  │  ├─fileChanges
│  │  ├─fileHashes
│  │  └─vcsMetadata-1
│  ├─buildOutputCleanup
│  ├─checksums
│  ├─configuration-cache
│  └─vcs-1
├─.settings
├─bin
│  └─main
│      ├─com
│      │  └─ssafy
│      │      ├─api
│      │      │  ├─controller
│      │      │  ├─request
│      │      │  ├─response
│      │      │  └─service
│      │      ├─common
│      │      │  ├─auth
│      │      │  ├─exception
│      │      │  │  └─handler
│      │      │  ├─model
│      │      │  │  └─response
│      │      │  └─util
│      │      ├─config
│      │      ├─db
│      │      │  ├─entity
│      │      │  ├─qentity
│      │      │  └─repository
│      │      └─infos
│      └─dist
│          ├─css
│          ├─fonts
│          ├─img
│          └─js
├─gradle
│  └─wrapper
└─src
    └─main
        ├─java
        │  └─com
        │      └─ssafy
        │          ├─api
        │          │  ├─controller
        │          │  ├─request
        │          │  ├─response
        │          │  └─service
        │          ├─common
        │          │  ├─auth
        │          │  ├─exception
        │          │  │  └─handler
        │          │  ├─model
        │          │  │  └─response
        │          │  └─util
        │          ├─config
        │          ├─db
        │          │  ├─entity
        │          │  ├─qentity
        │          │  └─repository
        │          └─infos
        └─resources
            └─dist
                ├─css
                ├─fonts
                ├─img
                └─js
```

## ✔ 협업 툴

---

- [Gitlab](https://lab.ssafy.com/s07-webmobile1-sub2/S07P12E103)
- [Notion](https://www.notion.so/Semononda-26223a897b784d8d88ec1e02a79df4b2)
- [JIRA](https://jira.ssafy.com/secure/RapidBoard.jspa?rapidView=12719&projectKey=S07P12E103&view=planning.nodetail&issueLimit=100)
- [Figma](https://www.figma.com/file/RXpNubjb9F9pGdmKwbLVOk/%EC%84%B8%EB%AA%A8%EB%85%BC%EB%8B%A4?node-id=0%3A1)
- [MatterMost](https://meeting.ssafy.com/s07p11e1/channels/333)
- [Webex](https://ssafyclass.webex.com/meet/kjmk1007)

## ✔ 협업 환경

---

- 요구사항 명세서/IA 구성도/API 명세서
  - [구글 드라이브](https://docs.google.com/spreadsheets/d/1Szz6Hn31rGLiAI0DS68rMQKO8MfN0WhXfXgDKB41ufs/edit#gid=0)에서 기획 내용을 공유 및 수정
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
| Profile  |      |              |        |                   | ![김유정](https://user-images.githubusercontent.com/51036842/185786075-586f3cae-09af-4332-bc42-b168a92ecf27.png)                      | ![박찬호](https://user-images.githubusercontent.com/51036842/185786083-433277e3-8b93-446b-a73a-f26ac7225e60.png)                  |
| Position | Frontend & UI/UX | 팀장 & Frontend & UI/UX | Frontend & UI/UX | Backend Develop & CI/CD | Backend Develop & CI/CD | Backend Develop & CI/CD |
|   Git    |            |                   |            |                         | [yujeonge](https://github.com/yujeonge)                          | [taurus429](https://github.com/taurus429)                             |

## ✔ 설계 산출물

---

- [설계 문서]()
  - 요구사항 정의서
  - API 명세서

- 플로우 차트
- 사이트 맵
- ERD

## ✔ 프로젝트 결과물
---

## 👔 발표 자료
---
- [중간발표자료](https://docs.google.com/presentation/d/18G2of-JtpQr43J7P27Zm4BOHEdkHVKwkz7IGMF9BrzA/edit#slide=id.g967d9b3c40_0_855)
- [최종발표자료]()
---

## 🎵 서비스 화면

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
