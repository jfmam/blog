let left=0
let rsp={
    rock:0,
    scissor:'-210px',
    paper:'-450px'
}
let result=document.createElement('h1');
function compterChoice(left){
return Object.entries(rsp).find((item)=>{
    return item[1]===left;
})[0];//item 1은 value값을 뜻하고 둘이 같으면 entries에 의해 [key,value]를 반환한다 key만반환하기위해 [0]을붙여준다.
}

//Object.keys(객체)//객체의 key값을반환
//Object.values(객체)//객체의 value 값 반환 
//이두개를 합친게 entries
//Object.assign(객체1,객체2) 객체 2를 객체 1에 합치는데 중복되면 뒤에것을따른다


let inter
function interval(){
    result.textContent='';
    inter=setInterval(()=>{
    if(left===rsp.rock) left=rsp.scissor;
    else if(left===rsp.scissor) left=rsp.paper;
    else left=rsp.rock;
    let Image=document.querySelector('#computer').style.background=`url(image/rsc.PNG)${left} 0`
},100)
}

interval();
//setInterval을 어떻게멈추어야하나?->ClearInterval

let point={
    rock:1,
    scissor:2,
    paper:3
}

document.querySelectorAll('.btn').forEach((e)=>{
    e.addEventListener('click',async()=>{
        clearInterval(inter);
        setTimeout(()=>{
           interval();
        },1500)    
        let userChoice=e.id;
        //rock ->scissor->paper
        //1->2->3->0
        let computerChoose=await compterChoice(left);
        //console.log(point["rock"]);
        if(point[userChoice]===point[computerChoose])result.textContent='무승부';
        else if ([-1, 2].includes(point[userChoice] - point[computerChoose])) result.textContent = '승';
        else result.textContent = '패';
    })
    document.body.appendChild(result)
})
