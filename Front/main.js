var message;
var nbEl = 1;

function sendmsg(){
    
    message= document.getElementById("myText").value;


if(message=="thessaloniki"){
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

    nbEl++;
    var divClone = $("#element_1").clone();
    divClone.attr("id","element_"+nbEl)
    divClone.appendTo("body").show();
    $("#msg-container").append(divClone);
}else{
    var errormsg =   '<div class="col-sm-6">'+
    '<div id="tb-testimonial" class="testimonial testimonial-default-filled ">'+
        '<div   class="testimonial-section">'+
        '<p>Sorry! I can not understand you. Please type again! </p>'+
        '</div>'+
        '<div class="testimonial-desc">'+
            '<img src="bot.jpg" alt="" />'+
            '<div class="testimonial-writer">'+
                '<div class="testimonial-writer-name">Frank</div>'  + 
            '</div>'+
        '</div>'+
    '</div>';
    $("#msg-container").append(errormsg);
}
    
}
