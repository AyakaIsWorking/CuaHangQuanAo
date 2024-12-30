window.onscroll = function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
};

// Khi người dùng nhấp vào nút Scroll to Top
document.getElementById("scrollToTopBtn").onclick = function() {
  document.body.scrollTop = 0; // Cho Safari
  document.documentElement.scrollTop = 0; // Cho Chrome, Firefox, IE và Opera
};

// Hiển thị thông báo khi nhấp vào một sản phẩm
const productElements = document.querySelectorAll('.product');
productElements.forEach(product => {
  product.addEventListener('click', function() {
      const productName = this.querySelector('p').textContent; // Lấy tên sản phẩm
      alert("Bạn đã chọn sản phẩm: " + productName);
  });
});