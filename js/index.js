

import $ from 'jquery'
 
$(function(){

let windowW=$(window).width()
// 웹


if(1545<=windowW){
    nav()
    submenu()
    a()
}
// 웹에서 태블릿으로 가는 과정
else if(980 <= windowW && windowW <1544){
    nav()
    submenu()
    a()
}

// 태블릿
// box04 문제 때문에 979가 아니라 973으로 수정함
else if(580 <=windowW && windowW<973){
    tNav()
    gallery()
    a()
}

// 모바일
else if(windowW<=579){
    tNav()
    gallery()
    a()
}

// 공통
// reset : 포트폴리오

$(window).on('resize',function(e){
window.location.reload();
})


//
})

//  web nav
function nav(){

$('nav li>a').on('click',function(e){
    const navA=$(this).attr('href');
    const aPos= $(navA).offset().top ;
    const headerHeight =$('header').innerHeight();
    $('html,body').animate({scrollTop:aPos - headerHeight},800);
    return false;
})
}
// table,mobil nav
function tNav(){

    let navW=$('nav').width()

        // .btn click
    $('header .btn').on('click',function(e){
        $('nav').animate({left:0},500)
        $(this).hide()

    })



    // scroll

    $('nav li>a').on('click',function(e){
        const navA=$(this).attr('href');
        const aPos= $(navA).offset().top ;
        const headerHeight =$('header').innerHeight();
        $('html,body').animate({scrollTop:aPos - headerHeight},800);
        $('nav').css('left','-'+navW+'px')
        $('header .btn').show();
        return false;
    })


    // close

    $('nav .close').on('click',function(e){
        $('nav').css('left','-'+navW+'px')
        $('header .btn').show();
    })
}


function submenu(){
// html 연결
//jquery 
$('aside li>a').on('click',function(e){
const asideA=$(this).attr('href');
const asidePos=$(asideA).offset().top;
const headerHeight=$('header').innerHeight();
$('html,body').animate({scrollTop:asidePos- headerHeight},800);
return false;
})
}



function gallery(){

// 준비하기
const figureW=$('#box04 #all figure').width();
$('#all figure:last').prependTo('#all')
$('#all').css('margin-left','-'+figureW+'px')


// 이벤트
$('#gallery .prev').on('click',function(e){
    $('#all').animate({marginLeft:'-='+figureW+'px'},400,function(){
        $('#all figure:first').appendTo('#all')
        $('#all').css('margin-left','-'+figureW+'px')    
    })
    })
    
    $('#gallery .next').on('click',function(e){
    $('#all').animate({marginLeft:'+='+figureW+'px'},400,function(){
        $('#all>figure:last').prependTo('#all')
        $('#all').css('margin-left','-'+figureW+'px')
    })
    })
}






//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// modal 클릭하면 화면 나오게 하기.

const h4=document.querySelector('#modal h4');
const img=document.querySelector('#modal figure>img');
const day=document.querySelector('#modal dl .year');
const pro=document.querySelector('#modal dl .program');
const url=document.querySelector('#modal dl .link>a');
const content=document.querySelector('#modal dl .text');
const fig=document.querySelector('#modal figcaption')

const open=document.querySelectorAll('#all>figure')
// console.log(open)
const close=document.querySelector('#modal>.close')
// console.log(close)
const modal=document.querySelector('#modal')



// 객체를 생성자 함수로 만들 것
function Modal(title,pic,year,program,href,text,fig){
    this.title=title;
    this.pic=pic;
    this.year=year;
    this.program=program;
    this.href=href;
    this.text=text;
    this.fig=fig;
}






// 매서드

// 객체안에 있는 정보를 수정하는 행위
Modal.prototype.action=function(){
h4.innerHTML=this.title;
img.setAttribute('src',this.pic);
day.innerHTML=this.year;
pro.innerHTML=this.program;
url.setAttribute('href',this.href);
url.innerHTML=this.href;
content.innerHTML=this.text;
fig.innerHTML=this.fig;
}



