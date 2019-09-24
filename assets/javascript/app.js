
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
            a1:"blue",
            w2:"red",
            w3:"green",
            w4:"apple"
          },
          question4 : {
            q1:"What is the color of the sky?",
            a1:"blue",
            w2:"red",
            w3:"green",
            w4:"apple"
          },
          question5 : {
            q1:"What is the color of the sky?",
            a1:"blue",
            w2:"red",
            w3:"green",
            w4:"apple"
          },
      };
      var time = 30;
      var questionNumber = 1;
      var answerNumber;
      var clockRunning = false;
      var currentQuestion;
      
    
      // var windowTimeout = setTimeout(function() {
      //   alert("Alert #1: Called automatically 1 second after page load.");
      // }, 1000);

      $("#start").on("click", function() {
   
        intervalId = setInterval(count, 1000);
        clockRunning = true;
      
        
        $("#start").fadeOut();
        var currentQ = "question" + questionNumber;
        var q = "q1"
        console.log(currentQ);
        $("#question").text(questAnswers[currentQ][q]);
        
      //  for(i=0; i<Object.keys(questAnswers).length; i++){
      //    console.log(i);
      //  }
       if (time == 0){
         questionNumber ++;
       }
        console.log(Object.keys(questAnswers).length);
       displayChoices(questionNumber);
       
        $("#ansChoice1").on("click", function(){
          questionNumber ++;
          resetClock();
          removeChoices();
       
          displayChoices(questionNumber);
          console.log("?")
        });
        $("#ansChoice2").on("click", function(){
          questionNumber ++;
          resetClock();
          removeChoices();
          displayChoices(questionNumber);
        });
        $("#ansChoice3").on("click", function(){
          questionNumber ++;
          resetClock();
          removeChoices();
   
          displayChoices(questionNumber);
        });
        $("#ansChoice4").on("click", function(){
          questionNumber ++;
          resetClock();
          removeChoices();
         
          displayChoices(questionNumber);
        });
        
      });
      function resetClock(){
        time = 30;
      }
      function removeChoices(){
        $("#ansChoice1").remove();
        $("#ansChoice2").remove();
        $("#ansChoice3").remove();
        $("#ansChoice4").remove();

      }
      function displayChoices(arr){
      

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
        $("#choices").append(choices);
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