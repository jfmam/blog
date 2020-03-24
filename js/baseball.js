let body=document.body;
let div=document.createElement('div');
body.append(div)
div.textContent='숫자 야구 게임';
let form=document.createElement('form');
body.append(form);
let input=document.createElement('input');
input.type='number'
input.maxLength=4;
let button=document.createElement('button');
let newProblem=document.createElement('button')
form.append(input);
form.append(button);
button.textContent='확인';
 let strike = 0;
 let ball = 0;

let label=document.createElement('h1');
let result =document.createElement('h1')
 body.append(label);
 body.append(result);
label.textContent=`${strike}strike,${ball}ball`;
result.textContent=' ';

let candidate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let numb = [];
function randomNumber(){
     candidate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
     numb = [];
     for (let i = 0; i < 4; i++) {
         let j = candidate.splice(Math.floor(Math.random() * (9 - i) + 0), 1)[0];
         numb.push(j); //numb.shift(j);
     }
     console.log(numb);
}

randomNumber();



let cnt=0;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let answer=input.value
    if(numb.join('')===answer){
        result.textContent='홈런'
        randomNumber();
        input.value='';
        input.focus();
    }
    else{
            answer.split('')   
             strike = 0;
             ball = 0;
                if (cnt == 3) {
                    result.textContent = `실패 하였습니다 답은 ${numb}` 
                    form.append(newProblem);        
                }
                else {
                    for (let i = 0; i < 4; i++) {
                        if (numb[i] === (Number)(answer[i])) strike++;
                        else if (numb.indexOf((Number)(answer[i])) > -1) ball++;
                    }
                    label.textContent = `${strike}strike,${ball}ball`;
                    cnt++;
                    result.textContent = `${4-cnt}번 남았습니다`
                }
    }
})

newProblem.addEventListener('click',(e)=>{
    randomNumber();
    cnt=0;
    result.textContent='';
    strike=0;
    ball=0;
    form.removeChild(newProblem);
})

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     result.textContent='';
//     let n = (Number)(input.value);
//     let j = 0;
//     while (count < 10) {
//         if(strike===4) {
//         result.textContent='정답입니다'
//         randomNumber();
//     }
//     else{
//         result.textContent = '땡'
//     }
//         for (let i = 0; i < 4; i++) {
//             n = n % 10;
//             j = arr.findIndex((e) => {
//                 return e === n;
//             })
//             if (j) {
//                 if (arr[j] === n) strike++;
//                 else ball++;
//             }
//             label.textContent = `${strike}strike,${ball}ball`;
//         }
//         count++;
//         input.focus();
//         input.value=''
//     }
//   result.textContent = '실패하였습니다';
//   randomNumber();
// })
