var number1=Math.ceil(Math.random()*9);
var number2=Math.ceil(Math.random() * 9);

var body=document.body;
var word=document.createElement('div');
word.textContent = `${number1} 곱하기 ${number2} 는?`;
document.body.append(word);
var form=document.createElement('form')
document.body.append(form);
var input=document.createElement('input');
input.type='number';
form.append(input);
var button=document.createElement('button');
form.append(button);
button.textContent = '확인'
var text=document.createElement('div');







form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(input.value==number1*number2){
        alert('정답입니다')
        number1 = Math.ceil(Math.random() * 9);
        number2 = Math.ceil(Math.random() * 9);
        word.textContent = `${number1} 곱하기 ${number2} 는?`;
        input.value = ' ';
        input.focus();
    }
    else{
        input.focus();
        alert('틀렸습니다')
    }
})

