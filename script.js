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

//send email function
const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_f8ncqps";
  const templateID = "template_n8ke14r";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Message";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Message";
      alert(JSON.stringify(err));
    }
  );
});

// function sendMail() {
//   var params = {
//     from_name: document.getElementById("fullName").value,
//     email_id: document.getElementById("email_id").value,
//     phone_id: document.getElementById("phone_id").value,
//     message: document.getElementById("message").value,
//   };
//   emailjs
//     .send("service_f8ncqps", "template_c83h1hs", params)
//     .then(function (res) {
//       alert("Success Send!" + res.status);
//     });
// }
