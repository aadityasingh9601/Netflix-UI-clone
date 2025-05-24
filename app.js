let toggleBtns = document.querySelectorAll(".plus");
let faqans = document.querySelectorAll(".faqans");

for (let toggleBtn of toggleBtns) {
  toggleBtn.addEventListener("click", (event) => {
    //console.log(event.target.id);
    faqans[event.target.id].classList.toggle("toggle");
  });
}
