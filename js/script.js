let lists = document.querySelectorAll(".list");

function SwitchActiveList() {
  lists.forEach((list) => list.classList.remove("active"));
  this.classList.add("active");
}

lists.forEach((list) => list.addEventListener("click", SwitchActiveList));
