// sticky navbar function
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 100);
});

// responsive navbar function
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

// auto typed function
var typed = new Typed("#auto-typed", {
  strings: ["&nbsp; Full Stack Developer", "&nbsp; Software Engginer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

function sendMail() {
  var Params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_yy9lu87", "template_7uwleso", Params)
    .then(function (res) {
      alert("Message Sent", res.email);
    });
}
