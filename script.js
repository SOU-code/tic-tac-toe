//Make round on click
function makeRound(parentEle) {
  const childEle = document.createElement("div");
  childEle.style.cssText =
    "width:5rem;height:5rem;border-radius:50%;border:5px solid green;";
  parentEle.appendChild(childEle);
}
//Make cross on click
function makeCross(parentEle) {
  const childEle1 = document.createElement("div");
  childEle1.classList.add("cross");
  childEle1.style.cssText =
    "position:absolute;right:5rem,top:5rem;width:5px;height:5rem;background:blue;transform:rotate(45deg);";
  const childEle2 = document.createElement("div");
  childEle2.classList.add("cross");
  childEle2.style.cssText =
    "position:absolute;right:5rem,top:5rem;width:5px;height:5rem;background:blue;transform:rotate(-45deg);";
  parentEle.appendChild(childEle1);
  parentEle.appendChild(childEle2);
}
//check win function
function checkWin(boxes, totalClick, container, winner) {
  if (totalClick < 5) {
    return 0;
  }
  //Row 1
  else if (
    boxes[0].value == winner &&
    boxes[1].value == winner &&
    boxes[2].value == winner
  ) {
    const line = document.createElement("div");
    line.style.cssText =
      "position: absolute;background-color: red;width: 25rem;height: 4px;transform:translateY(3.8rem)";
    container.appendChild(line);
    return 1;
  }
  //Row 2
  else if (
    boxes[3].value == winner &&
    boxes[4].value == winner &&
    boxes[5].value == winner
  ) {
    const line = document.createElement("div");
    line.style.cssText =
      "position: absolute;background-color: red;width: 25rem;height: 4px;transform:translateY(12.3rem)";
    container.appendChild(line);
    return 1;
  }
  //Row 3
  else if (
    boxes[6].value == winner &&
    boxes[7].value == winner &&
    boxes[8].value == winner
  ) {
    const line = document.createElement("div");
    line.style.cssText =
      "position: absolute;background-color: red;width: 25rem;height: 4px;transform:translateY(20.8rem)";
    container.appendChild(line);
    return 1;
  }
  // Col 1
  else if (
    boxes[0].value == winner &&
    boxes[3].value == winner &&
    boxes[6].value == winner
  ) {
    const line = document.createElement("div");
    line.style.cssText =
      "position: absolute;background-color: red;width: 4px;height: 25rem;transform:translateX(3.8rem)";
    container.appendChild(line);
    return 1;
  }
  // Col 2
  else if (
    boxes[1].value == winner &&
    boxes[4].value == winner &&
    boxes[7].value == winner
  ) {
    const line = document.createElement("div");
    line.style.cssText =
      "position: absolute;background-color: red;width: 4px;height: 25rem;transform:translateX(12.3rem)";
    container.appendChild(line);
    return 1;
  }
  //Col 3
  else if (
    boxes[2].value == winner &&
    boxes[5].value == winner &&
    boxes[8].value == winner
  ) {
    const line = document.createElement("div");
    line.style.cssText =
      "position: absolute;background-color: red;width: 4px;height: 25rem;transform:translateX(20.8rem)";
    container.appendChild(line);
    return 1;
  }
  //Corner 1
  else if (
    boxes[0].value == winner &&
    boxes[4].value == winner &&
    boxes[8].value == winner
  ) {
    const line = document.createElement("div");
    line.style.cssText =
      "position: absolute;background-color: red;width: 4px;height: 25rem;left:50%;transform:translateX(-50%);transform:rotate(-45deg);";
    container.appendChild(line);
    return 1;
  }
  //Corner 2
  else if (
    boxes[2].value == winner &&
    boxes[4].value == winner &&
    boxes[6].value == winner
  ) {
    const line = document.createElement("div");
    line.style.cssText =
      "position: absolute;background-color: red;width: 4px;height: 25rem;left:50%;transform:translateX(-50%);transform:rotate(45deg);";
    container.appendChild(line);
    return 1;
  }
  return 0;
}
//Win function
function win(winner, mainSection) {
  const overContainer = document.createElement("div");
  overContainer.style.cssText =
    "position: absolute;background-color: rgba(0,0,0,0.6);width: 26rem;height: 26rem;top:50%;left:50%;z-index:2;transform:translate(-50%,-50%);text-align:center;padding-top:11rem;color:#fff;font-size:3rem;font-weight:800;";
  overContainer.innerHTML = `${winner} Win`;
  mainSection.appendChild(overContainer);
}
//Draw function
function draw(mainSection) {
  const overContainer = document.createElement("div");
  overContainer.style.cssText =
    "position: absolute;background-color: rgba(0,0,0,0.6);width: 26rem;height: 26rem;top:50%;left:50%;z-index:2;transform:translate(-50%,-50%);text-align:center;padding-top:11rem;color:#fff;font-size:3rem;font-weight:800;";
  overContainer.innerHTML = `Draw`;
  mainSection.appendChild(overContainer);
}
//Main tic-toc-toe function
function ticTacToe() {
  const container = document.querySelector(".container");
  const boxes = document.querySelectorAll(".box");
  const restart = document.querySelector(".restart");
  for (let i = 0; i < 9; i++) {
    boxes[i].value = "Not Click";
  }
  let totalClick = 0;
  for (let i = 0; i < 9; i++) {
    boxes[i].addEventListener("click", () => {
      if (boxes[i].value == "Not Click") {
        ++totalClick;
        const boxItem = document.createElement("div");
        if (totalClick % 2) {
          boxes[i].value = "Round";
          makeRound(boxes[i]);
        } else {
          boxes[i].value = "Cross";
          makeCross(boxes[i]);
        }
        const mainSection = document.querySelector(".main");
        if (checkWin(boxes, totalClick, container, boxes[i].value)) {
          win(boxes[i].value, mainSection);
        } else {
          if (totalClick == 9) {
            draw(mainSection);
          }
        }
      }
    });
  }
  restart.addEventListener("click", () => {
    location.reload();
  });
}
ticTacToe();
