
const listImage =document.querySelector('.list-images')
const imgs = document.getElementsByTagName('img')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const length = imgs.length
let current = 0

const handleChangeSlide = () =>{
    if (current == length -1 ){
        current = 0
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(0px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-' + current).classList.add('active')
    } else {
        current ++
        let width =  imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-' + current).classList.add('active')
    }
}

let handleEventChangeSlide = setInterval(handleChangeSlide,4000)

btnRight.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide)
    handleChangeSlide()
    handleEventChangeSlide = setInterval(handleChangeSlide,4000)
})

btnLeft.addEventListener('click',() => {
    clearInterval(handleEventChangeSlide)
    if (current == 0 ){
        current = length - 1
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 *current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-' + current).classList.add('active')

    } else {
        current --
        let width =  imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-' + current).classList.add('active')
    }
    handleEventChangeSlide = setInterval(handleChangeSlide,4000)
})
// Trượt sản phẩm>
// Định vị hai mũi tên
document.addEventListener("DOMContentLoaded", function () {
    const btns = document.querySelector('.btns'); 
    const container = document.querySelector('.container'); 

    // Đặt container làm phần tử cha để định vị nút bên trong
    container.style.position = "relative"; 
    btns.style.position = "absolute";
    btns.style.top = "50%";  
    btns.style.left = "0";  
    btns.style.width = "100%";  
    btns.style.transform = "translateY(-50%)";  
    btns.style.display = "flex";
    btns.style.justifyContent = "space-between";  
});
// đinh vị mũi tên

document.addEventListener("DOMContentLoaded", function () {
    // Chọn hai nút mũi tên
    const btnLeft = document.querySelector('.bttn-left i')
    const btnRight = document.querySelector('.bttn-right i')

    // Tăng kích thước lên (cỡ chữ lớn hơn)
    btnLeft.style.fontSize = "30px"
    btnRight.style.fontSize = "30px"

    // Hoặc có thể dùng scale để phóng to toàn bộ icon
    btnLeft.style.transform = "scale(1.5)"
    btnRight.style.transform = "scale(1.5)"
})
document.addEventListener("DOMContentLoaded", function () {
    const listImage = document.querySelector('.product-list'); // Chọn danh sách sản phẩm
    const imgs = document.querySelectorAll('.product-item'); // Lấy tất cả sản phẩm
    const btnLeft = document.querySelector('.bttn-left'); // Nút mũi tên trái
    const btnRight = document.querySelector('.bttn-right'); // Nút mũi tên phải
    const productWidth = imgs[0].offsetWidth + 20; // Độ rộng của 1 sản phẩm (cộng thêm margin)
    const totalProducts = imgs.length; // Số lượng sản phẩm
    let current = 0; // Chỉ số sản phẩm hiện tại

    // Hàm trượt sản phẩm
    const handleChangeSlide = (direction) => {
        if (direction === 'next') {
            if (current < totalProducts - 1) {
                current++; // Tăng vị trí nếu chưa đến cuối
            } else {
                current = 0; // Quay lại đầu nếu hết sản phẩm
            }
        } else {
            if (current > 0) {
                current--; // Giảm vị trí nếu chưa đến đầu
            } else {
                current = totalProducts - 1; // Quay lại cuối nếu đang ở đầu
            }
        }

        listImage.style.transform = `translateX(-${productWidth * current}px)`; // Di chuyển danh sách sản phẩm
    };

    // Xử lý sự kiện khi nhấn nút phải
    btnRight.addEventListener('click', () => {
        handleChangeSlide('next');
    });

    // Xử lý sự kiện khi nhấn nút trái
    btnLeft.addEventListener('click', () => {
        handleChangeSlide('prev');
    });
});



// trượt sản phẩm<





