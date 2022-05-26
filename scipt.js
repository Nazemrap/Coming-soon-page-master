"use strict";

const submit = document.querySelector(".submit-btn");
const errorMail = document.querySelector(".error-mail");
const errorMailMobile = document.querySelector(".error-mail-mobile");
const email = document.querySelector(".email-adress");

const saveMail = function () {
  let mailtest = email.value;
  return mailtest;
};

const checkMail = function (mail) {
  const symboleTest = /\S+@\S+\.\S+/;
  return symboleTest.test(mail);
};

submit.addEventListener("click", function (e) {
  email.classList.remove("error-mail-border");
  email.classList.remove("email-valid");
  errorMailMobile.classList.remove("email-valid");

  e.preventDefault();
  saveMail();
  console.log(email.value);
  console.log(!checkMail(email.value));
  if (!checkMail(email.value)) {
    errorMail.textContent = "Email not valide, please try again.";
    errorMailMobile.textContent = "Email not valide, please try again.";
    email.classList.add("error-mail-border");
  } else if (checkMail(email.value)) {
    errorMail.textContent = "Email valide, thank you !";
    errorMailMobile.textContent = "Email valide, thank you !";
    errorMail.classList.add("email-valid");
    errorMailMobile.classList.add("email-valid");
  }
});
