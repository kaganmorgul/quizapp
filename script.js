const form = document.querySelector("#form");
const showscore = document.querySelector(".show-score");
const sendAnswer = document.querySelector("#buton");
const timeControl = document.querySelector(".timer");
const answer = document.querySelectorAll(".answer");
const loading = document.querySelector(".loading");
const message = document.querySelector(".message");

var score = 0;
var answers = [form.q1, form.q2, form.q3, form.q4];
let a = 60;

form.addEventListener("submit", (e) => {
  sendAnswer.style.display = "none";

  e.preventDefault();

  sendButton();

  answersControl();

  showScoreTwo();

  sayacControl();

  trueAnswersShow();
});
//congratulations message
const congratulations = () => {
  setTimeout(() => {
    message.innerHTML = `<span style="font-size: 20px; text-transform: capitalize;">Congratulations !!</span>`;
  }, 1000);
};
//Gif control
const loadingGif = () => {
  loading.style.display = "block";
};
//Answer control
const answersControl = () => {
  answers.forEach((a) => {
    if (a.value == "c") {
      score += 25;
    } else {
      score = score;
    }
  });
};
//Show answer interval
const showscorea = () => {
  let i = 0;
  const showtime = setInterval(() => {
    showscore.innerHTML = `Your Score : <span style="font-size:40px;">${i}</span>`;
    if (score == 0) {
      clearInterval(showtime);
      showscore.innerHTML = `Your Score : <span style="font-size:40px;">${0}</span>`;
    } else if (i == 100) {
      congratulations();
      showscore.innerHTML = `Your Score : <span style="font-size:40px;">${i}</span>`;
    } else if (i == score) {
      clearInterval(showtime);
    } else {
      i++;
    }
  }, 10);
};
//show answer
const showScoreTwo = () => {
  loadingGif();
  setTimeout(() => {
    showscorea();
  }, 2000);
};
//send answer Button events after submit
const sendButton = () => {
  clearInterval(timer);
};
//Timer
const timer = setInterval(() => {
  timeControl.innerHTML = `<span style="font-size:20px;">Time: ${a}</span>`;
  if (a == 0) {
    clearInterval(timer);
    finishTimeeforeSubmit();
    trueAnswersShow();
  } else {
    a--;
  }
}, 1000);
const sayacControl = () => {
  clearInterval(timer);
};
//After Finish Time
const finishTime = () => {
  sendButton();
};
//if time finish before submit
const finishTimeeforeSubmit = () => {
  finishTime();
  answersControl();
  showscorea();
  message.innerHTML = `<span style="font-size: 20px; text-transform: capitalize;">Time Out!!</span>`;
};
//true or false options
const trueAnswersShow = () => {
  answer.forEach((trueAnswers) => {
    if (trueAnswers.childNodes[1].value == "c") {
      trueAnswers.style.color = "green";
    } else {
      trueAnswers.style.color = "red";
    }
  });
};
