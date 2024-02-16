let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector('#reset-btn');
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")


let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
       //console.log("box was clicked");
       if(turnO){ //playrO
           box.innerText="O"
           turnO=false;
       }else{ //playerX
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true; 
       checkWinner();
    })
})
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showwinner = (winner) => {
    msg.innerHTML = `Congratulations! The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{

    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        //  console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //  );
            let posVal1=boxes[pattern[0]].innerText;
            let posVal2=boxes[pattern[1]].innerText;
            let posVal3=boxes[pattern[2]].innerText;

            if(posVal1 !="" && posVal2 != "" && posVal3 !=""){
                if(posVal1 === posVal2 && posVal2 === posVal3){
                    console.log("winner",posVal1);
                    
                    showwinner(posVal1);
                }
            }
    }

}

const resetGame = () => {
    turnO = true;
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    msgContainer.classList.add("hide");
}

resetBtn.addEventListener('click', resetGame);
if (newGamebtn) {
    newGamebtn.addEventListener('click', resetGame);
}