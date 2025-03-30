document.addEventListener("DOMContentLoaded", () => {
  tralalelo();
  preloader();
  draggable();
  draggabletwo();
  draggablethree();
  draggablefour();
  draggablefive();
  ADAPTIVECANVAS();
  anotherCanvas();
  openModal();
  initCanvas();
  submitName();
  Question();
  Question2();
  Question3();
  Question4();
  timer();
  KARTOCHKI();
  secondInterface();
  WhiteBorder();
  asteroidswhite();
  imagesDarkVersion();
  podvalInversion();
});
// цифры на загрузочной экране
function tralalelo() {
  const elements = document.querySelectorAll(".number");
  if (elements.length === 0) {
    console.error('Элементы с классом "number" не найдены.');
    return;
  }

  elements.forEach((element) => {
    let text = element.textContent.trim();
    let number = parseInt(text.slice(1, -1), 10);

    if (isNaN(number)) {
      console.error(`Текст элемента "${text}" не является числом.`);
      return;
    }
    setInterval(() => {
      number++;
      element.textContent = `(${number})`;
    }, 50);
  });
}

/* <!-- загрузочный экран  --> */
function preloader() {
  const TIME_TO_WAIT = 4; // Время ожидания в секундах
  const preloader = document.querySelector(".vk-preloader");

  if (!preloader) {
    console.warn("Preloader element not found.");
    return;
  }

  const removePreloader = function () {
    preloader.classList.add("none"); // Полностью скрываем элемент
    preloader.removeEventListener("transitionend", removePreloader); // Удаляем обработчик
  };

  const hidePreloader = function () {
    preloader.classList.add("hiddenN"); // Запускаем CSS-переход
    preloader.addEventListener("transitionend", removePreloader); // Ждем завершения анимации
  };

  setTimeout(hidePreloader, TIME_TO_WAIT * 1000); // Запускаем через 4 секунды
}
const removePreloader = function () {
  console.log("Transition ended, hiding preloader...");
  preloader.classList.add("none");
  preloader.removeEventListener("transitionend", removePreloader);
};
// регистрация и появление шарика
function submitName() {
  let btn = document.querySelector("#submitBtn");
  let input = document.querySelector("#textInput1");
  let balls = document.querySelector(".all-balls");
  let modal = document.querySelector(".modal");
  let words = document.querySelectorAll(".change-word");

  btn.addEventListener("click", () => {
    let ball = document.createElement("div");
    let p = document.createElement("p");

    ball.classList.add("ball");
    ball.classList.add("b0");

    p.innerHTML = input.value;

    ball.appendChild(p);
    balls.appendChild(ball);

    modal.style.display = "none";

    words.forEach((word) => {
      word.innerHTML = "114";
    });
  });
}
// окно регистрации
function openModal() {
  let button = document.querySelector(".register-box");
  let modal = document.querySelector("#register");

  button.addEventListener("click", () => {
    modal.style.cssText = "display: flex";
  });
}
// перетаскивания второй экран
function draggable() {
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

      // Convert pixel values to vw
      const viewportWidth = window.innerWidth; // Get the current viewport width
      const deltaX = (pos1 / viewportWidth) * 100; // Calculate horizontal change in vw
      const deltaY = (pos2 / viewportWidth) * 100; // Calculate vertical change in vw

      // Update the element's position using vw units
      const currentTop = parseFloat(elmnt.style.top || 0); // Get current top value in vw
      const currentLeft = parseFloat(elmnt.style.left || 0); // Get current left value in vw

      elmnt.style.top = `${currentTop - deltaY}vw`;
      elmnt.style.left = `${currentLeft - deltaX}vw`;
    }

    function closeDragElement() {
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

      // Convert pixel values to vw
      const viewportWidth = window.innerWidth; // Get the current viewport width
      const deltaX = (pos1 / viewportWidth) * 100; // Calculate horizontal change in vw
      const deltaY = (pos2 / viewportWidth) * 100; // Calculate vertical change in vw

      // Update the element's position using vw units
      const currentTop = parseFloat(elmnt.style.top || 0); // Get current top value in vw
      const currentLeft = parseFloat(elmnt.style.left || 0); // Get current left value in vw

      elmnt.style.top = `${currentTop - deltaY}vw`;
      elmnt.style.left = `${currentLeft - deltaX}vw`;
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

      // Convert pixel values to vw
      const viewportWidth = window.innerWidth; // Get the current viewport width
      const deltaX = (pos1 / viewportWidth) * 100; // Calculate horizontal change in vw
      const deltaY = (pos2 / viewportWidth) * 100; // Calculate vertical change in vw

      // Update the element's position using vw units
      const currentTop = parseFloat(elmnt.style.top || 0); // Get current top value in vw
      const currentLeft = parseFloat(elmnt.style.left || 0); // Get current left value in vw

      elmnt.style.top = `${currentTop - deltaY}vw`;
      elmnt.style.left = `${currentLeft - deltaX}vw`;
    }

    function closeDragElement() {
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

      // Convert pixel values to vw
      const viewportWidth = window.innerWidth; // Get the current viewport width
      const deltaX = (pos1 / viewportWidth) * 100; // Calculate horizontal change in vw
      const deltaY = (pos2 / viewportWidth) * 100; // Calculate vertical change in vw

      // Update the element's position using vw units
      const currentTop = parseFloat(elmnt.style.top || 0); // Get current top value in vw
      const currentLeft = parseFloat(elmnt.style.left || 0); // Get current left value in vw

      elmnt.style.top = `${currentTop - deltaY}vw`;
      elmnt.style.left = `${currentLeft - deltaX}vw`;
    }

    function closeDragElement() {
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

      // Convert pixel values to vw
      const viewportWidth = window.innerWidth; // Get the current viewport width
      const deltaX = (pos1 / viewportWidth) * 100; // Calculate horizontal change in vw
      const deltaY = (pos2 / viewportWidth) * 100; // Calculate vertical change in vw

      // Update the element's position using vw units
      const currentTop = parseFloat(elmnt.style.top || 0); // Get current top value in vw
      const currentLeft = parseFloat(elmnt.style.left || 0); // Get current left value in vw

      elmnt.style.top = `${currentTop - deltaY}vw`;
      elmnt.style.left = `${currentLeft - deltaX}vw`;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}

