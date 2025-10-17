let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, player0

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
    })
})

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};


const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
<!-- 2024-11-18T22:52:21+05:30 -->
<!-- 2025-02-22T22:00:42+05:30 -->
<!-- 2025-03-14T03:37:46+05:30 -->
<!-- 2025-04-02T07:59:51+05:30 -->
<!-- 2025-04-06T09:09:52+05:30 -->
<!-- 2025-05-05T06:32:59+05:30 -->
<!-- 2025-05-06T04:38:01+05:30 -->
<!-- 2025-05-14T10:24:02+05:30 -->
<!-- 2025-05-20T09:54:05+05:30 -->
<!-- 2025-07-13T00:28:13+05:30 -->
<!-- 2025-08-09T02:54:18+05:30 -->
<!-- 2025-08-23T23:55:19+05:30 -->
<!-- 2025-10-23T10:19:26+05:30 -->
<!-- Update 2024-11-24T11:34:13+05:30 -->
<!-- Update 2024-12-21T14:01:21+05:30 -->
<!-- Update 2024-12-21T10:04:21+05:30 -->
<!-- Update 2024-12-25T09:08:23+05:30 -->
<!-- Update 2024-12-28T09:22:24+05:30 -->
<!-- Update 2024-12-28T13:00:24+05:30 -->
<!-- Update 2025-01-09T11:48:27+05:30 -->
<!-- Update 2025-03-14T06:54:36+05:30 -->
<!-- Update 2025-04-10T18:36:41+05:30 -->
<!-- Update 2025-06-04T11:23:57+05:30 -->
<!-- Update 2025-06-14T09:47:58+05:30 -->
<!-- Update 2025-07-17T11:49:06+05:30 -->
<!-- Update 2025-08-03T09:10:09+05:30 -->
<!-- Update 2025-09-13T08:26:15+05:30 -->
<!-- Update 2025-09-23T17:23:19+05:30 -->
<!-- Update 2025-10-17T12:38:27+05:30 -->