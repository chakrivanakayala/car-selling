/*==== navbar toggle ====*/
let navBar = document.querySelector(".navLink");
let menuBar = document.querySelector("#menuBtn");

menuBar.onclick = () => {
  navBar.classList.toggle("active");
};

/* ===  scroll section and sticky navbar === */

window.onscroll = () => {
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
};

/* ===  Swiper js ==== */

var swiper = new Swiper(".myHome", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* === counter section start === */
let valueDisplay = document.querySelectorAll(".num");
let interval = 1000;

valueDisplay.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-value"));

  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

/* === client section swiper === */

var swiper = new Swiper(".myClient", {
  slidePerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidePerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidePerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidePerView: 1,
      spaceBetween: 50,
    },
  },
});

/*  ==== Signup page section ===== */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Clear existing error messages
    document.querySelectorAll(".error").forEach((err) => err.remove());

    let isValid = true;

    // Validate First Name
    const firstName = document.getElementById("firstName");
    if (!/^[a-zA-Z]+$/.test(firstName.value)) {
      isValid = false;
      addError(firstName, "First Name should only contain letters.");
    }

    // Validate Last Name
    const lastName = document.getElementById("lastName");
    if (!/^[a-zA-Z]+$/.test(lastName.value)) {
      isValid = false;
      addError(lastName, "Last Name should only contain letters.");
    }

    // Validate Email
    const email = document.getElementById("email");
    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      isValid = false;
      addError(email, "Please enter a valid email address.");
    }

    // Validate Password
    const password = document.getElementById("password");
    if (password.value.length < 8) {
      isValid = false;
      addError(password, "Password must be at least 8 characters long.");
    }

    // Validate Re-entered Password
    const rePassword = document.getElementById("rePassword");
    if (password.value !== rePassword.value) {
      isValid = false;
      addError(rePassword, "Passwords do not match.");
    }

    // If all inputs are valid
    if (isValid) {
      alert("Successfully registered!");
      form.reset();
    }
  });

  // Function to add error messages
  function addError(input, message) {
    const error = document.createElement("span");
    error.className = "error";
    error.style.color = "red";
    error.style.fontSize = "0.9em";
    error.textContent = message;
    input.parentNode.appendChild(error);
  }

  // Handle Social Media Icons Clicks
  const socialIcons = document.querySelectorAll(".social i");
  socialIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      if (icon.classList.contains("facebook")) {
        alert("Redirecting to Facebook signup.");
      } else if (icon.classList.contains("google")) {
        alert("Redirecting to Google signup.");
      } else if (icon.classList.contains("twitter")) {
        alert("Redirecting to Twitter signup.");
      }
    });
  });
});

/* signup page end */