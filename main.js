// const yearBornElement = document.querySelector(".year-born");
// const year = parseInt(prompt("Введіть рік народження:"));

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const football = document.querySelector(".field");
// const ball = document.querySelector(".ball");
// let ballVelX = 0;
// let ba.
//       ballVelX = -ballVelX;
//     }
//   }

//   ballPosX += ballVelX;
//   ballPosY += ballVelY;

//   ballVelX *= 0.95;
//   ballVelY *= 0.95;

//   ball.style.transform = `translate(${ballPosX}px, ${ballPosY}px)`;
// }

// updateBallPosition();

// football.addEventListener("click", function (event) {
//   ballVelX = (event.offsetX - ballPosX) / 10;
//   ballVelY = (event.offsetY - ballPosY) / 10;
//   ballVelX = (event.offsetX + ballPosX) / 10;
//   ballVelY = (event.offsetY + ballPosY) / 10;
// });

// const football = document.querySelector(".field");
// const ball = document.querySelector(".ball");
// let ballVelX = 0;
// let ballVelY = 0;
// let ballPosX = 240;
// let ballPosY = 135;

// function updateBallPosition() {
//   requestAnimationFrame(updateBallPosition);

//   if (
//     ballPosY + ballVelY < 0 ||
//     ballPosY + ballVelY > football.clientHeight - ball.clientHeight
//   ) {
//     ballVelY = -ballVelY;
//   }
//   if (
//     ballPosX + ballVelX < 0 ||
//     ballPosX + ballVelX > football.clientWidth - ball.clientWidth
//   ) {
//     ballVelX = -ballVelX;
//   }
//   ballPosX += ballVelX;
//   ballPosY += ballVelY;

//   ballVelX *= 0.95;
//   ballVelY *= 0.95;

//   ball.style.transform = `translate(${ballPosX}px, ${ballPosY}px)`;
// }

// updateBallPosition();

// football.addEventListener("click", function (event) {
//   ballVelX = (event.offsetX - ballPosX) / 10;
//   ballVelY = (event.offsetY - ballPosY) / 10;
//   ballVelX = (event.offsetX + ballPosX) / 10;
//   ballVelY = (event.offsetY + ballPosY) / 10;
// });

// var sectionSelect = document.getElementById("sectionSelect");

// sectionSelect.addEventListener("change", function () {
//   var selectedOption = sectionSelect.options[sectionSelect.selectedIndex];

//   var selectedValue = selectedOption.value;
//   var selectedText = selectedOption.text;

//   console.log("", selectedValue);
//   console.log("", selectedText);
// });
// const birthYearInput = document.querySelector(".btn-title");
// const checkButton = document.querySelector(".btn-logo");
// const resultElement = document.getElementById("result");

// checkButton.addEventListener("click", () => {
//   const birthYear = parseInt(birthYearInput.value);

//   if (isNaN(birthYear)) {
//     resultElement.textContent = "Введіть коректний рік.";
//   } else {
//     if (
//       (birthYear % 4 === 0 && birthYear % 100 !== 0) ||
//       birthYear % 400 === 0
//     ) {
//       result.style.color = "green";
//       resultElement.textContent = `${birthYear} - високосний рік.`;
//     } else {
//       result.style.color = "red";
//       resultElement.textContent = `${birthYear} - не високосний рік.`;
//     }
//   }
// });

const minNumber = 1; // Мінімальне число для гри
const maxNumber = 100; // Максимальне число для гри
const secretNumber =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let attempts = 0;

function guessNumber() {
  const userGuessInput = document.getElementById("userGuess");
  const userGuess = parseInt(userGuessInput.value);

  if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
    alert(`Будь ласка, введіть число від ${minNumber} до ${maxNumber}`);
    return;
  }

  attempts++;

  if (userGuess === secretNumber) {
    displayResult(
      `Вітаємо! Ви вгадали число ${secretNumber} за ${attempts} спроб.`
    );
  } else if (userGuess < secretNumber) {
    displayResult(`Загадане число більше. Спробуйте ще раз.`);
  } else {
    displayResult(`Загадане число менше. Спробуйте ще раз.`);
  }
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
console.log("test");
