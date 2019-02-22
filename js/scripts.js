// UI logic begins here//
$(document).ready(function()  {
  $(".test").submit(function(event) {
    event.preventDefault();
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
    alert( "you have scored" +" "+marks+ "% with a total of" +" "+rights+" "+ "right questions")

  });


});
