(function($) {
    'use strict';
    $(function() {
    let todoListItem = $('.todo-list');
    let todoListInput = $('.todo-list-input');
    let selectallbutton= $('#select-all-button');
    let deselectallbutton= $('#deselect-all-button');
    let todoListContainer=$('#todo-list-container');
    let initialList =$('#list-initial');
    let addNewListButton=$('#add-new-list');
    let sequence =0;

    $('.todo-list-add-btn').on("click", function(event) {
    event.preventDefault();
    
    let item = $(this).prevAll('.todo-list-input').val();
    
    if (item) {
    todoListItem.append("<li>"+
        "<div class='form-check'><label class='form-check-label'><input  class='checkbox' type='checkbox' />" + item + "<i class='input-helper'></i></label></div><i class='remove mdi mdi-close-circle-outline'></i>"+
    "</li>");
    todoListInput.val("");
    }
    
    });
    
    todoListItem.on('change', '.checkbox', function() {
    if ($(this).attr('checked')) {
    $(this).removeAttr('checked');
    } else {
    $(this).attr('checked', 'checked');
    }
    
    $(this).closest("li").toggleClass('completed');
    
    });
    
    todoListItem.on('click', '.remove', function() {
    $(this).parent().remove();
    });
    selectallbutton.on('click',function (){
       
        // jquery selector returns an array of items 
         $("input[type='checkbox']").prop("checked",true);       
        $("input[type='checkbox']").closest("li").addClass('completed');
    });

    deselectallbutton.on('click',function(){
        $("input[type='checkbox']").prop("checked",false); 
        $("input[type='checkbox']").closest("li").removeClass('completed');
    });

    addNewListButton.on('click',function(){
        sequence++;
        let htmlContent ="<div id= 'sequence'"+sequence+"class='col-md-8'>"+
        "<div class='card px-3'>"+"<div class='card-body'>"+"<h4 class='card-title'>Awesome Todo list</h4>"+ "<div class='add-items d-flex'> <input type='text' class='form-control todo-list-input' placeholder='What do you need to do today?'> <button class='add btn btn-primary font-weight-bold todo-list-add-btn'>Add</button> </div>"+
        "<div class='list-wrapper'>"+
           "<ul class='d-flex flex-column-reverse todo-list'>"+           
            "</ul>"+
            "<div>"+
            "<input id='select-all-button' type='button'  value='Select All'/>"+    
                  "</div>"+
                   "<div>"+
                   "<input  id='deselect-all-button' type='button'  value='Deselect All'/>"+
               "</div>"+
        "</div>"+
    "</div>"+
"</div>"+
" </div>";
             
        todoListContainer.append(htmlContent);
     

    });

    
});
   
    })(jQuery);

    
    
    function selects(){  
        var ele=document.getElementsByName('chk');  
        for(var i=0; i<ele.length; i++){  
            if(ele[i].type=='checkbox')  
                ele[i].checked=true;  
                
                
                
            }  
        
    } 
    function deSelect(){  
        var ele=document.getElementsByName('chk');  
        for(var i=0; i<ele.length; i++){  
            if(ele[i].type=='checkbox')  
                ele[i].checked=false;  
              
        }  
    }            