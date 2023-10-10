let gameSeq = [];
let userSeq = [];

let started = false;

let level = 0;
let h2 = document.querySelector("h2");
let btns = [ "yellow","green" , "orange", "red"] ;

document.addEventListener("keypress",()=>{
 if (started == false){
    console.log("game is started");
      started = true;
 }
 levelUp();
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level  ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx) {
    // console.log(`level${level}`);
    // let idx = level - 1 ;
    if (userSeq[idx]==gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else {
        h2.innerText = `Game over!! your score was ${ level }  Press any key to start`;
        let body = document.querySelector("body");
        body.style.backgroundColor = "red";

        setTimeout(()=>{
            body.style.backgroundColor = "white";
        },200)
       
      reset();
    }
};

function btnPress(){
  let btn = this;
//   console.log(btn);
btnFlash(btn);
userColor = btn.getAttribute("id");
userSeq.push(userColor);
checkAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
   btn.addEventListener("click",btnPress);
};

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}