function showRegister() {
  document.getElementById("login-box").classList.add("hidden");
  document.getElementById("register-box").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("register-box").classList.add("hidden");
  document.getElementById("login-box").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = {
        username: document.getElementById("reg-username").value,
        email: document.getElementById("reg-email").value,
        password: document.getElementById("reg-password").value
      };
      localStorage.setItem("user_" + user.email, JSON.stringify(user));
      alert("ثبت‌نام با موفقیت انجام شد ✅");
      showLogin();
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
      const userData = JSON.parse(localStorage.getItem("user_" + email));

      if (userData && userData.password === password) {
        localStorage.setItem("current_user", JSON.stringify(userData));
        window.location.href = "dashboard.html";
      } else {
        alert("ایمیل یا رمز عبور اشتباه است ❌");
      }
    });
  }
});

// ذخیره کاربر در LocalStorage هنگام ثبت‌نام
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register-form");
  const loginForm = document.getElementById("login-form");

  // ثبت‌نام
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("reg-username").value.trim();
      const email = document.getElementById("reg-email").value.trim();
      const password = document.getElementById("reg-password").value;

      if (!username || !email || !password) {
        alert("لطفاً همه فیلدها را پر کنید.");
        return;
      }

      const userData = { username, email, password };
      localStorage.setItem("user_" + email, JSON.stringify(userData));

      alert("ثبت‌نام با موفقیت انجام شد ✅");
      window.location.href = "log.html"; // برگرد به صفحه ورود
    });
  }

  // ورود
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value;

      const userData = JSON.parse(localStorage.getItem("user_" + email));

      if (!userData || userData.password !== password) {
        alert("ایمیل یا رمز عبور اشتباه است ❌");
        return;
      }

      // ذخیره وضعیت ورود
      localStorage.setItem("current_user", JSON.stringify(userData));
      alert("خوش آمدید، " + userData.username + " 🌟");
      window.location.href = "dashboard.html";
    });
  }
});

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const userData = JSON.parse(localStorage.getItem("user_" + email));

    if (userData && userData.password === password) {
      localStorage.setItem("current_user", JSON.stringify(userData));
      window.location.href = "dashboard.html"; // هدایت به داشبورد
    } else {
      alert("ایمیل یا رمز عبور اشتباه است ❌");
    }
  });
}
