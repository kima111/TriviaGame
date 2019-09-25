
      $(document).ready(function() {
      //a1 is the correct answer
      var questAnswers = {
          question1 : {
            q1:"How many cups do you have?",
            a1:"Only 1",
            a2:"less than 10",
            a3:"less than 20",
            a4:"I lost count"
          },
          question2 : {
            q1:"How many apps do you have?",
            a1:"I don't have a smart phone",
            a2:"less than 20",
            a3:"my phone is constantly out of memory",
            a4:"less than 5"
          },
          question3 : {
            q1:"How long will your grocery run last?",
            a1:"2-3 days",
            a2:"1 week",
            a3:"1 month",
            a4:"I'm ready for the apocolypse"
          },
          question4 : {
            q1:"Who was the first president?",
            a1:"George Washington",
            a2:"Michael Jordan",
            a3:"Abraham Lincoln",
            a4:"Thomas Adams"
          },
          question5 : {
            q1:"What is the capital of Washington?",
            a1:"Olympia",
            a2:"Honolulu",
            a3:"Seattle",
            a4:"Tacoma"
          },
      };
      var time = 30;
      var questionNumber = 1;
      var correctAnswers = 0;
      var clockRunning = false;
      var answer1;
      var answer2;
      var answer3;
      var answer4;
   
      //event listener is so that it can pick up on the event and not just when the document loads

      document.addEventListener("click", function(){
      $("#ansChoice1").on("mouseup", function(){
        if(answer1 == "a1"){
          correctAnswers ++;
        }
        questionNumber ++;
        resetClock();
        displayChoices(questionNumber);
      });
 
      $("#ansChoice2").on("mouseup", function(){
        if(answer2 == "a1"){
          correctAnswers ++;
        }
        questionNumber ++;
        resetClock();
        displayChoices();
      });

      $("#ansChoice3").on("mouseup", function(){
        if(answer3 == "a1"){
          correctAnswers ++;
        }
        questionNumber ++;
        resetClock();
        displayChoices();
      });

      $("#ansChoice4").on("mouseup", function(){
        if(answer4 == "a1"){
          correctAnswers ++;
        }
        questionNumber ++;
        resetClock();
        displayChoices();
      });

    });

      function count(){
        if(clockRunning == true){
          time--;
          var converted = timeConverter(time);
          $("#timer").text(converted);

          if(time == 0){
            questionNumber ++;
            resetClock();
            displayChoices();
          }

        }
      }

      $("#start").on("click", function() {
        $("#start").hide();
        $("#timer").text("00:30");
        if(!clockRunning){
        intervalId = setInterval(count, 1000);
        clockRunning = true;
        }
        $("#main-container").attr('border-style','dashed');
        displayChoices();
        
      });

      function resetClock(){
        time = 31;
      }

      

      //used to shuffle array
      var shuffle = function (array) {

        var currentIndex = array.length;
        var temporaryValue, randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      
      };

      function displayChoices(){
     
        if(questionNumber !== (Object.keys(questAnswers).length) + 1){
          var ansArray = [1,2,3,4];
          var shuffledAnsArray = shuffle(ansArray);
          var questionNum = "question" + questionNumber;
          var currentQuestion = "q1";
      
          answer1 = "a" + (shuffledAnsArray[0]).toString();
          answer2 = "a" + (shuffledAnsArray[1]).toString();
          answer3 = "a" + (shuffledAnsArray[2]).toString();
          answer4 = "a" + (shuffledAnsArray[3]).toString();
    
          var currentQuestionText = questAnswers[questionNum][currentQuestion];

          var firstAnswer = questAnswers[questionNum][answer1];
          var secondAnswer = questAnswers[questionNum][answer2];
          var thirdAnswer = questAnswers[questionNum][answer3];
          var fourthAnswer = questAnswers[questionNum][answer4];

          var questionChoices =
          "<text id ='question'>" + currentQuestionText + "</text></br>" + 
          "<button id='ansChoice1'>" + firstAnswer + "</button></br>" +
          "<button id='ansChoice2'>" + secondAnswer + "</button></br>" +
          "<button id='ansChoice3'>" + thirdAnswer + "</button></br>" +
          "<button id='ansChoice4'>" + fourthAnswer + "</button></br>"
          ;
          $("#choices").html(questionChoices);
        }
        else{
          clockRunning=false;
          $("#timer").hide();
          var score = "<h2>" + (correctAnswers).toString() + " out of " + (Object.keys(questAnswers).length.toString()) + " correct </h2>";
          $("#choices").html("<h1>GAME OVER!</h1>" + score);
  
        }
      }

      function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
      
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        if (minutes === 0) {
          minutes = "00";
        }
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
      }
  
    });