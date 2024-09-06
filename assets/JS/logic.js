const themeSwitcher = document.querySelector("#theme");
const container = document.querySelector(".container");

let mode = "dark";

themeSwitcher.addEventListener("click", function () {
  console.log("switchclick");
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  } else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});
