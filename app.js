

const text =document.querySelector(".fancy");//be careful while selecting the classes
const strText =text.textContent;
const splitText =strText.split("");//splits every word including spaces into an array and then converting it into span so we can indivisully animate all tha letters one by one
text.textContent="";//as it get doubly printed so to remove it ..
for(let i=0;i < splitText.length ;i++){

  text.innerHTML += "<span>" +splitText[i] +"</span>";
}
//text.textContent and text.innerHTML is the same thing

let char=0;
let timer =setInterval(onTick,50);

function onTick(){
   const span =document.querySelectorAll("span")[char];//span is html inline html
   span.classList.add("fade");//can add any class name to apply
   char++;
   if(char === splitText.length){
     complete();
     return;
   }
}

function complete(){
  clearInterval(timer);//stops the timer
  timer=null;//starts from beginning
}


//for second one
