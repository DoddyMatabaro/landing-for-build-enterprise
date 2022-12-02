window.onscroll = ()=>{stickedMenu()};

const navbar = document.getElementById("menu");
const sticky = navbar.offsetTop;

const stickedMenu = ()=> {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    console.log("main");
  } else {
    navbar.classList.remove("sticky");
    console.log("faux");
  }
}

console.log(window.pageYOffset);