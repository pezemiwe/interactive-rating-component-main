let btns = document.querySelectorAll(".card__numbers--num");
let submit = document.querySelector(".card__button");
let num = document.querySelector(".card__num");
console.log(num);

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const isActive = btn.classList.value.includes("card__numbers--active");
    deActivate();
    !isActive && btn.classList.toggle("card__numbers--active");
  });
});

function deActivate() {
  const acts = document.querySelectorAll(
    ".card__numbers--num.card__numbers--active"
  );

  acts.forEach((btn) => {
    btn.classList.toggle("card__numbers--active");
  });
}

submit.addEventListener("click", () => {
  btns.forEach((btn) => {
    if (!btn.classList.value.includes("card__numbers--active")) {
      window.location.href = "#";
    } else {
      deActivate();
      document.querySelector(".page1").style.display = "none";
      document.querySelector(".page2").style.display = "flex";
      num.innerText = btn.innerHTML;
    }
  });
});