// рисование для телефона  холст
function ADAPTIVECANVAS() {
  const button = document.getElementById("toggleButton");
  let isBlack = true; // Флаг для отслеживания текущего цвета
  button.addEventListener("click", () => {
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.strokeStyle = isBlack ? "#FFFFFF" : "#000000";
    isBlack = !isBlack; // Инвертируем флаг
  });

  const canvas = document.getElementById("drawingCanvas");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth; // 100vw
    canvas.height = (window.innerWidth * 110) / 100; // 88vw
  }

  // Инициализация размеров при загрузке страницы
  resizeCanvas();

  // Обновляем размеры canvas при изменении размера окна
  window.addEventListener("resize", resizeCanvas);

  // Настройка кисти
  ctx.strokeStyle = "#000000"; // Черный цвет
  ctx.lineWidth = 1; // Толщина линии
  ctx.lineCap = "round"; // Закругленные концы линий

  // Переменная для отслеживания состояния рисования
  let isDrawing = false;
  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY); // Начало новой линии
  });

  canvas.addEventListener("mousemove", (e) => {
    if (isDrawing) {
      ctx.lineTo(e.offsetX, e.offsetY); // Продолжение линии
      ctx.stroke(); // Отрисовка линии
    }
  });

  canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    ctx.closePath(); // Завершение линии
  });

  canvas.addEventListener("mouseleave", () => {
    isDrawing = false; // Если курсор покидает область canvas
  });
}
// холст десктоп
function initCanvas() {
  const button = document.getElementById("toggleButton");
  let isBlack = true; // Флаг для отслеживания текущего цвета
  button.addEventListener("click", () => {
    ctx.strokeStyle = "#000000"; // Черный цвет по умолчанию
    ctx.lineWidth = 1;
    ctx.strokeStyle = isBlack ? "#FFFFFF" : "#000000";
    isBlack = !isBlack; // Инвертируем флаг
  });
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
  // Настройки кисти
  // ctx.strokeStyle = "#00000";
  // ctx.lineWidth = 1;

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
  document.getElementById("clear").addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
}
// функция скрытия точек рисование
function anotherCanvas() {
  const toggleButton = document.getElementById("enter");
  const dot = document.querySelectorAll(".dot");
  // Флаг для отслеживания текущего состояния
  let isGroup1Visible = true;

  toggleButton.addEventListener("click", () => {
    if (isGroup1Visible) {
      dot.forEach((box) => box.classList.add("hidden"));
    } else {
      dot.forEach((box) => box.classList.remove("hidden"));
    }

    // Инвертируем флаг
    isGroup1Visible = !isGroup1Visible;
  });
}
// темный режим подвал
function podvalInversion() {
  const toggleButton = document.getElementById("toggleButton");
  const normal = document.querySelector(".PODVAL-ALL-NORMAL");
  const inversion = document.querySelector(".PODVAL-ALL-INVERSION");

  // Флаг для отслеживания текущего состояния
  let isGroup1Visible = true;

  // Добавляем обработчик события на кнопку
  toggleButton.addEventListener("click", () => {
    if (isGroup1Visible) {
      // Скрываем группу 1 и показываем группу 2
      normal.classList.add("hidden");
      inversion.classList.remove("hidden");
    } else {
      // Скрываем группу 2 и показываем группу 1
      inversion.classList.add("hidden");
      normal.classList.remove("hidden");
    }

    // Инвертируем флаг
    isGroup1Visible = !isGroup1Visible;
  });
}
// элементы подсказки (?)
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
// таймер холст для рисования
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
// перетаскивание карточек четвертый экран
function KARTOCHKI() {
  const photos = document.querySelectorAll(".kartochki");
  let activePhoto = null;

  photos.forEach((photo) => {
    photo.addEventListener("click", () => {
      // Получаем данные о движении из атрибута data-move
      const moveData = JSON.parse(photo.getAttribute("data-move"));
      const { x, y } = moveData;

      if (activePhoto === photo) {
        // Если кликнули на уже активное изображение, ничего не делаем
        return;
      }

      if (activePhoto) {
        // Возвращаем предыдущее активное изображение на место
        activePhoto.style.transform = "translate(0, 0)";
      }

      // Перемещаем текущее изображение
      photo.style.transform = `translate(${x}, ${y})`;
      activePhoto = photo;
    });
  });
}
// ТЕМНЫЙ РЕЖИМ BODY
function secondInterface() {
  const button = document.getElementById("toggleButton");
  const body = document.body;
  button.addEventListener("click", () => {
    if (body.classList.contains("SLAY")) {
      body.classList.remove("SLAY");
      body.classList.add("after");
    } else {
      body.classList.remove("after");
      body.classList.add("SLAY");
    }
  });
}
// ТЕМНЫЙ РЕЖИМ РАМКИ
function WhiteBorder() {
  const button = document.getElementById("toggleButton"); // Кнопка
  const box = document.querySelector(".ramka");
  const element = document.querySelector("#clear");
  const element2 = document.querySelector("#enter");
  const element3 = document.querySelector(".square");

  // Добавляем обработчик события клика
  button.addEventListener("click", () => {
    box.classList.toggle("white-ramka");
  });
  button.addEventListener("click", function () {
    // Переключаем ID между "element1" и "element2"
    element.id = element.id === "clear" ? "clear-white" : "clear";
    element2.id = element2.id === "enter" ? "enter-white" : "enter";
    element3.id = element3.id === "square" ? "enter-white" : "square";
  });
}
// ТЕМНЫЙ РЕЖИМ ВСЕ ЭЛЕМЕНТЫ
function imagesDarkVersion() {
  const button = document.getElementById("toggleButton");
  const pystotа = document.querySelector(".img1");
  const regolit = document.querySelector(".img2");
  const mantia = document.querySelector(".img3");
  const yadro = document.querySelector(".img4");
  const bomElement = document.querySelectorAll(".dot");
  const bomElement2 = document.querySelectorAll(".RB");
  const bomElement3 = document.querySelectorAll(".XX");
  const bomElement4 = document.querySelectorAll(".FG");
  const bomElement5 = document.querySelectorAll(".WG");

  button.addEventListener("click", () => {
    pystotа.classList.toggle("afterimage");
    mantia.classList.toggle("afterimage3");
    regolit.classList.toggle("afterimage2");
    yadro.classList.toggle("afterimage4");
    bomElement.forEach((bom) => {
      bom.classList.toggle("afterAFT");
    });
    bomElement2.forEach((bom) => {
      bom.classList.toggle("afterRB");
    });
    bomElement3.forEach((bom) => {
      bom.classList.toggle("AFTER3");
    });
    bomElement4.forEach((bom) => {
      bom.classList.toggle("AFTER2");
    });
    bomElement5.forEach((bom) => {
      bom.classList.toggle("AFTER");
    });
  });
}
// второй экран астероиды и тени темный режим
function asteroidswhite() {
  const button = document.getElementById("toggleButton");
  const image5 = document.getElementById("blackShFive");
  const image55 = document.getElementById("whiteShFive");
  const image2 = document.getElementById("blackShTwo");
  const image22 = document.getElementById("whiteShTwo");
  const image3 = document.getElementById("blackShThree");
  const image33 = document.getElementById("whiteShThree");
  const image4 = document.getElementById("blackShFour");
  const image44 = document.getElementById("whiteShFour");
  const image1 = document.getElementById("blackShOne");
  const image11 = document.getElementById("whiteShOne");

  // Добавляем обработчик события клика на кнопку
  button.addEventListener("click", () => {
    // Переключаем классы для первой картинки
    if (image5.classList.contains("visible")) {
      image5.classList.remove("visible");
      image5.classList.add("hidden");
    } else {
      image5.classList.remove("hidden");
      image5.classList.add("visible");
    }
    if (image55.classList.contains("hidden")) {
      image55.classList.remove("hidden");
      image55.classList.add("visible");
    } else {
      image55.classList.remove("visible");
      image55.classList.add("hidden");
    }
    if (image2.classList.contains("visible")) {
      image2.classList.remove("visible");
      image2.classList.add("hidden");
    } else {
      image2.classList.remove("hidden");
      image2.classList.add("visible");
    }
    if (image22.classList.contains("hidden")) {
      image22.classList.remove("hidden");
      image22.classList.add("visible");
    } else {
      image22.classList.remove("visible");
      image22.classList.add("hidden");
    }
    if (image3.classList.contains("visible")) {
      image3.classList.remove("visible");
      image3.classList.add("hidden");
    } else {
      image3.classList.remove("hidden");
      image3.classList.add("visible");
    }
    if (image33.classList.contains("hidden")) {
      image33.classList.remove("hidden");
      image33.classList.add("visible");
    } else {
      image33.classList.remove("visible");
      image33.classList.add("hidden");
    }
    if (image4.classList.contains("visible")) {
      image4.classList.remove("visible");
      image4.classList.add("hidden");
    } else {
      image4.classList.remove("hidden");
      image4.classList.add("visible");
    }
    if (image44.classList.contains("hidden")) {
      image44.classList.remove("hidden");
      image44.classList.add("visible");
    } else {
      image44.classList.remove("visible");
      image44.classList.add("hidden");
    }
    if (image1.classList.contains("visible")) {
      image1.classList.remove("visible");
      image1.classList.add("hidden");
    } else {
      image1.classList.remove("hidden");
      image1.classList.add("visible");
    }
    if (image11.classList.contains("hidden")) {
      image11.classList.remove("hidden");
      image11.classList.add("visible");
    } else {
      image11.classList.remove("visible");
      image11.classList.add("hidden");
    }
  });
}
// условие для hover в темной режиме
function Hover() {
  const box = document.querySelector(".img1");
  const toggleHoverBtn = document.getElementById("toggleButton");

  // Добавляем обработчик события на кнопку
  toggleHoverBtn.addEventListener("click", function () {
    // Переключаем классы для hover
    if (box.classList.contains("img1")) {
      box.classList.remove("img1");
      box.classList.add("afterimage");
    }
  });
}
