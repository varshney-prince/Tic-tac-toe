console.log("hello");


let music= new Audio("./assets/music.mp3");
let audioTurn= new Audio("./assets/ting.mp3");
let gameover= new Audio("./assets/gameover.mp3");

let turn="X";

const changeTurn=()=>{
    return turn==="X"?"0":"X"
}


const checkWin = ()=>{

}

music.play();

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
         
            document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
          
        }
    })
})