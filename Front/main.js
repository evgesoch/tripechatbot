

function sendmsg(){
    var str1;
    
    str1= document.getElementById("myText").value;
    alert(str1);
}

function buildMessage(){

    var newMessage =    '<div class="row">' + 
                            '<div class="col-sm-6"></div>' +
                            '<div class="col-sm-6">' +
                                '<div id="tb-testimonial" class="testimonial testimonial-success-filled">' + 
                                    '<div class="testimonial-section">Interested</div>' +
                                    '<div class="testimonial-desc">' + 
                                        '<img src="user.png" alt="user avatar" />' +
                                        '<div class="testimonial-writer">' + 
                                            '<div class="testimonial-writer-name">User</div>' +
                                        '</div>' +
                                    '</div>' + 
                                '</div>' +
                            '</div>' +
                        '</div>';

    $("#msg-container").append(newMessage);
}