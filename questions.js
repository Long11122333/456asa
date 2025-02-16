const questions = [
    {
        question: "Loại tình cảm mà bạn đang kiếm?",
        answers: ["Tình yêu chân thành", "Mối quan hệ vui vẻ"]
    },
    {
        question: "Những cảm giác nào khiến bạn thích trong một mối quan hệ?",
        answers: ["An toàn", "Sự quan tâm", "Ấm áp", "Hài hước"]
    },
    {
        question: "Hành động tinh tế nào mà bạn ưng ý nhất?",
        answers: ["Nhớ sinh nhật", "Dành thời gian", "Chia sẻ khó khăn", "Bất ngờ lãng mạn"]
    },
    {
        question: "Gu bạn trai của bạn?",
        answers: ["Dễ thương", "Trưởng thành", "Hài hước", "Lạnh lùng"]
    }
];

let currentQuestionIndex = 0; // Biến theo dõi câu hỏi hiện tại

// Hàm hiển thị câu hỏi tiếp theo
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult(); // Nếu hết câu hỏi, hiện hộp thoại kết quả
        return;
    }

    const questionText = document.getElementById("question-text");
    const answerButtons = document.querySelector(".answer-buttons");

    // Lấy câu hỏi hiện tại
    const currentQuestion = questions[currentQuestionIndex];

    // Cập nhật nội dung câu hỏi
    questionText.innerText = currentQuestion.question;

    // Xóa các nút cũ
    answerButtons.innerHTML = "";

    // Thêm các nút câu trả lời
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = function () {
            nextQuestion();
        };
        answerButtons.appendChild(button);
    });
}

// Hàm chuyển sang câu hỏi tiếp theo
function nextQuestion() {
    currentQuestionIndex++; // Tăng câu hỏi lên 1
    showQuestion(); // Hiển thị câu hỏi mới
}

// Hiển thị hộp thoại kết quả
function showResult() {
    document.getElementById("question-box").style.display = "none"; // Ẩn hộp câu hỏi
    document.getElementById("result-box").style.display = "block"; // Hiện thông báo kết quả
}

// Chuyển đến trang welcome.html
function goToWelcome() {
    window.location.href = "welcome.html";
}

// Khi trang tải xong, hiển thị câu hỏi đầu tiên
document.addEventListener("DOMContentLoaded", showQuestion);
