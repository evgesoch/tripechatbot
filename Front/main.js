var message;

function sendmsg(){
    
    message= document.getElementById("myText").value;

    var usermessage =
                        '<div class="row">'+
                            '<div class="col-sm-6"></div>'+
                            '<div class="col-sm-6">'+
                                '<div id="tb-testimonial" class="testimonial testimonial-success-filled">'+
                            '<div class="testimonial-section">'+
                                    message +
                            '</div>'+
                             '<div class="testimonial-desc">'+
                                    '<img src="user.png" alt="" />'+
                            '<div class="testimonial-writer">'+
                                '<div class="testimonial-writer-name">User</div>'+
                
                             '</div>'+
                        '</div>'+
                    '</div>' +
                    '</div>'+
                '</div>';

    $("#msg-container").append(usermessage);
}
