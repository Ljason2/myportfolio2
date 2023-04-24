

# MY PORTFOLIO 프로젝트

## :star:사이트 소개
    지금까지 제작했던 모든 포트폴리오를 소개하고, 각 포트폴리오 웹 사이트로 이동할 수 있는 웹서비스 개발. 
## :date:일정
    2022. 12. 26 ~ 2022. 12. 30

## :computer:디바이스
    PC, TABLET, MOBILE


## :lips:개발언어
- JavaScript, CSS3, HTML5, JQuery

<img src="https://jason-img.s3.amazonaws.com/mdoc/js.png" style="width:56px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/css.png" style="width:56px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/html5.png" style="width:56px">
<img src="https://jason-img.s3.amazonaws.com/mdoc/jquery2.jpg" style="width:56px">

## :earth_americas:개발환경
- VScode, npm, Node.js, AWS, Swiper

<img src="https://jason-img.s3.amazonaws.com/mdoc/vscode.png" style="width:90px"><img src="https://jason-img.s3.amazonaws.com/mdoc/npm2.png" style="width:60px; margin-left:3px;">
<img src="https://jason-img.s3.amazonaws.com/mdoc/nodejs.png" style="width:91px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/aws.png" style="width:90px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/Swiper.png" style="width:100px">



## :link:배포링크

- 배포방식은 AWS: S3의 배포방식을 이용하였습니다.
- [바로가기](https://jason-response-1230.s3.ap-northeast-2.amazonaws.com/response.html)


## :clipboard:프로젝트 설명


 #### 반응형 사이트 개발

1. 가변그리드와 미디어쿼리를 사용하여 웹, 태블릿, 모바일에서 작동할 수 있는 반응형 홈페이지 개발.
    
        가변그리드는 %와 vw, vh를 이용하였고, 미디어 쿼리는 전반적인 반응형과
        특정 부분에서 발생하는 비율 문제를 해결하였다.


#### 모달창 나오는 기능 개발

1. 생성자 함수로 객체를 만들고, 프로토타입 매서드를 통해 객체를 수정하여 모달창이 나오는 기능을 개발.

        forEach 매서드를 사용하여 Figure를 한개 한개 클릭할 때마다 모달창이 나오게 하였고,
        객체를 수정하는 함수가 실행되게 하였다.

        
#### 포트폴리오 Sort 기능 개발

1.  JQuery 를 사용하여 각 기술명을 클릭하면 해당 기술로 만든 포트폴리오가 나오는 기능을 개발.

        Figure의 display를 none 시키거나 block 시켜서 나타남과 사라짐을 구현하였다. 


#### Swiper 사용

1.  Swiper를 사용하여 배너가 움직이는 슬라이드 기능을 개발.
    
        CDN 방식으로 Swiper를 연결해서 요소에 class를 넣어주고, CSS를 수정한 뒤, 
        스크립트에서 사용할 태그를 지정해주었다.


#### 클릭 슬라이드 기능 개발

1. JQuery 를 사용하여 태블릿, 모바일 화면에서 왼쪽, 오른쪽 화살표를 클릭하면 포트폴리오가 지나가는 기능을 개발.

         포트폴리오들을 감싸고 있는 전체 테두리를 animate 매서드를 사용해서 화살표를
         클릭하면 포트폴리오의 넓이만큼 margin-left 되게 하였다.
        


#### 메뉴 바로가기 기능 개발

1. JQuery 를 사용하여 Header 의 Nav 메뉴를 클릭하면 그에 해당하는 부분으로 스크롤이 움직이는 기능을 개발.

        attr 속성을 사용하여 속성에 있는 값을 가져와서 해당 위치만큼 animate 되게 하였다. 
        
2. JQuery 를 사용하여 우측 검정색 버튼을 클릭하면 그에 해당하는 메뉴로 스크롤이 움직이는 기능을 개발.

        attr 속성을 사용하여 속성에 있는 값을 가져와서 해당 위치만큼 animate 되게 하였다.

#### MENU 클릭 시 Nav가 나오는 기능 및 메뉴 바로가기 기능 개발

1. JQuery를 사용하여 태블릿, 모바일 화면에서 Header의 MENU 를 클릭하면 Nav가 나오는 기능 개발.

        JQuery를 사용하여 태블릿, 모바일 화면에서 평상시에는 Nav가 보이지 않게 하다가, 
        MENU 버튼을 클릭하면 Nav의 left 값을 0으로 만들어서 Nav가 나오게끔 하였다.
        
        
        
## :pencil2:피드백

### 느낀점




- Swiper를 사용하여 슬라이드 기능을 개발하면서 기존 작성한 코드에 class를 넣고, CSS를 수정한 뒤에 스크립트에서 슬라이드로 사용할 태그만 지정해주면 돼서 매우 간편하였다.
    

- JQuery로 다양한 기능을 개발하면서 그에 대한 이해도와 숙련도가 많이 올라갔고, GitHub의 branch와 commit에 코드를 올리는 과정을 통해 GitHub 사용법에 익숙해졌다는 것을 느꼈다.

