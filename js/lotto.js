let candidate = Array(45).fill().map((v, i) => {
    return i + 1;
}); //null값을 갖는 Array를 45개를 만든다

let shuffle=[];

while(candidate.length>0){
    let move=candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
    shuffle.push(move)

}

console.log(shuffle);
let bonus=shuffle[shuffle.length-1];
let number=shuffle.slice(0,6);
number.sort((a,b)=>{return a-b;});
//오름차순 return a-b 0보다 크면 순서를 바꾼다 true이면 바꾼다
//내림차순 return b-a;
console.log(number);

let result=document.getElementById('result');
//let result=document.quarySelector('#result');
function randomChoice(choice){
    return new Promise((resolve,resject)=>{    
        setTimeout(()=>{       
        resolve();
    },1500)
    })
}

for(let i=0;i<number.length;i++){
    let ball=document.createElement('div');
    ball.style.display='inline-block';
    ball.style.border='1px solid black';
    ball.style.borderRadius='10px';
    ball.style.textAlign='center';
    ball.style.width="20px";
    ball.style.height="20px";
    ball.style.marginRight='10px';
    let bColor='';
    if(number[i]<10) bColor='red';
    else if (number[i] < 20) bColor = 'orange'
    else if (number[i] < 30) bColor = 'yellow'
    else if (number[i] < 40) bColor = 'blue'
    else bColor='green'

    ball.style.backgroundColor=bColor;
    let choice = document.createElement('div');
    setTimeout((
    )=>{
        choice.textContent = '추첨중..'
        result.appendChild(choice);
    },i*1000)
       setTimeout(() => {
            result.removeChild(choice);
            ball.textContent = number[i];
            result.appendChild(ball);
       }, i * 1100)
}
setTimeout(()=>{
    let bo = document.getElementsByClassName('bonus')[0];
    //let bo=document.quarySelector('.bonus');
    let bonusN = document.createElement('div');
    bonusN.textContent = `보너스:${bonus}`;
    bo.appendChild(bonusN);
},7000)

