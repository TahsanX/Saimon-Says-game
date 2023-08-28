let body = document.querySelector("body");
let btn1 = document.querySelector(".btns.red");
let btn2 = document.querySelector(".btns.green");
let btn3 = document.querySelector(".btns.blue");
let btn4 = document.querySelector(".btns.purple");
let confirm = document.querySelector(".confirm");
let arr = [btn1,btn2,btn3,btn4];
let h2 = document.querySelector("h2");
let level = 1;
let count1 =[];
let count2 =[];
let eita = 0;
let btn1c = 0;
let btn2c = 0;
let btn3c = 0;
let btn4c = 0;
body.addEventListener("keypress",function first(params) {
    if (eita==0) {
        flash();
        eita = 1;
    }
});
btn1.addEventListener("click",()=>{
    btn1.style.backgroundColor= "white"
    setTimeout(()=>{
       btn1.style.backgroundColor= "red"
    },400)
    count1.push(0);
    btn1c = 1;
})
btn2.addEventListener("click",()=>{
    btn2.style.backgroundColor= "white"
    setTimeout(()=>{
       btn2.style.backgroundColor= "green"
    },400)
    count1.push(1);
    btn2c = 1;
})
btn3.addEventListener("click",()=>{
    btn3.style.backgroundColor= "white"
    setTimeout(()=>{
       btn3.style.backgroundColor= "blue"
    },400)
    count1.push(2);
    btn3c = 1;
})
btn4.addEventListener("click",()=>{
    btn4.style.backgroundColor= "white"
    setTimeout(()=>{
       btn4.style.backgroundColor= "purple"
    },400)
    count1.push(3);
    btn4c = 1;
})
async function flash() {
    let numb = Math.floor(Math.random()*4);
    h2.innerText = `Level ${level}`;
    level++;
    arr[numb].style.backgroundColor= "white"
    count2.push(numb);
    setTimeout(()=>{
        if (numb==0) {
            arr[numb].style.backgroundColor= "red"
        }
        else if (numb==1) {
            arr[numb].style.backgroundColor= "green"
        }
        else if (numb==2) {
            arr[numb].style.backgroundColor= "blue"
        }
        else{
            arr[numb].style.backgroundColor= "purple"
        }
    },400)
}
batti = 0;
function match() {
    try {
        for(let i = 0; i<count1.length; i++){
            if (count1[i]!=count2[i]) {
                batti = 1;
            }
        }
        if (batti == 0) {
            console.log("Alright");
        }
        else{
            h2.innerText="Game over";
            alert("Refresh again to start");
            level = 1;
        }
        count1=[];
        
    } catch (error) {
        console.log("error found");
    }
}
confirm.addEventListener("click",function repeat() {
    if (batti==0 && btn1c == 1 || btn2c == 1 || btn3c == 1 || btn4c == 1) {
        flash()
        match() 
    }
    else{
        alert("Refresh again to start");
    }
})