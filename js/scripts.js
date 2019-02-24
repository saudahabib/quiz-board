// UI logic begins here//

function redirect() {
  window.open("index.html", "_blank")
};

$(document).ready(function()  {
  $(".test").submit(function(event) {
    event.preventDefault();
    function results()  {
      window.open("index2.html", "_blank")
    };
    var question1=  $("input:radio[name=ques1]:checked").val();
    var question2=  $("input:radio[name=ques2]:checked").val();
    var question3=  $("input:radio[name=ques3]:checked").val();
    var question4=  $("input:radio[name=ques4]:checked").val();
    var question5=  $("input:radio[name=ques5]:checked").val();
    var marks=0;
    var rights=0;
    //business logic begins here//

    if(question1=="1")  {
       marks+=20;
       rights++;

     }
     if (question2=="3")  {
       marks+=20;
       rights++;
     }
     if(question3=="4")  {
       marks+=20;
       rights++;
     }
     if(question4=="2") {
       marks+=20;
       rights++;
     }
     if(question5=="3") {
       marks+=20;
       rights++;
     }
     //awarding marks begins here
     var analysis;
     if(marks>=80) {
       analysis=0;
     }
     else if(marks<50) {
       analysis=2;
     }

     else{
       analysis=1;
    };
      var messages= ["See you in Javascript module 2", "You could do so much better", "You know you'll need a retake right?"]
      var images=["you-go.gif", "images/best.gif", "images/really.gif"]

          document.getElementById('results').innerHTML= "You got"+" "+marks+"% with a total of "+ rights+" "+"right questions out of 5"
          document.getElementById('image').src= images[analysis]
          document.getElementById('analysis').innerHTML= messages[analysis]


    });
  });
