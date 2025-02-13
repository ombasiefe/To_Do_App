let TaskNum=0;
function addTask() {
    let Tname = document.getElementById("TaskName").value;
    let TDescription = document.getElementById("TaskDescription").value;
    let TaskDate= document.getElementById("TaskDateTime").value;
    if (Tname && TDescription) {
        TaskNum+=1;
        console.log(TaskNum); 
        let view = document.getElementById("Tasklist");
        var li = document.createElement("li");
        var node = document.createTextNode(`${TaskNum}) ${Tname}: ${TDescription} (${TaskDate})`);
        li.appendChild(node);
        view.appendChild(li);

        document.getElementById("TaskName").value = '';
        document.getElementById("TaskDescription").value = '';
        document.getElementById("TaskDateTime").value='';
    } else {
        alert("Please fill in both fields.");
    }
}

function SaveTasksToFile(){
    let Tasklistlength= document.getElementById("Tasklist").children.length; 
   if(Tasklistlength>0){
    let TasksToSave=document.getElementById("Tasklist").children.length; 

  //Getting all Tasks from the ul 
  const listItems=document.querySelectorAll("#Tasklist li");
  const content=Array.from(listItems).map(li => li.textContent).join("\n");
  // Step 3: Create a Blob with the text
  const blob=new Blob([content],{type: "text/plain"});
  
  // Step 4: Create a link for downloading the file
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="MyTasks.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  console.log(listItems);
   }
   else{
    alert("List is Empty");
   }
}

function DeleteTasks(){
const listItemsToDelete=document.getElementById("Tasklist");
let Tasklistlength= document.getElementById("Tasklist").children.length; 
if(Tasklistlength===0){
    alert("List is empty");
}
else{
    listItemsToDelete.remove();
    alert("Tasks Deleted Successfully");
}
}
function Log_out(){
    let retvalue=confirm("Are you Sure to Log-out ?");
    if(retvalue==true){
        window.location.replace("To_Do_App_Login.html");
        return true;
    }else{
        
        return false;
    }
    
}
