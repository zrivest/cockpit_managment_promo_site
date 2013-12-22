$(document).ready(function(){
  $("#course_1").on("click", function(event){
    event.preventDefault();
      $.post("partial-url", function(response){
      console.log(response); 
      })
    console.log("I prevented the default");
  });
});
