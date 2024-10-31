const textarea = document.querySelector(".textarea");
console.log(textarea);

const button = document.querySelector(".buttoninput");

const todolist = document.querySelector(".todolist");

button.addEventListener("click",addtodolist);


function addtodolist(){
   
    const todoDiv = document.createElement("div");
    // adding class
    todoDiv.classList.add("itemall")
    const item = document.createElement("p");
    item.innerHTML=textarea.value;
    item.classList.add("item");

// adding p tag as a child of tododiv
  todoDiv.appendChild(item);
    console.log(todoDiv );

    if (textarea.value=='') return;
    // adding the new div that stores value that we write in textarea as a child of todolist that is an empty div below of textarea.

    todolist.appendChild(todoDiv);
    textarea.value='';


    // adding delete button
    const deletebutton=document.createElement("button");
    todoDiv.appendChild(deletebutton);
    console.log(todoDiv);

    deletebutton.innerHTML='<i class="fa-solid fa-trash"></i>';
    deletebutton.classList.add("trash-button")
 

}
todolist.addEventListener("click", deleteItem);

function deleteItem(e){
    const item = e.target;
    console.log(item);
    if(item.classList[0] === "trash-button"){
        const parent =item.parentElement;
        parent.remove();
    }
}

