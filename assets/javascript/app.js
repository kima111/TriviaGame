
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
            q1:"What do you do when you have to get rid of stuff",
            a1:"Sell then donate",
            a2:"Garage sell and keep the rest",
            a3:"Why get rid of stuff?",
            a4:"Never get rid of just repurpose"
          },
          question5 : {
            q1:"What do you do with plastic bags",
            a1:"I have my own re-usable bag",
            a2:"save them",
            a3:"what paper only!",
            a4:"recycle them"
          },
          question6 : {
            q1:"If you had to choose a number what would it be",
            a1:"0",
            a2:"1",
            a3:"2",
            a4:"3"
          },
          question7 : {
            q1:"How many books do you have?",
            a1:"None I use e-books",
            a2:"more than 10",
            a3:"a whole book case",
            a4:"I need another room for the books"
          },
          question8 : {
            q1:"What does minimalism mean",
            a1:"only keep the stuff you need and enjoy",
            a2:"get rid of everything",
            a3:"only keep things you need",
            a4:"evil"
          }
      };
      var time = 30;
      var questionNumber = 1;
      var correctAnswers = 0;
      var clockRunning = false;
      var answer1;
      var answer2;
      var answer3;
      var answer4;
      var questionArrayLength = Object.keys(questAnswers).length + 1;
   
      //event listener is so that it can pick up on the event and not just when the document loads
      document.addEventListener("click", function(event)
      {
        event.preventDefault();
      $("#ansChoice1").on("click", function(event){
        event.preventDefault();
        if(answer1 == "a1"){
          correctAnswers ++;
        }
        questionNumber ++;
        resetClock();
        displayChoices(questionNumber);
      });
 
      $("#ansChoice2").on("click", function(event){
        event.preventDefault();
        if(answer2 == "a1"){
          correctAnswers ++;
        }
        questionNumber ++;
        resetClock();
        displayChoices();
      });

      $("#ansChoice3").on("click", function(event){
        event.preventDefault();
        if(answer3 == "a1"){
          correctAnswers ++;
        }
        questionNumber ++;
        resetClock();
        displayChoices();
      });

      $("#ansChoice4").on("click", function(event){
        event.preventDefault();
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
        
        $(".main-container").attr('style','border-style:solid');
        $("#start").hide();
        $("#timer").text("00:30");
        if(!clockRunning){
        intervalId = setInterval(count, 1000);
        clockRunning = true;
        }
       
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
  
        if(questionNumber !== questionArrayLength){
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
          $("#choices").html(score);
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