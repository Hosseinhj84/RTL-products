document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("current_user"));
  if (!user) {
    window.location.href = "log.html"; // اگر کاربر وارد نشده بود
    return;
  }

  // نمایش اطلاعات کاربر
  document.getElementById("username").textContent = user.username || "کاربر";
  document.getElementById("last-login").textContent = new Date().toLocaleString(
    "fa-IR"
  );

  // نمایش اطلاعات فرضی (مثلاً تعداد اپ‌ها)
  const apps =
    JSON.parse(localStorage.getItem("user_apps_" + user.email)) || [];
  document.getElementById("apps-count").textContent = apps.length;

  const menuItems = document.querySelectorAll(".menu-item");
  const pageTitle = document.getElementById("page-title");
  const pageContent = document.getElementById("page-content");

  menuItems.forEach((item , index) => {
    item.addEventListener("click", () => {
      menuItems.forEach((i) =>{ 
        i.classList.remove("active")
        
      });
      item.classList.add("active");
      pageTitle.textContent = item.textContent.trim();
      pageContent.classList.add("fade-in");
        if (index === 0) {
          pageContent.innerHTML = `
        <div class="cards">
          <div class="card glass">
            <i data-lucide="boxes"></i>
            <div>
              <h3>اپ‌های نصب‌شده</h3>
              <p id="apps-count">۳</p>
            </div>
          </div>
          <div class="card glass">
            <i data-lucide="brain"></i>
            <div>
              <h3>پروژه‌های فعال</h3>
              <p>۱</p>
            </div>
          </div>
          <div class="card glass">
            <i data-lucide="clock-9"></i>
            <div>
              <h3>آخرین ورود</h3>
              <p id="last-login">۱۴۰۴/۰۸/۰۷</p>
            </div>
          </div>
        </div>
      `;
        }else if (index === 1) {
          pageContent.innerHTML = `
        <div class="cards">
          <div class="card glass">
            <i data-lucide="boxes"></i>
            <div>
              <h3>اپلیکیشن ها</h3>
              <p id="apps-count">۳</p>
            </div>
          </div>
        </div>
      `;
        }else if (index === 2){
          pageContent.innerHTML = `
        <div class="cards">
          <div class="card glass">
            <i data-lucide="boxes"></i>
            <div>
              <h3>آمار</h3>
              <p id="apps-count">۳</p>
            </div>
          </div>
        </div>
      `;
        }else if (index == 3){
          pageContent.innerHTML = `
        <div class="cards">
          <div class="card glass">
            <i data-lucide="boxes"></i>
            <div>
              <h3>تنظیمات</h3>
              <p id="apps-count">۳</p>
            </div>
          </div>
        </div>
      `;
        }
      setTimeout(() => pageContent.classList.remove("fade-in"), 500);
    });
  });

  // دکمه خروج
  document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("current_user");
    window.location.href = "log.html";
  });
});

// 📱 مدیریت منوی همبرگری در موبایل
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.getElementById("menu-toggle");

  if (window.innerWidth <= 768) {
    toggleBtn.style.display = "flex";
  }

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  // بستن منو هنگام انتخاب آیتم
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 768) sidebar.classList.remove("active");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      sidebar.classList.remove("active");
      toggleBtn.style.display = "none";
    } else {
      toggleBtn.style.display = "flex";
    }
  });
});
