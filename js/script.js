//Two functions will be executed when the page loads: initalization of storage and initalization of 
initStorage();
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

var todos = [{ 
  id: "#hour-9",
  text: "",
}  , { 
  id: "#hour-10",
  text: "",
}, { 
  id: "#hour-11",
  text: "",
}, { 
  id: "#hour-12",
  text: "",
}, { 
  id: "#hour-13",
  text: "",
}, { 
  id: "#hour-14",
  text: "",
}, { 
  id: "#hour-15",
  text: "",
}, { 
  id: "#hour-16",
  text: "",
}, { 
  id: "#hour-17",
  text: "",
}]; 

//Rendering of initials
function renderTodos() {
  for (var i = 0; i < todos.length; i++) { //loop generates and appends the li element to the highscore section for them to appear correctly 
    var todo = todos[i];
    $(todo.id).children(".description").val(todo.text);
    
 }
}

//Function executed when the page initially loads to pull elements saved in the local storage 
function initStorage() {
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  console.log(storedTodos);

  if (storedTodos !== null) {
    todos = storedTodos;
    renderTodos();
  }

}

//Event listener for the submit initials button to function 
$(".saveBtn").click(function (event) {
  $.trim($("#comment").val());
  for(var i=0;i<todos.length;i++){
    todoText=$(todos[i].id).children(".description").val();
    console.log(todoText);
    todos[i].text=todoText;
}
  localStorage.setItem("todos", JSON.stringify(todos));//Local storage
  renderTodos();
});
