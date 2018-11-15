

function sendmsg(){
    var str1;
    
    str1= document.getElementById("myText").value;
    alert(str1);
}

var msg=""; 
var option1 = "";
var option2 = "";
var msgCount = 0;

var introMessage =  '<div class="row">' +
                        '<div class="col-sm-6">' +
                            '<div id="tb-testimonial" class="testimonial testimonial-default-filled ">'+
                                '<div   class="testimonial-section">'+
                                    'Hey! I am Frank, your Real Estate Chatbot. I can help you find the most suitable house for you and also manage the house that you own.<br>'+
                                    '<br>If you have any questions type "your question" at any time!<br><br> So, you interested for a house or are you an owner?<br>'+
                                    '<div class="btn-group" role="group" aria-label="Basic example">'+
                                        '<button type="button" class="btn  btn-info" onClick="buildMessage("Interested")">Interested</button>'+
                                        '<button type="button" class="btn btn-danger" onClick="buildMessage("Owner")">Owner</button>'+
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
                    '</div>'


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

var frankButtonAnswer = '<div class="row">'+
                        '<div class="col-sm-6">'+
                            '<div id="tb-testimonial" class="testimonial testimonial-default-filled ">'+
                                '<div   class="testimonial-section">'+
                                    'Do you want to Buy or Rent ?<br>'+
                                    '<div class="btn-group" role="group" aria-label="Basic example">'+
                                        '<button id="' + msgCount + 'a" type="button" class="btn  btn-info">' + option1 + '</button>'+
                                        '<button id="' + msgCount + 'b" type="button" class="btn btn-danger">' + option2 + '</button>'+
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

var frankStringAnswer = "";

function buildMessage(msg){
    //console.log("msg = " + msg);
    var response;
    
    switch (msg){
        case "intro": 
            response = introMessage;
            break;
        case "user":
            response = userMessage;
            break;
        case "frank-btn":
            response = frankButtonAnswer;
            break;
        case "frank-str":
            response = frankStringAnswer;
            break
        default: $("#msg-container").append("Nothing");
    }
    $("#msg-container").append(response);
    msgCount++;
    //$("#msg-container").append(introMessage);

    /*if(msg == "Interested") {
        option1 = "Buy";
        option2 = "Rent";

    
    }

    $("#msg-container").append(frankResponse); */
}
