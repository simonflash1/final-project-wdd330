const gridBtn = document.getElementById("grid-btn");
const listBtn = document.getElementById("list-btn");

gridBtn.addEventListener("click", () => {
    //console.log("grid");
  document.body.classList.remove("list-view");
  document.body.classList.add("grid-view");
});

listBtn.addEventListener("click", () => {
    //console.log("list");
  document.body.classList.remove("grid-view");
  document.body.classList.add("list-view");
});