let plnElement = document.querySelector(".js-pln");
let eurElement = document.querySelector(".js-eur");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
event.preventDefault();
   let pln = plnElement.value;
   let eur = eurElement.value;

   let result = pln / eur;

  resultElement.innerText = result.toFixed(2);
});