// 인스턴스
let myModal=[
new Modal('MUSINSA','./images/sassbootstrap2.PNG','2023','html, css, javascript, jquery, sass, bootstrap','https://jason-sassbootstrapsample4-23-01-10.s3.amazonaws.com/musinsa.html','무신사는 남성옷과 여성옷을 판매하고 있는 온라인 패션 플랫폼으로서 신제품과 할인행사를 통해 고객님들의 니즈를 충족합니다. ','옷 쇼핑몰'),
new Modal('미니게임','./images/battlegame2.PNG','2023','html, css, react','https://jason-react-battlegame2-23-01-20.s3.amazonaws.com/index.html','A팀 B팀으로 나누어 5판 게임을 진행해서 총합이 큰 사람이 이기는 미니게임 사이트 입니다.','게임 사이트'),
new Modal('여행예약','./images/travelreservation2.png','2023','html, css, react','https://jason-react-travel-resevation2-23-02-02.s3.amazonaws.com/index.html','국내 여행으로 서울, 경기도, 경상도, 제주도 추천 여행지를 소개해주고, 여행 티켓을 예약할 수있는 사이트입니다. ','예약 사이트'),
new Modal('전자마왕','./images/electronicproducts2.PNG','2023','html, css, javascript, jquery, react','https://jason-electronic-products-02-14.s3.amazonaws.com/index.html','다양한 가전제품들을 판매하고 가전렌탈 예약서비스를 통해 고객님들께 합리적인 가격으로 편안한 삶의 질을 보장합니다.','가전제품 쇼핑몰'),
new Modal('MdoC','./images/mdoc2.PNG','2023','html, css, javascript, jquery, react','https://jason-mdoc-03-04.s3.amazonaws.com/index.html','남성 화장품 전문 브랜드는 엠도씨(MdoC)는 남성들의 라이프 스타일에 맞춰 개발된 스킨케어와 미용성분을 가진 화장품을 제공하고 남성들의 피부고민과 다양한 이벤트를 통해 남성 그루밍에 앞장서고 있습니다.','남성화장품 쇼핑몰'),
new Modal('NEXT.JS','./images/design6.png','2023','html, css','http://aaa6.com','내용6','next.js')
]






// event->작업 ->click(figure,figure>img,#modal>.close)


// 여러개를 클릭해야되니까 forEach를 써야함.
open.forEach(function(item,index){
item.onclick=function(){
    modal.style.display='block'
    myModal[index].action();
}
})


// 한개만 클릭해도 되니까 forEach 안씀.
close.onclick=function(){
    modal.style.display='none';
}



/////////////////////////box04 ul hover하면 border 나오게하기///////////////////////////



function a(){



// 의미 없는 코드
// $('.html>a').hover(function(){
//     $('#all .article1').css('border','1px solid black')
//     $('#all .article2').css('border','1px solid black')
//     $('#all .article3').css('border','1px solid black')
//     console.log('hi')
// },function(){
//     $('#all>figure').css('border','none')
// }

// )

// $('.javascript>a').hover(function(){
//     $('#all .article4').css('border','1px solid black')

// },function(){
//     $('#all>figure').css('border','none')

// })


// $('.jquery>a').hover(function(){
//     $('#all .article5').css('border','1px solid black')

// },function(){
//     $('#all>figure').css('border','none')

// })


// $('.react>a').hover(function(){
//     $('#all .article6').css('border','1px solid black')

// },function(){
//     $('#all>figure').css('border','none')

// })



$(document).on("click",".all",function(){
    $('#all .article1').css('display','block')
    $('#all .article2').css('display','block')
    $('#all .article3').css('display','block')
    $('#all .article4').css('display','block')
    $('#all .article5').css('display','block')
    $('#all .article6').css('display','block')
})



$(document).on("click",".jquery",function(){
    $('#all .article1').css('display','block')
    $('#all .article2').css('display','none')
    $('#all .article3').css('display','none')
    $('#all .article4').css('display','block')
    $('#all .article5').css('display','block')
    $('#all .article6').css('display','none')
})




$(document).on("click",".sass",function(){
    $('#all .article1').css('display','block')
    $('#all .article2').css('display','none')
    $('#all .article3').css('display','none')
    $('#all .article4').css('display','none')
    $('#all .article5').css('display','none')
    $('#all .article6').css('display','none')
})




$(document).on("click",".react",function(){
    $('#all .article1').css('display','none')
    $('#all .article2').css('display','block')
    $('#all .article3').css('display','block')
    $('#all .article4').css('display','block')
    $('#all .article5').css('display','block')
    $('#all .article6').css('display','none')
})



$(document).on("click",".nextjs",function(){
    $('#all .article1').css('display','none')
    $('#all .article2').css('display','none')
    $('#all .article3').css('display','none')
    $('#all .article4').css('display','none')
    $('#all .article5').css('display','none')
    $('#all .article6').css('display','block')

})
}
