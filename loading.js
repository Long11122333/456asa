document.addEventListener("DOMContentLoaded", function () {
    let loadingBar = document.querySelector(".loading-bar");
    let popup = document.querySelector(".popup");

    // Tăng thanh loading trong 10s
    setTimeout(() => {
        loadingBar.style.width = "100%";
    }, 100);

    // Hiện hộp thoại sau 10s
    setTimeout(() => {
        popup.style.display = "block";
    }, 10000);

    // Xử lý khi chọn "Có"
    document.getElementById("yes-btn").addEventListener("click", function () {
        window.location.href = "questions.html";
    });

    // Xử lý khi chọn "Không"
    document.getElementById("no-btn").addEventListener("click", function () {
        popup.style.display = "none";
    });
});