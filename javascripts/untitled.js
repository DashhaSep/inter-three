document.addEventListener("DOMContentLoaded", () => {
  draggable();
  draggabletwo();
  draggablethree();
  draggablefour();
  draggablefive();
  transition();
  // transitionTwo();
  // transitionThree();
  // transitionFour();
  // transitionFive();
  // transitionSix();
  // transitionSeven();
  // transitionEight();
  // transitionNine();
  // transitionTen();
  // transitionTen();
  // transitionEleven();
  // transitionThirteen();
  // transitionTwelve();
  // getMousePos();
  // mouseMove();
  openModal();
  initCanvas();
  oknoRegOdin();
  oknoRegDva();
  oknoRegTri();
  ColorChange();
  submitName();
  Question();
  Question2();
  Question3();
  Question4();
  timer();
  kartochki();
  kuratorANDkamila();
});

function submitName() {
  let btn = document.querySelector("#submitBtn");
  let input = document.querySelector("#textInput1");
  let balls = document.querySelector(".all-balls");
  let modal = document.querySelector(".modal");

  btn.addEventListener("click", () => {
    let ball = document.createElement("div");
    let p = document.createElement("p");

    ball.classList.add("ball");
    ball.classList.add("b0");

    p.innerHTML = input.value;

    ball.appendChild(p);
    balls.appendChild(ball);

    modal.style.display = "none";
  });
}

function openModal() {
  let button = document.querySelector(".register-box");
  let modal = document.querySelector("#register");

  button.addEventListener("click", () => {
    modal.style.cssText = "display: flex";
  });

  // modal.addEventListener("click", () => {
  //   modal.style.cssText = "display: none";
  // });
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
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}

function draggabletwo() {
  dragElement(document.getElementById("a2"));

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();

      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;

      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
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
  // let imageFirst = document.querySelector('.p001')

  // imageFirst.addEventListener('click', () => {
  //   imageFirst.classList.add('final')
  //   imageFirst.classList.remove('initial')
  // })
  let images = document.querySelectorAll(".fourth div");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      let imageClass = image.className;
      imageClass = imageClass.split();
      imageClass = imageClass.shift();

      console.log(imageClass);
      if (imageClass == "p001") {
        imageFirst.classList.add("final");
      }
    });
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
  let canvas = document.getElementById("canvas");
  if (!canvas) {
    console.error("Canvas element not found!");
    return;
  }

  let ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("2D context is not supported!");
    return;
  }

  // // Устанавливаем размеры холста
  // canvas.width = window.innerWidth * 0.8;
  // canvas.height = window.innerHeight * 0.6;

  // Настройки кисти
  ctx.strokeStyle = "#00000";
  ctx.lineWidth = 1;

  // Функция для получения координат мыши
  function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }

  // Функция для рисования при движении мыши
  function mouseMove(evt) {
    let mousePos = getMousePos(canvas, evt);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
  }

  // Начало рисования
  canvas.addEventListener("mousedown", function (evt) {
    let mousePos = getMousePos(canvas, evt);
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);
    evt.preventDefault();
    canvas.addEventListener("mousemove", mouseMove, false);
  });
  const dpr = window.devicePixelRatio || 1; // Учёт плотности пикселей
  canvas.style.width = "100vw";
  canvas.style.height = "33vw";
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerWidth * 0.33 * dpr); // Соотношение сторон 98vw : 33vw
  ctx.scale(dpr, dpr);
  // Остановка рисования
  canvas.addEventListener("mouseup", function () {
    canvas.removeEventListener("mousemove", mouseMove, false);
  });

  // Обработка выхода за пределы холста
  canvas.addEventListener("mouseout", function () {
    canvas.removeEventListener("mousemove", mouseMove, false);
  });

  // Кнопка очистки холста
  // document.getElementById('clear').addEventListener('click', function () {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height)
  // })
}

