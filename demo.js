// demo.js

document.addEventListener("DOMContentLoaded", function () {
    // Điều khiển thanh điều hướng sản phẩm
    const productMenu = document.querySelector('.product-menu');
    const productNav = document.querySelector('.secondary-nav li:nth-child(2)');

    productNav.addEventListener('mouseover', function () {
        productMenu.style.display = 'block';
    });

    productNav.addEventListener('mouseout', function () {
        productMenu.style.display = 'none';
    });

    // Điều khiển carousel (ảnh động)
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].style.display = 'block';
    }

    function showPreviousImage() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        images[currentIndex].style.display = 'block';
    }

    // Tự động chuyển đổi ảnh mỗi 3 giây
    setInterval(showNextImage, 3000);

    // Thêm sự kiện cho nút "Mua ngay"
    const buyButtons = document.querySelectorAll('.product-item button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Sản phẩm đã được thêm vào giỏ hàng!');
        });
    });

    // Thay đổi hiển thị của các sản phẩm (demo)
    images.forEach((img, index) => {
        if (index !== currentIndex) {
            img.style.display = 'none';
        }
    });
});
