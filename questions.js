// Mảng chứa các câu hỏi
const questions = [
    "Loại tình cảm mà bạn đang kiếm?",
    "Những cảm giác nào khiến bạn thích trong một mối quan hệ?",
    "Hành động tinh tế nào mà bạn ưng ý nhất?",
    "Gu bạn trai của bạn?"
];

let currentQuestionIndex = 0; // Biến đếm vị trí câu hỏi

// Hàm chuyển sang câu hỏi tiếp theo
function nextQuestion(answerIndex) {
    currentQuestionIndex++; // Tăng vị trí câu hỏi

    if (currentQuestionIndex < questions.length) {
        // Cập nhật nội dung câu hỏi mới
        document.getElementById("question-text").textContent = questions[currentQuestionIndex];
    } else {
        // Nếu đã hết câu hỏi, hiển thị hộp kết quả
        showResult();
    }
}

// Hiển thị hộp thoại thông báo kết quả
function showResult() {
    document.getElementById("question-box").style.display = "none"; // Ẩn hộp câu hỏi
    document.getElementById("result-box").style.display = "block"; // Hiện hộp kết quả
}

// Chuyển đến trang welcome.html khi bấm OK
function goToWelcome() {
    window.location.href = "welcome.html";
}