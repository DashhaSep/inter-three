document.addEventListener("DOMContentLoaded", () => {
  draggable();
  draggabletwo();
  draggablethree();
  draggablefour();
  draggablefive();
  transition();
  transitionTwo();
  transitionThree();
  transitionFour();
  transitionFive();
  transitionSix();
  transitionSeven();
  transitionEight();
  transitionNine();
  transitionTen();
  transitionTen();
  transitionEleven();
  transitionThirteen();
  transitionTwelve();
  // getMousePos();
  // mouseMove();
  openModal();
  initCanvas();
});

function openModal() {
  let button = document.querySelector(".register-box");
  let modal = document.querySelector("#register");

  button.addEventListener("click", () => {
    modal.style.cssText = "display: flex";
  });

  modal.addEventListener("click", () => {
    modal.style.cssText = "display: none";
  });
}

function draggable() {
  // Make the DIV element draggable:
  dragElement(document.getElementById("a1"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
function draggabletwo() {
  // Make the DIV element draggable:
  dragElement(document.getElementById("a2"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
function draggablethree() {
  // Make the DIV element draggable:
  dragElement(document.getElementById("a3"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
function draggablefour() {
  // Make the DIV element draggable:
  dragElement(document.getElementById("a4"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
function draggablefive() {
  // Make the DIV element draggable:
  dragElement(document.getElementById("a5"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}

// ЧЕТВЕРТЫЙ ЭКРАН
// фотографии-карточки

function transition() {
  let imageFirst = document.querySelector(".p001");

  imageFirst.addEventListener("click", () => {
    imageFirst.classList.add("final");
    imageFirst.classList.remove("initial");
  });
}
function transitionTwo() {
  let imageFirst = document.querySelector(".p002");

  imageFirst.addEventListener("click", () => {
    imageFirst.classList.add("finalTwo");
    imageFirst.classList.remove("initialTwo");
  });
}
function transitionThree() {
  let imageFirst = document.querySelector(".p003");

  imageFirst.addEventListener("click", () => {
    imageFirst.classList.add("finalThree");
    imageFirst.classList.remove("initialThree");
  });
}
function transitionFour() {
  let imageFirst = document.querySelector(".p004");

  imageFirst.addEventListener("click", () => {
    imageFirst.classList.add("finalFour");
    imageFirst.classList.remove("initialFour");
  });
}
function transitionTwelve() {
  let imageFirst = document.querySelector(".p012");

  imageFirst.addEventListener("click", () => {
    imageFirst.classList.add("finalTwelve");
    imageFirst.classList.remove("initialTwelve");
  });
}
function transitionFive() {
  let imageFirst = document.querySelector(".p005");

  imageFirst.addEventListener("click", () => {
    imageFirst.classList.add("finalFive");
    imageFirst.classList.remove("initialFive");
  });
}
function transitionSix() {
  let imageFirst = document.querySelector(".p006");

  imageFirst.addEventListener("click", () => {
    imageFirst.classList.add("finalSix");
    imageFirst.classList.remove("initialSix");
  });
}
function transitionSeven() {
  let imageFirst = document.querySelector(".p007");

  imageFirst.addEventListener("click", () => {
    imageFirst.classList.add("finalSeven");
    imageFirst.classList.remove("initialSeven");
  });
}
function transitionEight() {
  let imageFirst = document.querySelector(".p008");

  imageFirst.addEventListener("click", () => {
    imageFirst.classList.add("finalEight");
    imageFirst.classList.remove("initialEight");
  });
}
function transitionNine() {
  let imageFirst = document.querySelector(".p009");

  imageFirst.addEventListener("click", () => {
    imageFirst.classList.add("finalNine");
    imageFirst.classList.remove("initialNine");
  });
}
function transitionTen() {
  let imageFirst = document.querySelector(".p010");

  imageFirst.addEventListener("click", () => {
    imageFirst.classList.add("finalTen");
    imageFirst.classList.remove("initialTen");
  });
}
function transitionEleven() {
  let imageFirst = document.querySelector(".p011");

  imageFirst.addEventListener("click", () => {
    imageFirst.classList.add("finalEleven");
    imageFirst.classList.remove("initialEleven");
  });
}
function transitionThirteen() {
  let imageFirst = document.querySelector(".p013");

  imageFirst.addEventListener("click", () => {
    imageFirst.classList.add("finalThirteen");
    imageFirst.classList.remove("initialThirteen");
  });
}
function initCanvas() {
  let canvas = document.getElementById("art");
  let ctx = canvas.getContext("2d");

  function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }

  function mouseMove(evt) {
    let mousePos = getMousePos(canvas, evt);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
  }

  canvas.addEventListener("mousedown", function (evt) {
    let mousePos = getMousePos(canvas, evt);
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);
    evt.preventDefault();
    canvas.addEventListener("mousemove", mouseMove, false);
  });

  canvas.addEventListener(
    "mouseup",
    function () {
      canvas.removeEventListener("mousemove", mouseMove, false);
    },
    false
  );

  document.getElementById("reset").addEventListener(
    "click",
    function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    false
  );
}
