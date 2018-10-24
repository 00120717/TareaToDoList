 window.onload = init;

 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");

             let finish = document.createElement("button");
            finish.innerText = "Marcar";
             
             let drop = document.createElement("button");
             drop.innerText ="Remover";

             element.innerText = task;
             element.appendChild(finish);
            element.appendChild(drop);

             // Añadir un boton para marcar de finalizado
             finish.addEventListener("click", () => { 
                element.style.textDecoration = "line-through";
                
             });

             // Elmine de la lista

             drop.addEventListener("click", function(){
                console.log(this);
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });
            
            

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
             

             
         }
         
         }
     

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }
         
         todoList.add(form.task.value,form.important.checked);
        
     });
 }