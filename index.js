const header = document.getElementsByClassName("header-side")[0];
const questionElements = document.querySelectorAll(".question-element");

console.log(questionElements);
console.log(header);

window.addEventListener("scroll", function () {
  window.scrollY >= 25
    ? (header.style.backgroundColor = "#6c63ef")
    : (header.style.backgroundColor = "#1e253c");
});

questionElements.forEach((element, i) => {
  console.log(element);

  element.addEventListener("click", function () {
    console.log(questionElements[i].lastChild.previousSibling);

    questionElements[i].lastChild.previousSibling.classList.toggle("no-display");
  });
});