// phân trang tin tức
document.addEventListener("DOMContentLoaded", function() {
    const itemsPerPage = 6; // Số lượng tin tức trên mỗi trang
    let currentPage = 1;

    const newsItems = document.querySelectorAll(".news-item"); // Lấy danh sách tin tức
    const totalPages = Math.ceil(newsItems.length / itemsPerPage);

    function showPage(page) {
        let start = (page - 1) * itemsPerPage;
        let end = start + itemsPerPage;

        newsItems.forEach((item, index) => {
            if (index >= start && index < end) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

        document.getElementById("pageNumber").textContent = page;
    }

    document.getElementById("prevPage").addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.getElementById("nextPage").addEventListener("click", function() {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    showPage(currentPage);
});
// Danh sách chi tiết khi nhấn vào xem thêm ở tin tức
document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra xem đang ở trang chi tiết hay không
    if (document.getElementById("news-detail")) {
        // Lấy tham số 'id' từ URL
        const urlParams = new URLSearchParams(window.location.search);
        const newsId = urlParams.get("id");

        if (!newsId) {
            document.getElementById("news-detail").innerHTML = "<p>Không tìm thấy bài viết.</p>";
            return;
        }

        // Danh sách bài viết mẫu (có thể thay bằng API hoặc JSON)
        const newsData = [
            { id: "1", title: "Bí quyết dưỡng da", image: "../public/img/tintuc1.png", content: "Nội dung chi tiết bài viết 1..." },
            { id: "2", title: "Xu hướng mỹ phẩm", image: "../public/img/tintuc2.png", content: "Nội dung chi tiết bài viết 2..." },
            { id: "3", title: "Cách trang điểm tự nhiên", image: "../public/img/tintuc3.png", content: "Nội dung chi tiết bài viết 3..." }
        ];

        // Tìm bài viết theo id
        const article = newsData.find(item => item.id === newsId);

        if (article) {
            document.getElementById("news-title").textContent = article.title;
            document.getElementById("news-image").src = article.image;
            document.getElementById("news-content").textContent = article.content;
        } else {
            document.getElementById("news-detail").innerHTML = "<p>Bài viết không tồn tại.</p>";
        }
    }
});
// danh sách khi nhấn xem thêm ở sản phẩm 
document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra xem có phần hiển thị chi tiết sản phẩm không
    if (document.getElementById("news-detail")) {
        // Lấy tham số 'id' từ URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get("id");

        if (!productId) {
            document.getElementById("news-detail").innerHTML = "<p>Không tìm thấy sản phẩm.</p>";
            return;
        }

        // Danh sách sản phẩm mẫu (có thể thay bằng API hoặc JSON)
        const productData = [
            { id: "1", title: "Kem dưỡng da", image: "../public/img/sanpham1.png", content: "Kem dưỡng da giúp cấp ẩm và bảo vệ làn da khỏi tác nhân gây hại." },
            { id: "2", title: "Kem dưỡng ẩm", image: "../public/img/sanpham2.png", content: "Kem dưỡng ẩm giúp da mềm mịn, phù hợp cho mọi loại da." },
            { id: "3", title: "Serum dưỡng ẩm", image: "../public/img/sanpham3.png", content: "Serum dưỡng ẩm giúp tái tạo da, ngăn ngừa lão hóa." },
            { id: "4", title: "Kem trắng da", image: "../public/img/sanpham4.png", content: "Kem trắng da giúp làm sáng da tự nhiên, không gây kích ứng." },
            { id: "5", title: "Kem dưỡng trắng", image: "../public/img/sanpham5.jpg", content: "Kem dưỡng trắng với công thức đặc biệt giúp da trắng hồng." },
            { id: "6", title: "Serum dưỡng trắng", image: "../public/img/sanpham6.jpg", content: "Serum dưỡng trắng với thành phần thiên nhiên giúp cải thiện làn da." }
        ];

        // Tìm sản phẩm theo id
        const product = productData.find(item => item.id === productId);

        if (product) {
            document.getElementById("news-title").textContent = product.title;
            document.getElementById("news-image").src = product.image;
            document.getElementById("news-content").textContent = product.content;
        } else {
            document.getElementById("news-detail").innerHTML = "<p>Sản phẩm không tồn tại.</p>";
        }
    }
});
// form thông báo cảm ơn bạn đã gửi thông tin
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form"); // Lấy form liên hệ
    const notification = document.getElementById("notification"); // Lấy hộp thoại thông báo

    if (form && notification) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Ngăn form gửi đi

            // Hiển thị thông báo
            notification.style.display = "block";
            notification.style.opacity = "1";
            notification.style.animation = "fadeIn 0.5s ease-in-out";

            // Tự động ẩn sau 3 giây
            setTimeout(() => {
                notification.style.animation = "fadeOut 0.5s ease-in-out";
                setTimeout(() => {
                    notification.style.display = "none";
                }, 500);
            }, 3000);
        });
    }
});
// form đăng ký
function registerSuccess() {
    Swal.fire({
        title: "Đăng ký thành công!",
        text: "Chúc mừng bạn đã đăng ký tài khoản.",
        icon: "success",
        confirmButtonText: "OK"
    });
}







