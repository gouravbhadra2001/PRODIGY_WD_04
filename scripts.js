const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.style.display = "none";
  }
});

menu.addEventListener("click", function (event) {
  event.stopPropagation();
});


const menus = ['home', 'about', 'works', 'certificates', 'philosophy'];
const sections = ['homepage', 'aboutMe', 'myWorks', 'achievements', 'myPhilosophy'];

const menu_items = document.querySelectorAll(".menu-item");

menu_items.forEach((item, index) => {
  item.addEventListener('click', () => {
    scrollToSection(index);
  });
});

function scrollToSection(index) {
  const section = document.getElementById(sections[index]);
  section.scrollIntoView({ behavior: "smooth" });
}
