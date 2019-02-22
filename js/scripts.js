// UI logic begins here//
var question1=  $("input:radio[name:ques1].val()");
var question2=  $("input:radio[name:ques2].val()");
var question3=  $("input:radio[name:ques3].val()");
var question4=  $("input:radio[name:ques4].val()");
var question5=  $("input:radio[name:ques5].val()");
var marks=0
var rights=0
//awarding marks here//
if(question1==="EMCAscript")  {
  marks+=20
  rights++
}
if (question2===".toObject")  {
  marks+=20
  rights++

if(question3==="be")  {
  marks+=20
  rights++
}
if(question4==="B") {
  marks+=20
  rights++
}
if(question5==="C") {
  marks+=20
  rights++
}
var results= rights;
alert("You have "+rights+" "+ "right questions. Your score is "+ marks);


$(document).ready(function()  {
  $(".test").submit(function(event) {
    event.preventDefault();
    alert("yass queen!");
  });
});