function oknoRegOdin() {
  // Получаем элементы DOM
  const textInput = document.getElementById("textInput1");
  // const submitBtn = document.getElementById("submitBtn");
  // const output = document.getElementById("output");
  const addButton = document.getElementById("addButton");
  const outputList = document.getElementById("outputList");

  // Добавляем обработчик события для кнопки
  // addButton.addEventListener('click', () => {
  //   const enteredText = textInput.value.trim() // Получаем введенный текст и убираем лишние пробелы

  //   if (enteredText) {
  //     // Создаем новый элемент списка
  //     const listItem = document.createElement('li')
  //     listItem.textContent = enteredText

  //     // Добавляем элемент в список
  //     outputList.appendChild(listItem)

  //     // Очищаем текстовое поле
  //     textInput.value = ''
  //   } else {
  //     alert('Пожалуйста, введите данные!')
  //   }
  // })
  // Обработчик для кнопки "Отправить"
  submitBtn.addEventListener("click", () => {
    const enteredText = textInput.value.trim(); // Получаем введенный текст
    if (enteredText) {
      output.textContent = `Вы ввели: ${enteredText}`; // Выводим текст на страницу
    } else {
      output.textContent = "Пожалуйста, введите текст!"; // Сообщение об ошибке
    }
  });
}

function oknoRegDva() {
  // Получаем элементы DOM
  const textInput = document.getElementById("textInput2");
  // const submitBtn = document.getElementById("submitBtn");
  // const output = document.getElementById("output");

  // Обработчик для кнопки "Отправить"
  submitBtn.addEventListener("click", () => {
    const enteredText = textInput.value.trim(); // Получаем введенный текст
    if (enteredText) {
      output.textContent = `Вы ввели: ${enteredText}`; // Выводим текст на страницу
    } else {
      output.textContent = "Пожалуйста, введите текст!"; // Сообщение об ошибке
    }
  });
}
function oknoRegTri() {
  // Получаем элементы DOM
  const textInput = document.getElementById("textInput3");
  // const submitBtn = document.getElementById("submitBtn");
  // const output = document.getElementById("output");

  // Обработчик для кнопки "Отправить"
  submitBtn.addEventListener("click", () => {
    const enteredText = textInput.value.trim(); // Получаем введенный текст
    if (enteredText) {
      output.textContent = `Вы ввели: ${enteredText}`; // Выводим текст на страницу
    } else {
      output.textContent = "Пожалуйста, введите текст!"; // Сообщение об ошибке
    }
  });
}

function ColorChange() {
  const themeButton = document.getElementById("themeButton");
  const body = document.body;

  // Флаг для отслеживания текущего состояния
  let isDarkMode = true;

  // Добавляем обработчик события для кнопки
  // themeButton.addEventListener('click', () => {
  //   if (isDarkMode) {
  //     // Если сейчас темная тема, меняем на светлую
  //     body.style.backgroundColor = 'black'
  //     body.style.color = 'white'
  //     themeButton.textContent = 'Переключить на темный режим'
  //     const allElements = document.querySelectorAll('*') // Выбираем все элементы
  //     allElements.forEach((element) => {
  //       element.style.color = 'white' // Устанавливаем черный цвет текста
  //     })
  //   } else {
  //     // Возвращаем исходное состояние немедленно
  //     resetStyles()
  //   }
  // })

  // Функция для возврата исходных стилей
  function resetStyles() {
    body.style.backgroundColor = ""; // Очищаем стиль фона
    body.style.color = ""; // Очищаем стиль текста

    // Возвращаем цвет текста всех элементов к исходному
    const allElements = document.querySelectorAll("*");
    allElements.forEach((element) => {
      element.style.color = ""; // Очищаем стиль текста
    });
    // Переключаем состояние
    isDarkMode = !isDarkMode;
  }
}
function Question() {
  document.querySelector(".expandable").addEventListener("click", function () {
    this.classList.toggle("expanded");
  });
}
function Question2() {
  document.querySelector(".expandable2").addEventListener("click", function () {
    this.classList.toggle("expanded2");
  });
}
function Question3() {
  document.querySelector(".expandable3").addEventListener("click", function () {
    this.classList.toggle("expanded3");
  });
}
function Question4() {
  document.querySelector(".expandable4").addEventListener("click", function () {
    this.classList.toggle("expanded4");
  });
}

