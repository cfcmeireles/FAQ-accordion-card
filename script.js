(function (){
  "use strict";

  const questions = document.querySelectorAll(".questions");
  const answers = document.querySelectorAll(".answers");
  
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function(){
      let height = answers[i].scrollHeight;
      console.log(height);
      answers[i].classList.toggle("active");
      questions[i].classList.toggle("active");
    });
  }
})();