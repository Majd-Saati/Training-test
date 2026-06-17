/* ============================================
   blog.js — عرض قائمة المقالات مع الباجينيشن
   يعتمد على البيانات في data.js
   ============================================ */

let currentPage = 1;

function renderBlogList() {
  const container = document.getElementById("blogList");
  if (!container) return;

  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);

  // حصر الصفحة ضمن الحدود
  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;

  // اقتطاع مقالات الصفحة الحالية فقط
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = BLOG_POSTS.slice(start, start + POSTS_PER_PAGE);

  let html = "";
  pagePosts.forEach(function (post) {
    html +=
      '<div class="col-12 col-md-6 col-lg-4">' +
      '<article class="card h-100">' +
      '<img src="' + post.image + '" class="card-img-top" alt="' + post.title + '">' +
      '<div class="card-body d-flex flex-column">' +
      '<span class="badge badge-cat align-self-start mb-2">' + post.category + "</span>" +
      '<h5 class="card-title">' + post.title + "</h5>" +
      '<p class="card-date mb-2">' + post.date + " — " + post.author + "</p>" +
      '<p class="card-text flex-grow-1">' + post.excerpt + "</p>" +
      '<a href="post.html?id=' + post.id + '" class="btn btn-brand mt-2">قراءة المقال</a>' +
      "</div></article></div>";
  });

  container.innerHTML = html;
  renderPagination(totalPages);
}

// بناء أزرار الترقيم (الباجينيشن)
function renderPagination(totalPages) {
  const nav = document.getElementById("pagination");
  if (!nav) return;

  let html = '<ul class="pagination justify-content-center flex-wrap">';

  html +=
    '<li class="page-item ' + (currentPage === 1 ? "disabled" : "") + '">' +
    '<button class="page-link" onclick="goToPage(' + (currentPage - 1) + ')">السابق</button></li>';

  for (let i = 1; i <= totalPages; i++) {
    html +=
      '<li class="page-item ' + (i === currentPage ? "active" : "") + '">' +
      '<button class="page-link" onclick="goToPage(' + i + ')">' + i + "</button></li>";
  }

  html +=
    '<li class="page-item ' + (currentPage === totalPages ? "disabled" : "") + '">' +
    '<button class="page-link" onclick="goToPage(' + (currentPage + 1) + ')">التالي</button></li>';

  html += "</ul>";
  nav.innerHTML = html;
}

// الانتقال إلى صفحة محدّدة
function goToPage(page) {
  currentPage = page;
  renderBlogList();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", renderBlogList);
