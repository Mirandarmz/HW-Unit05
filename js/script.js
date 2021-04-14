initialize();

function initialize(){
    var hourNow;
    var id;
    for(i=9;i<=17;i++){
        hourNow=moment().format('h');
        id="#hour-"+i;
        console.log(id)
        if(hourNow>i){
            $(id).addClass("past");
        }
        else{
            if(hourNow==i){
                $(id).addClass("present");
            }
            else{
                $(id).addClass("future");
            }
        }
        
    }
}

var todos = []; 

//Rendering of initials
function renderTodos() {
  for (var i = 0; i < todos.length; i++) { //loop generates and appends the li element to the highscore section for them to appear correctly 
    var todo = todos[i];
    $(todo.id).attr("value",todo.text);
    
 }
}

//Function executed when the page initially loads to pull elements saved in the local storage 
function init() {
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  console.log(storedTodos);

  if (storedTodos !== null) {
    todos = storedTodos;
  }

  renderTodos();
}

//Event listener for the submit initials button to function 
$(".saveBtn").click(function (event) {
  $.trim($("#comment").val());
  for(var i=9;i<=17;i++){
    actualId="#hour-"+i;  
    todoText=$(actualId).children(".description").val();
    console.log(todoText);
    var todo = { 
        id: actualId,
        text: todoText,
      };  
    todos.push(todo);
}
  localStorage.setItem("todos", JSON.stringify(todos));//Local storage
  renderTodos();
});

init();