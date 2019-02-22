alert(5);
$(document).ready(function()  {
  $(".test").submit(function(event) {
    event.preventDefault();
    alert("yass queen!");
  });
});
