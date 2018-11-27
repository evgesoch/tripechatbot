

function sendmsg(){
    var str1;
    
    str1= document.getElementById("myText").value;
    alert(str1);
}

function buildMessage(msg){
    var option1 = "";
    var option2 = "";

    var userMessage =    '<div class="row">' + 
                            '<div class="col-sm-6"></div>' +
                            '<div class="col-sm-6">' +
                                '<div id="tb-testimonial" class="testimonial testimonial-success-filled">' + 
                                    '<div class="testimonial-section">' + msg + '</div>' +
                                    '<div class="testimonial-desc">' + 
                                        '<img src="user.png" alt="user avatar" />' +
                                        '<div class="testimonial-writer">' + 
                                            '<div class="testimonial-writer-name">User</div>' +
                                        '</div>' +
                                    '</div>' + 
                                '</div>' +
                            '</div>' +
                        '</div>';

    
    $("#msg-container").append(userMessage);

    if(msg == "Interested") {
        option1 = "Buy";
        option2 = "Rent";

    var frankResponse = '<div class="row">'+
                            '<div class="col-sm-6">'+
                                '<div id="tb-testimonial" class="testimonial testimonial-default-filled ">'+
                                    '<div   class="testimonial-section">'+
                                        'Do you want to Buy or Rent ?<br>'+
                                        '<div class="btn-group" role="group" aria-label="Basic example">'+
                                            '<button type="button" class="btn  btn-info" onClick="buildMessage(' + option1 + ')">' + option1 + '</button>'+
                                            '<button type="button" class="btn btn-danger" onClick="buildMessage(' + option2 + ')">' + option2 + '</button>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="testimonial-desc">'+
                                        '<img src="bot.jpg" alt="" />'+
                                        '<div class="testimonial-writer">'+
                                            '<div class="testimonial-writer-name">Frank</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
    }

    $("#msg-container").append(frankResponse);
}