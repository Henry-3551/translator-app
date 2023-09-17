function showDiv(){ 
   var body = document.getElementById('body');
    var firstDiv =                 document.getElementById('kinetic');
    
    body.style.background = '#2c3e50'
     firstDiv.style.display = 'block'; 
     
 }

// code to get value from textarea
    function getValue() {
          var val = document.getElementById("input").value;
        document.getElementById("output").innerHTML = val;
        
        let hide = document.getElementById("hide");
        
        
        if(hide.style.display = "block") {
            hide.style.display = "none";
        }
        
        
    }
    
    // Google translate API
        function googleTranslateElementInit() {  
            new google.translate.TranslateElement(  
                {pageLanguage: 'en'},  
                'google_translate_element'  
            );  
        }  
    
    // code to copy text from html element
      function copyText() {
        
        /* Select text by id*/
        var Text = document.getElementById("output").innerText;
        
  
        /* Copy selected text into clipboard */
        navigator.clipboard.writeText(Text);
      }
