//Two functions will be executed when the page loads: initalization of storage and initalization of 
initialize();
initStorage();

//Function that loads the colors of the text areas according to the time of the day that is currently happening 
function initialize(){
    var hourNow;
    var id;
    for(i=9;i<=17;i++){ //Loop that goes through each text area and evaluates which color it needs
        hourNow=moment().format('HH');
        id="#hour-"+i;//We concatenate an id to automatize the process 
        if(hourNow>i){ //if the current time is above the hour text area we are visiting, add class past 
            $(id).addClass("past");
        }
        else{
            if(hourNow==i){ //if the current time is equal to the hour text area we are visiting, add class present
                $(id).addClass("present");
            }
            else{ //if the current time is below the hour text area we are visiting, add class future
                $(id).addClass("future");
            }
        }
        
    }
}

//We create an array of objects that have as property the id (to each container of each how) and text 
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

//Rendering of todos written
function renderTodos() {
  for (var i = 0; i < todos.length; i++) { //Loop that sets the value of the text areas to the ones saved on the storage 
    var todo = todos[i];
    $(todo.id).children(".description").val(todo.text);//Text areas have a class assigned as description, we access them through children 
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

function saveText(i){
  var todoText=$(todos[i].id).children(".description").val();
  todos[i].text=todoText;
  console.log(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));//Local storage
  renderTodos();
}

//Event listener for the save button to function 
$("#button-9").click(function (event) {
  saveText(0);
});
$("#button-10").click(function (event) {
  saveText(1);
});
$("#button-11").click(function (event) {
  saveText(2);
});
$("#button-12").click(function (event) {
  saveText(3);
});
$("#button-13").click(function (event) {
  saveText(4);
});
$("#button-14").click(function (event) {
  saveText(5);
});
$("#button-15").click(function (event) {
  saveText(6);
});
$("#button-16").click(function (event) {
  saveText(7);
});
$("#button-17").click(function (event) {
  saveText(8);
});



