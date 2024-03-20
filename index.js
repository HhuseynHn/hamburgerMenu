/** @format */

let hambrBtn = document.querySelector(".fa-bars");
let navList = document.querySelector("nav");
let body = document.querySelector("body");
let hamrgrBtnDiv = document.querySelector(".hambr-icon");
let closeBtn = document.querySelector(".x-icon");
let closeBtnTogle = document.querySelector(".fa-xmark");

hambrBtn.addEventListener("click", () => {
  navList.classList.toggle("show");
  body.classList.toggle("all-screen");
  hamrgrBtnDiv.classList.add("close-btn");
  closeBtn.classList.toggle("show-x-btn");
});

closeBtnTogle.addEventListener("click", () => {
  closeBtn.classList.toggle("show-x-btn");
  navList.classList.remove("show");
  body.classList.remove("all-screen");
  hamrgrBtnDiv.classList.remove("close-btn");
});