function timer() {
  let stopwatchElement = document.querySelector(".stopwatch");
  let hoverArea = document.querySelector(".hover-area");

  let startTime = 0; // Время начала отсчета
  let elapsedTime = 0; // Общее время, прошедшее с момента запуска
  let timerInterval = null; // Интервал для обновления времени

  // Функция для форматирования времени в формат HH:MM:SS
  function formatTime(ms) {
    let hours = Math.floor(ms / 3600000);
    let minutes = Math.floor((ms % 3600000) / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);

    return (
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  }

  // Функция для обновления времени на экране
  function updateStopwatch() {
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    stopwatchElement.textContent = formatTime(elapsedTime);
  }

  // Запуск секундомера при наведении курсора
  hoverArea.addEventListener("mouseenter", () => {
    startTime = Date.now() - elapsedTime; // Учитываем уже прошедшее время
    timerInterval = setInterval(updateStopwatch, 100); // Обновляем каждые 100 мс
  });

  // Остановка секундомера при уходе курсора
  hoverArea.addEventListener("mouseleave", () => {
    clearInterval(timerInterval);
  });
}

function kartochki() {
  // Получаем все картинки
  const images = document.querySelectorAll(".image");

  // Обработчик клика для каждой картинки
  images.forEach((image) => {
    image.addEventListener("click", () => {
      // Возвращаем все картинки в исходное положение
      images.forEach((img) => {
        img.style.transform = "none";
      });

      // Определяем маршрут движения из атрибута data-move
      const move = image.getAttribute("data-move");

      // Разбираем маршрут (например, "x-50" -> ось X, смещение -50px)
      const [axis, value] = move.match(/([xy])([-\d]+)/).slice(1);
      const offset = parseInt(value, 10);

      // Двигаем выбранную картинку
      if (axis === "x") {
        image.style.transform = `translateX(${offset}px)`;
      } else if (axis === "y") {
        image.style.transform = `translateY(${offset}px)`;
      }
    });
  });
}
function kuratorANDkamila() {
  // Получаем элемент
  const box = document.querySelector(".kuratorANDkamila");

  // Задаем маршрут движения (массив точек [x, y])
  const path = [
    [0, 0], // Точка 1
    [20, 5], // Точка 2
    [10, 13], // Точка 3
    [10, -7], // Точка 4
    [0, 0], // Точка 5
  ];

  // Флаг для проверки, находится ли курсор над элементом
  let isHovered = false;

  // Индекс текущей точки маршрута
  let currentPointIndex = 0;

  // Функция для плавного движения к следующей точке
  function moveAlongPath() {
    if (!isHovered && currentPointIndex < path.length) {
      const [targetX, targetY] = path[currentPointIndex];
      const currentX = parseFloat(box.style.left || 0);
      const currentY = parseFloat(box.style.top || 0);

      // Вычисляем разницу между текущими координатами и целевой точкой
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      // Двигаемся плавно (шаг = 1/10 расстояния до цели)
      const stepX = dx / 10;
      const stepY = dy / 10;

      // Обновляем координаты
      box.style.left = `${currentX + stepX}px`;
      box.style.top = `${currentY + stepY}px`;

      // Если достигли цели с допустимой погрешностью, переходим к следующей точке
      if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
        currentPointIndex++;
        if (currentPointIndex >= path.length) {
          currentPointIndex = 0; // Возвращаемся к началу маршрута
        }
      }
    }

    // Вызываем функцию снова через requestAnimationFrame
    requestAnimationFrame(moveAlongPath);
  }

  // Добавляем обработчики событий для hover
  box.addEventListener("mouseenter", () => {
    isHovered = true; // Останавливаем движение
  });

  box.addEventListener("mouseleave", () => {
    isHovered = false; // Возобновляем движение
  });

  // Инициализируем стартовые координаты
  box.style.left = `${path[0][0]}px`;
  box.style.top = `${path[0][1]}px`;

  // Запускаем анимацию
  moveAlongPath();
}
