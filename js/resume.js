/* ============================================
   resume.js — تفاعلات صفحة السيرة الذاتية
   ============================================ */

// ظهور تدريجي للأقسام عند التمرير
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".timeline-card, .skill-group");

  // تهيئة الحالة الأولية
  cards.forEach(function (el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // متصفحات قديمة: إظهار مباشر
    cards.forEach(function (el) {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }
});
