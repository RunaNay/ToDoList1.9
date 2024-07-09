
function newItem(){

    //Adding a new item to the list of items: 
       let li = $("<li></li>");
       let inputValue = $("#input").val();
       let text = inputValue;
       li.append(text); 
    
       if (inputValue === '') {
         alert("You must write something!");
       } else {
         let list = $('#list');
         list.append(li);
       }
    
     //Crossing out an item from the list of items:
       function crossOut() {
             li.classList.toggle("strike");
         }
    
        li.on("dblclick",crossOut);
    
     //Adding the delete button "X": 
       let crossOutButton = $("<crossOutButton>X</crossOutButton>");
         li.append(crossOutButton);
    
         crossOutButton.on("click", deleteListItem);
     //Adding CLASS DELETE (DISPLAY: NONE) from the css:
       function deleteListItem(){
             li.addClass("delete")
         }
     //Reordering the items: 
       $('#list').sortable();
    
    }
    