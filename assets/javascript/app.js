
      $(document).ready(function() {
     
      var questAnswers = {
          question1 : {
            q1:"What is the color of the sky?",
            a1:"blue",
            a2:"red",
            a3:"green",
            a4:"apple"
          },
          question2 : {
            q1:"What color is grass?",
            a1:"green",
            a2:"black",
            a3:"white",
            a4:"corn"
          },
          question3 : {
            q1:"What are my shoes?",
            a1:"black",
            a2:"red",
            a3:"yellow",
            a4:"grapes"
          },
          question4 : {
            q1:"Who was the first president?",
            a1:"George Washington",
            a2:"Michael Jordan",
            a3:"Abraham Lincoln",
            a4:"Thomas Adams"
          },
          question5 : {
            q1:"What is the capitol of Washington?",
            a1:"Olympia",
            a2:"Honolulu",
            a3:"Seattle",
            a4:"Tacoma"
          },
      };
      var time = 31;
      var questionNumber = 1;
      var correctAnswers = 0;
      var answer1;
      var answer2;
      var answer3;
      var answer4;
      //event listener is so that it can pick up on the event and not just when the document loads

      document.addEventListener("click", function(){
      $("#ansChoice1").on("click", function(){
        if(answer1 == "a1"){
          correctAnswers ++;
        }
        else{
          console.log("wrong answer");
        }
      
        questionNumber ++;
        resetClock();
        displayChoices(questionNumber);
      });
 
      $("#ansChoice2").on("click", function(){
        if(answer2 == "a1"){
          correctAnswers ++;
        }
        else{
          console.log("wrong answer");
        }
      
        questionNumber ++;
        resetClock();
        displayChoices();
      });

      $("#ansChoice3").on("click", function(){
        if(answer3 == "a1"){
          correctAnswers ++;
        }
        else{
          console.log("wrong answer");
        }
      
        questionNumber ++;
        resetClock();
        displayChoices();
      });

      $("#ansChoice4").on("click", function(){
        if(answer4 == "a1"){
          correctAnswers ++;
        }
        else{
          console.log("wrong answer");
        }
      
        questionNumber ++;
        resetClock();
        displayChoices();
      });

    });

      $("#start").on("click", function() {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
        $("#start").fadeOut();
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
        var ansArray = [1,2,3,4];
        var shuffledAnsArray = shuffle(ansArray);
        var questionNum = "question" + questionNumber;
        var currentQuestion = "q1";
    
        answer1 = "a" + (shuffledAnsArray[0]).toString();;
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
   
      function count(){
        time--;
        var converted = timeConverter(time);
        $("#timer").text(converted);
        if(time == 0){
          questionNumber ++;
          resetClock();
          displayChoices();
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