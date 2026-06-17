/* ============================================
   post.js — عرض مقال مفرد في صفحته الخاصة
   يقرأ معرّف المقال من الرابط ?id= ويعتمد على data.js
   ============================================ */

function renderSinglePost() {
  const container = document.getElementById("postContainer");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const post = getPostById(params.get("id"));

  if (!post) {
    container.innerHTML =
      '<div class="alert alert-warning text-center">عذرًا، المقال المطلوب غير موجود. ' +
      '<a href="blog.html">العودة إلى المدونة</a></div>';
    return;
  }

  // تحديث عنوان التبويب
  document.title = post.title + " | مشروع الويب التفاعلي";

  let paragraphs = "";
  post.content.forEach(function (par) {
    paragraphs += '<p class="post-paragraph">' + par + "</p>";
  });

  container.innerHTML =
    '<nav aria-label="breadcrumb"><ol class="breadcrumb">' +
    '<li class="breadcrumb-item"><a href="index.html">الرئيسية</a></li>' +
    '<li class="breadcrumb-item"><a href="blog.html">المدونة</a></li>' +
    '<li class="breadcrumb-item active" aria-current="page">' + post.title + "</li>" +
    "</ol></nav>" +
    '<span class="badge badge-cat mb-3">' + post.category + "</span>" +
    '<h1 class="post-title">' + post.title + "</h1>" +
    '<p class="card-date mb-4">' + post.date + " — بقلم " + post.author + "</p>" +
    '<img src="' + post.image + '" class="img-fluid rounded mb-4 w-100" alt="' + post.title + '">' +
    paragraphs +
    '<hr class="my-4"><a href="blog.html" class="btn btn-outline-secondary">→ العودة إلى المدونة</a>';
}

document.addEventListener("DOMContentLoaded", renderSinglePost);
