
      $(document).ready(function() {
     
      var delayButtonAlert;
      var questAnswers = {
          question1 : {
            q1:"What is the color of the sky?",
            a1:"blue",
            w2:"red",
            w3:"green",
            w4:"apple"
          },
          question2 : {
            q1:"What color is grass?",
            a1:"green",
            w2:"black",
            w3:"white",
            w4:"corn"
          },
          question3 : {
            q1:"What is the color of the sky?",
            a1:"3",
            w2:"3",
            w3:"3",
            w4:"3"
          },
          question4 : {
            q1:"What is the color of the sky?",
            a1:"4",
            w2:"4",
            w3:"4",
            w4:"4"
          },
          question5 : {
            q1:"What is the color of the sky?",
            a1:"5",
            w2:"5",
            w3:"5",
            w4:"5"
          },
      };
      var time = 30;
      var questionNumber = 1;
    
      //event listener is so that it can pick up on the event and not just when the document loads

      document.addEventListener("click", function(event){
      $("#ansChoice1").on("click", function(){
        questionNumber ++;
        resetClock();
        displayChoices(questionNumber);
      });
 
      $("#ansChoice2").on("click", function(){
        questionNumber ++;
        resetClock();
        displayChoices();
      });

      $("#ansChoice3").on("click", function(){
        questionNumber ++;
        resetClock();
        displayChoices();
      });

      $("#ansChoice4").on("click", function(){
        questionNumber ++;
        resetClock();
        displayChoices();
      });

    });
      $("#start").on("click", function() {
   
        intervalId = setInterval(count, 1000);
        clockRunning = true;
      
        
        $("#start").fadeOut();
        var currentQ = "question" + questionNumber;
        var q = "q1"
        console.log(currentQ);
        $("#question").text(questAnswers[currentQ][q]);
        
       if (time == 0){
         questionNumber ++;
       }
       displayChoices(questionNumber);
      });

      function resetClock(){
        time = 30;
      }
 
      function displayChoices(){
      
        var questionNum = "question" + questionNumber;
        var answer1 = "a1";
        var answer2 = "w2";
        var answer3 = "w3";
        var answer4 = "w4";
        var firstAnswer = questAnswers[questionNum][answer1];
        var secondAnswer = questAnswers[questionNum][answer2];
        var thirdAnswer = questAnswers[questionNum][answer3];
        var fourthAnswer = questAnswers[questionNum][answer4];

        var choices = "<button id='ansChoice1'>" + firstAnswer + "</button></br>" +
        "<button id='ansChoice2'>" + secondAnswer + "</button></br>" +
        "<button id='ansChoice3'>" + thirdAnswer + "</button></br>" +
        "<button id='ansChoice4'>" + fourthAnswer + "</button></br>"
        ;
        $("#choices").html(choices);

      }
   
      function count(){
        time--;
        var converted = timeConverter(time);
        $("#timer").text(converted);
      

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