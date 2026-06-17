/* ============================================
   common.js — منطق مشترك بين جميع الصفحات
   (الوضع الليلي)
   ============================================ */

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark ? "on" : "off");
  updateDarkBtnLabel(isDark);
}

function updateDarkBtnLabel(isDark) {
  const btn = document.getElementById("darkToggle");
  if (btn) btn.textContent = isDark ? "الوضع النهاري" : "الوضع الليلي";
}

// استرجاع تفضيل الوضع الليلي عند تحميل أي صفحة
// الوضع الافتراضي هو الليلي ما لم يختر المستخدم النهاري صراحةً
document.addEventListener("DOMContentLoaded", function () {
  const isDark = localStorage.getItem("darkMode") !== "off";
  document.body.classList.toggle("dark-mode", isDark);
  updateDarkBtnLabel(isDark);
});
