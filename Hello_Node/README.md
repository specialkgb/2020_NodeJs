# Hello Node Project
## Nodejs 를 사용하여 Web Application Server를 생성하기
1. workspace / nodejs 폴더 생성
2. nodejs 폴더에서 express 프레임워크를 사용하여 프로젝트 생성
    - express Hello_Node
3. cs Hello_Node : 프로젝트 폴더로 이동
4.  npm install : dependency download
    - package.json 파일에 설정된 dependency들을 download 하여 node_modules 폴더에 저장
5. 프로젝트 시작
    가. npm start : 기본시작하기
    나. nodemon : 개발환경에서 파일이 변경(수정)하면 자동으로 서버를 재시작해주는 tool을 사용하기


## nodejs의 view 설정
1. nodejs 의 탄생시점에서는 jade 라는 view 를 사용했다
2. 2.x로 버전업이 되면서 이름이 pug로 변경되었다.
3. npm install pug : view 단의 도구 설치
4. views 폴더의 파일들 *.pug로 이름변경
5. app.js 파일에서 jade를 pug로 변경