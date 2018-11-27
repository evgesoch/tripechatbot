// Load all posts on page load
$(document).ready(
        $.get("http://localhost:8000/chatbot/houses/?format=json", function(response){

        console.log(response);
        
       
    
        }));

    