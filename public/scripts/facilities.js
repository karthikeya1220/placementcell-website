const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");

const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const box4 = document.getElementById("box-4");
const box5 = document.getElementById("box-5");
btn1.addEventListener("click", displayCard1);
btn2.addEventListener("click", displayCard2);
btn3.addEventListener("click", displayCard3);
btn4.addEventListener("click", displayCard4);
btn5.addEventListener("click", displayCard5);

let buttons = [box1, box2, box3, box4, box5]; //boxes
let boxes = [btn1, btn2, btn3, btn4, btn5]; //buttons
buttons[0].parentElement.style.padding = "0"
function displayCard1() {
  const box1 = document.getElementById("box-1");
  console.log("clc");
  // toogle class active
  
  if (box1.style.display === "none") {
    // set display of all buttons to none
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.display = "none";
      boxes[i].classList.remove('active');
      buttons[i].parentElement.style.padding = "0";
    }
    box1.style.display = "flex";
    box1.parentElement.style.padding = "2rem 0";
  } else {
    box1.style.display = "none";
  }
  this.classList.toggle("active");
}

function displayCard2() {
  const box2 = document.getElementById("box-2");
  console.log("clc");
  
  if (box2.style.display === "none") {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.display = "none";
      boxes[i].classList.remove('active');
      buttons[i].parentElement.style.padding = "0";
    }
    box2.style.display = "flex";
    box2.parentElement.style.padding = "2rem 0";
  } else {
    box2.style.display = "none";
  }
  this.classList.toggle("active");
}

function displayCard3() {
  const box3 = document.getElementById("box-3");
  
  console.log("clc");
  if (box3.style.display === "none") {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.display = "none";
      boxes[i].classList.remove('active');
      buttons[i].parentElement.style.padding = "0";
    }
    box3.style.display = "flex";
    box3.parentElement.style.padding = "2rem 0";
  } else {
    box3.style.display = "none";
  }
  this.classList.toggle("active");
}

function displayCard4() {
  const box4 = document.getElementById("box-4");
  
  console.log("clc");
  if (box4.style.display === "none") {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.display = "none";
      boxes[i].classList.remove('active');
      buttons[i].parentElement.style.padding = "0";
    }
    box4.style.display = "flex";
    box4.parentElement.style.padding = "2rem 0";
  } else {
    box4.style.display = "none";
  }
  this.classList.toggle("active");
}

function displayCard5() {
  const box5 = document.getElementById("box-5");
  
  console.log("clc");
  if (box5.style.display === "none") {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.display = "none";
      boxes[i].classList.remove('active');
      buttons[i].parentElement.style.padding = "0";
    }
    box5.style.display = "flex";
    box5.parentElement.style.padding = "2rem 0";
  } else {
    box5.style.display = "none";
  }
  this.classList.toggle("active");
}
