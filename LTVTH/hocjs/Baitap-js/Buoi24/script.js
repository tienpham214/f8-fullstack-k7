$(document).ready(function () {
  let currentQuestionIndex = 0;
  let score = 0;
  let quizzes = [];

  function loadQuizData() {
    $.getJSON("http://localhost:3000/quizzes", function (data) {
      quizzes = data;
      displayQuestion();
    });
  }

  function displayQuestion() {
    const currentQuestion = quizzes[currentQuestionIndex];
    $("#question-container").text(currentQuestion.question);
    $("#options-container").empty();

    currentQuestion.options.forEach((option) => {
      const optionElement = $('<div class="option"></div>').text(option);
      $("#options-container").append(optionElement);

      optionElement.click(function () {
        if (Array.isArray(currentQuestion.correctAnswers)) {
          const correct = currentQuestion.correctAnswers.includes(option);
          optionElement.addClass(correct ? "correct" : "incorrect");
        } else {
          const correct = option === currentQuestion.correctAnswer;
          optionElement.addClass(correct ? "correct" : "incorrect");
        }

        if (correct) {
          score++;
        }

        $("#next-button").removeClass("d-none");
      });
    });
  }

  $("#start-button").click(function () {
    $("#start-screen").addClass("d-none");
    $("#quiz-screen").removeClass("d-none");
    loadQuizData();
  });

  $("#next-button").click(function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizzes.length) {
      displayQuestion();
      $(this).addClass("d-none");
    } else {
      $("#quiz-screen").addClass("d-none");
      $("#result-screen").removeClass("d-none");
      $("#score").text(score);
    }
  });

  $("#play-again-button").click(function () {
    currentQuestionIndex = 0;
    score = 0;
    $("#result-screen").addClass("d-none");
    $("#quiz-screen").removeClass("d-none");
    displayQuestion();
  });
});
