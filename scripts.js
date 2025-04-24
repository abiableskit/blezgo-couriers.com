
// ========== Navbar Toggle (Bootstrap handled, this is just for extra confirmation)
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", function () {
      navbarCollapse.classList.toggle("show");
    });
  }
});

// ========== Login Form Validation
if (document.getElementById("login-form")) {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("login-message");

    if (username === "abia" && password === "abia03") {
      message.style.color = "green";
      message.textContent = "Login successful! Redirecting...";
      setTimeout(() => (window.location.href = "dashboard.html"), 1500);
    } else {
      message.style.color = "red";
      message.textContent = "Invalid username or password.";
    }
  });
}

// ========== Profile Save
if (document.getElementById("profile-form")) {
  const profileForm = document.getElementById("profile-form");
  profileForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    const profileData = { fullName, email, phone };
    localStorage.setItem("blezgoUserProfile", JSON.stringify(profileData));
    alert("Profile saved successfully!");
  });
}

// ========== Quote Calculator
if (document.getElementById("quote-form")) {
  const quoteForm = document.getElementById("quote-form");
  quoteForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const continent = document.getElementById("continent").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("quote-result");

    const baseRate = 10;
    const continentFactor = {
      "Africa": 1200,
      "Asia": 2500,
      "Europe": 3800,
      "North America": 5000,
      "South America": 4500,
      "Oceania": 6000
    };

    if (continent && weight && continentFactor[continent]) {
      const cost = (baseRate + weight) * continentFactor[continent];
      result.textContent = "Estimated Shipping Cost: BWP " + cost.toLocaleString();
    } else {
      result.textContent = "Please select a valid continent and enter weight.";
    }
  });
}
