const audioTurn=new Audio('Beep.mp3')
// console.log(audioTurn.play)
let turn='x'
let isgameover=false

//chnaging turn
changeTurn=()=>{
    return turn==='x'?'0':'x'
}

//function to chek win
let checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
let wins=[
      [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
]
wins.forEach(e=>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
        document.querySelector('.in__info').innerText=`${boxtext[e[0]].innerText} won`
        isgameover=true
        document.querySelector('.img__box').getElementsByTagName('img')[0].style.width='200px'
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector('.line').style.width='20vw'
    }
    // boxtext.style.pointerEvents='none';
})
}

// main logic
const boxes=document.getElementsByClassName('box')
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn()
            audioTurn.play()
            checkWin()
            if(!isgameover){
                document.getElementsByClassName("in__info")[0].innerText=`Turn for ${turn}`;
               
            }
        }
    })
})

//reseting the game
document.querySelector('.reseting').addEventListener('click',function(){
let boxtext1=document.querySelectorAll('.boxtext')
Array.from(boxtext1).forEach(element=>{
    element.innerText=''
})
turn='x'
isgameover=false
document.getElementsByClassName("in__info")[0].innerText='Turn for' +turn
document.querySelector('.img__box').getElementsByTagName('img')[0].style.width='0px'
 document.querySelector('.line').style.width='0vw'
})