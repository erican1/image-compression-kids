// Quiz questions and answers
  // Event listener for the compress button
 
    document.getElementById('compress-btn').addEventListener('click', compressImage);

  


const quizData = [
    {
      question: 'What does image compression do?',
      options: ['Makes an image larger', 'Makes an image size smaller', 'Changes the image colors'],
      answer: 1
    },
    {
      question: 'Why is image compression important?',
      options: ['To make images load faster', 'To make images look better', 'To increase file size'],
      answer: 0
    },
    {
      question: 'What file format is commonly used for compressed images on the web?',
      options: ['JPEG', 'GIF', 'PNG'],
      answer: 0
    },
    {
      question: 'Which of the following is a common image compression technique?',
      options: ['Enlarging', 'Cropping', 'Resizing'],
      answer: 2
    },
    {
      question: 'What happens to the file size of an image after its compressed?',
      options: ['It becomes blurry', 'It stays the same', 'It becomes smaller'],
      answer: 2
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  // Function to handle image compression
  function compressImage() {

         
          document.getElementById('quiz-container').style.display = 'block';
          showNextQuestion();
          showQuizResult();

        };
   

  
  // Function to show the next quiz question
  function showNextQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    
    if (currentQuestion < quizData.length) {
      const questionElement = document.getElementById('question');
      const options = document.getElementById('options');
      const optionButtons = document.getElementsByClassName('option');
      
      questionElement.textContent = quizData[currentQuestion].question;
      
      for (let i = 0; i < quizData[currentQuestion].options.length; i++) {
        optionButtons[i].textContent = quizData[currentQuestion].options[i];
        optionButtons[i].addEventListener('click', checkAnswer);
      }
      
      quizContainer.style.display = 'block';
    } else {
      
      showQuizResult();
    }
  }
  
  // Function to check the selected answer
  function checkAnswer(e) {
    const selectedOption = e.target;
    const answer = quizData[currentQuestion].answer;
    const quizResult = document.getElementById('quiz-result');
    
    if (selectedOption.textContent === quizData[currentQuestion].options[answer]) {
      score++;
      quizResult.textContent = 'Correct!';
      quizResult.style.color = 'green';
    } else {
      quizResult.textContent = 'Wrong!';
      quizResult.style.color = 'red';
    }
    
    currentQuestion++;
    const quizResult1 = document.getElementById('quiz-result1');
    const resultPercentage = (score / quizData.length) * 100;
    
    quizResult1.textContent = `Quiz Result: ${resultPercentage}%`;

    
    // Remove the event listener after selecting an answer
    const optionButtons = document.getElementsByClassName('option');
    for (let i = 0; i < optionButtons.length; i++) {
      optionButtons[i].removeEventListener('click', checkAnswer);
    }
    
    setTimeout(showNextQuestion, 1000); // Delay before showing the next question
  }
  
  // Function to show the quiz result
  function showQuizResult() {
    const quizResult1 = document.getElementById('quiz-result1');
    const resultPercentage = (score / quizData.length) * 100;
    
    quizResult1.textContent = `Quiz Result: ${resultPercentage}%`;
   
  }
  

  