let body=document.body;
let table=document.createElement('table');

let at=[];
let atr = [];
let atd=[];

let turn='X';

let winner='';
let col=0,row=0;
let cnt=0;

table.style.border='1px solid'
table.style.width='300px'
table.style.height = '300px'



function reset(){
    let reset = document.createElement('button');
    reset.textContent = '다시하기'
    body.appendChild(reset);
    reset.addEventListener('click', (e) => {
        cnt=0;
        turn = 'X';
        winner='';
        atr.forEach(element => {
            element.forEach((ele) => {
                ele.textContent = ""
            })
        });
        body.removeChild(reset);
    })
}

function callBackFunc(e){

}

for(let i=0;i<3;i++){
    let trow = document.createElement('tr');
    at.push(trow);
    atr.push([]);
    for(let j=0;j<3;j++){
        let td = document.createElement('td');
        td.style.border = '1px solid black';
        td.style.width='100px';
        td.style.height='100px';
        td.style.textAlign='center';
        td.style.fontSize='35px';
        td.addEventListener('click',async(e)=>{
            col=at.indexOf(e.target.parentNode)//trow의 인덱스반환[]
            row=atr[col].indexOf(e.target)//atr[col]의 인덱스반환 [[x,x,x],[],[]]
           if (atr[col][row].textContent ==="") {
                   if (cnt === 8) {
                       alert('무승부');
                       reset();
                   }
                   cnt++;
            atr[col][row].textContent=turn;
                if (atr[col][0].textContent === turn && atr[col][1].textContent === turn && atr[col][2].textContent === turn) {
                    winner = turn;
                } else if (atr[0][row].textContent === turn && atr[1][row].textContent === turn && atr[2][row].textContent === turn) {
                    winner = turn;
                } else if (atr[0][0].textContent === turn && atr[1][1].textContent === turn && atr[2][2].textContent){
                    winner = turn;
                }
                else if(atr[0][2].textContent === turn && atr[1][1].textContent === turn && atr[2][0].textContent === turn) {
                    winner = turn;
                }
                console.log(winner)
            if(winner===turn&&(turn==='X'||turn==='O')){
                alert(`승자는 ${winner} 입니다`);
                reset();
            }
            else
            turn==='X'?turn='O':turn='X';
           }
           else {
               console.log('비어 있는 칸을 클릭해주세요')
           }

        })
        atr[i].push(td);
        trow.appendChild(td);
    }
    table.appendChild(trow);
}
body.appendChild(table);