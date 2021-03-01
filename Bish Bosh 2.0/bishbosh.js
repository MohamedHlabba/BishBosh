(function($) {
    'use strict';
    $(function() {
   
    $('#start').on("click", function() {
       
       let text ="";
        let loop = $('#loop').val();
        let div1 = $('#first-division').val();
        let div2= $('#second-division').val();
        for (let i = 1; i <= loop; i++) {

            if (i % div1 == 0 && i % div2 == 0) {
    
              text += "Bisch-Bosch" + ", ";
    
              
            } else if (i % div1 == 0) {
                text+="Bisch" + ", ";
    
    
            } else if (i % div2 == 0) {
                text+="Bosch" + ", ";
    
             
            } else {
              text+=i + ", ";
            }
    
        }  
        $('#presentation-number').append(text);
       
    });
        
});
   
})(jQuery);

