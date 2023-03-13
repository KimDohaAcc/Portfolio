let turn = 1;
let win = 0;
const size = 15;
const mark = [];
const table = document.querySelector("table");

for (let x = 1; x <= 2; x++) {
  const tbody = document.createElement("tbody");
  tbody.setAttribute("id", `tbody-${x}`)

  for (let i = 0; i < size; i++) {
    const markIn = [];
    mark.push(markIn);
    const tr = document.createElement("tr");
    tr.setAttribute("id", `tr-${i}`)
    for (let j = 0; j < size; j++) {
      const check = 0;
      markIn.push(check);

      const td = document.createElement("td");
      td.setAttribute("class", `td${x}`)
      td.setAttribute("id", `td-${i},${j}`);

      if (x === 1 && j !== size - 1 && i !== size - 1) {
        td.addEventListener("click", e => {
          if (mark[i][j] === 0) {
            const img = document.createElement("img");
            img.setAttribute("class", "baduk-img");
            if (turn == 1) {
              img.setAttribute("src", "white.png");
            }

            else {
              img.setAttribute("src", "black.png");
            }

            td.append(img);
            mark[i][j] = turn;
            checkWin();
          }
        });
      }
      tr.append(td);
    }
    tbody.append(tr);
  }

  table.append(tbody);
}

function checkWin() {
  checkHori();
  checkverti();
  checkCross();

  if (win !== 0) {
    if (win === 1) {
      alert(`하얀돌이 이겼습니다!`);
    }

    else {
      alert(`검은돌이 이겼습니다!`);

    }
  }

  turn = turn === 1 ? 2 : 1;
}

function checkHori() {
  for (let i = 0; i < size; i++) {
    let count = 0;
    for (let j = 0; j < size; j++) {
      if (mark[i][j] === turn) {
        count++;
      }

      else {
        count = 0;
      }

      if (count === 5) {
        win = turn;
      }
    }
  }
}

function checkverti() {
  for (let i = 0; i < size; i++) {
    let count = 0;
    for (let j = 0; j < size; j++) {
      if (mark[j][i] === turn) {
        count++;
      }

      else {
        count = 0;
      }

      if (count === 5) {
        win = turn;
      }
    }
  }
}

function checkCross() {
  let count = 0;
  for (let j = 0; j < size; j++) {
    for (let k = 0; k < size; k++) {
      for (let i = 0; i < size; i++) {
        if (i + j < size && i + k < size && mark[i + j][i + k] === turn) {
          count++;
        }

        else {
          count = 0;
        }

        if (count === 5) {
          win = turn;
        }
      }
    }
  }

  count = 0;
  for (let j = 0; j < size; j++) {
    for (let k = 0; k < size; k++) {
      for (let i = 0; i < size; i++) {
        if (i - j >= 0 && size - 1 - i - k >= 0 && mark[i - j][size - 1 - i - k] === turn) { // 51 42 31 20 // 61 52 // 52 43
          count++;
        }

        else {
          count = 0;
        }

        if (count === 5) {
          win = turn;
        }
      }
    }
  }
}