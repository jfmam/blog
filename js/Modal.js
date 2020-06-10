//모달페이지시 스크롤 방지,바깥화면 클릭시사라짐,배경화면 회색으로 변함

let modalButton=document.createElement('button');
let body=document.body;
let backDiv=document.createElement('div');
let modal=document.createElement('div');
let closeButton=document.createElement('button');
let img=document.createElement('img');

img.src='../image/github.png';


closeButton.textContent='모달 창 제거';
body.appendChild(img);

img.addEventListener('click',(e)=>{
    body.style.overflow='hidden';
    backDiv.style.backgroundColor='#a3a3a3';
    backDiv.style.opacity=0.8;
    backDiv.style.zIndex=100;
    backDiv.style.position='fixed';//modal에서 빠지면 안되는 3가지 1
    backDiv.style.left=0;//2
    backDiv.style.top=0;//3 배경
    backDiv.style.width = '100vw';
    backDiv.style.height = '100vh';
    backDiv.style.display='flex';// 모달 페이지 중앙 정렬 flex는 레이아웃을 표현하기 위해 만들었다.
    backDiv.style.justifyContent='center';//
    backDiv.style.alignItems='center'// 
    body.appendChild(backDiv);
    modal.style.position='absolute';
    modal.style.width='500px';
    modal.style.height='300px';
    modal.style.backgroundColor='#fff';
    modal.style.zIndex=101;
    backDiv.appendChild(modal);
    modal.appendChild(closeButton);
})


closeButton.addEventListener('click',(e)=>{
    body.style.overflow ='auto';
    body.removeChild(backDiv);
})


