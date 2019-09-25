import './index.css'

window.onload = function(){
    let taskField = document.querySelector("#taskField")
    let btn = document.querySelector("#button")
    let parent = document.querySelector("#allTask")


      taskField.addEventListener("keypress",function(event){
         
          
       if(event.keyCode === 13){
           if(event.target.value){
            createNewTask(event.target.value,parent)
            this.value = ""
           }
           else{
               alert("Empty task not allowed")
           }
    
       }
      })

      btn.addEventListener("click",function(event){

        if(taskField.value){
            createNewTask(taskField.value,parent)
            taskField.value = ""
           }
           else{
               alert("Empty task not allowed")
           }
          
        
           
        
       })

}


function createNewTask(task,parent){
   let col = document.createElement("div")
   col.classList = "col-lg-3"

   let newtask = document.createElement("div")
   newtask.classList = "newtask"
   col.appendChild(newtask)

   let newtaskP = document.createElement("p")
   newtaskP.className= "newtask-p"
   newtaskP.innerHTML = task
   newtask.appendChild(newtaskP)

   let del = document.createElement("span")
   del.innerHTML = '<i class="far fa-times-circle"></i>'
   del.classList = "del"

   del.addEventListener("click",function(){
       parent.removeChild(col)
   })

   newtask.appendChild(del)
   
   let controller = createController(newtask)
    newtask.appendChild(controller)

   newtask.onmouseenter = function(){
     controller.style.visibility = "visible"
   }

   newtask.onpointerleave = function(){
    controller.style.visibility = "hidden"
  }



   parent.appendChild(col)
}




function createController(parent){
       let controllerPanel = document.createElement("div")
       controllerPanel.classList = "controllpanel d-flex"
       
       let colorplate = createColorplate(parent)
       controllerPanel.appendChild(colorplate)
       
       let edit = createEdit(parent)
       controllerPanel.appendChild(edit)

       return controllerPanel
}






function createColorplate(parent){
    let colors = ['palegreen', 'skyblue', 'powderblue', 'salmon', 'white', '#F37C11']
    let colordiv = document.createElement("div")
    colordiv.classList = "d-flex align-items-center"

    colors.forEach(color=>{
        let div = document.createElement("div")
        div.classList = "color-div ml-1"
        div.style.backgroundColor = color
        div.addEventListener('click',function(){
            parent.style.backgroundColor = color
        })

        colordiv.appendChild(div)
    })


    return colordiv
}




function createEdit(parent){
    let editbtn = document.createElement("span")
    editbtn.innerHTML = '<i class="fas fa-edit"></i>'
    editbtn.classList = "ml-auto edit align-items-center d-flex"
    
    editbtn.addEventListener("click",function(){
            let textarea = document.createElement("textarea")
            textarea.style.width = parent.offsetWidth + 'px'
            textarea.style.height = parent.offsetHeight + 'px'

            textarea.classList = "textarea"
            let p = parent.querySelector("p")
            textarea.innerHTML = p.innerHTML
            
            textarea.addEventListener("keypress",function(event){
                if(event.keyCode === 13){
                   if(this.value){
                    p.innerHTML = this.value
                    parent.removeChild(textarea)
                   }
                   else{
                       alert("Empty task not allowed")
                   }
                }
            })

            parent.appendChild(textarea)
    })

    return editbtn
}


