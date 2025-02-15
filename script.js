document.addEventListener("DOMContentLoaded", function() {
    // Hiệu ứng lấp lánh nền
    for (let i = 0; i < 20; i++) {
        let sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = Math.random() * window.innerWidth + "px";
        sparkle.style.top = Math.random() * window.innerHeight + "px";
        sparkle.style.animationDuration = (Math.random() * 2 + 1) + "s";
        document.body.appendChild(sparkle);
    }

    // Chuyển trang khi bấm nút OK
    const okBtn = document.getElementById("ok-btn");
    if (okBtn) {
        okBtn.addEventListener("click", function() {
            window.location.href = "Không phải tớ, bấm vào cậu ở trên nha.html";
        });
    }

    // Quay lại trang Welcome nếu có nút Back
    const backBtn = document.getElementById("back-btn");
    if (backBtn) {
        backBtn.addEventListener("click", function() {
            window.location.href = "welcome.html";
        });
    }

    // Xử lý khi bấm nút "Chấp nhận" trong trang CV
    const acceptBtn = document.getElementById("accept-btn");
    if (acceptBtn) {
        acceptBtn.addEventListener("click", function() {
            alert("Chúc mừng! Bạn đã có một anh bạn trai chất lượng! 🎉");
        });
    }
});
