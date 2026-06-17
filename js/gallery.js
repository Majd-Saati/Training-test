/* ============================================
   gallery.js — فلترة عناصر المعرض حسب التصنيف
   ============================================ */

function filterGallery(category, clickedBtn) {
  const items = document.querySelectorAll(".gallery-item");
  items.forEach(function (item) {
    const itemCat = item.getAttribute("data-category");
    if (category === "all" || itemCat === category) {
      item.classList.remove("d-none");
    } else {
      item.classList.add("d-none");
    }
  });

  document.querySelectorAll(".filter-btn").forEach(function (b) {
    b.classList.remove("active");
  });
  clickedBtn.classList.add("active");
}
