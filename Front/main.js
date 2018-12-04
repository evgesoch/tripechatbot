var message;
var nbEl = 1;
var buyRent;

acceptedMsg = ["athens", "thessaloniki", "chania"];



function sendmsg(){


	message= document.getElementById("myText").value;
	message = message.toLowerCase();

	

if(acceptedMsg.includes(message)){


	
    var usermessage =	'<div id="msg5">'+
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
	$("#msg-container").append(errormsg)

}
    
}

function filterResults(){
	var city = 0;

	switch(message){
		case "thessaloniki":
		city = 2; break;
		case "athens":
		city = 1; break;
		case "chania":
		city = 3; break;
		default: city = 0;
	}

	for(var i in houses){
		if(houses[i].city == city &&
			houses[i].salerent == buyRent){
				$("#resultsList").append($("<li>").text("House in " + message + " for " + salerent.toLowerCase + "\n" + 
				"Area: " + houses[i].area + " sq. meters\n" + 
				"Price: " + houses[i].price + "€\n"));
			}
	}
}

var houses = [{
	"id": 1,
	"city": 2,
	"owner": 1,
	"price": 105000.0,
	"area": 116.0,
	"salerent": "Sell"
}, {
	"id": 2,
	"city": 2,
	"owner": 1,
	"price": 68000.0,
	"area": 45.0,
	"salerent": "Sell"
}, {
	"id": 3,
	"city": 2,
	"owner": 2,
	"price": 450.0,
	"area": 45.0,
	"salerent": "Rent"
}, {
	"id": 4,
	"city": 2,
	"owner": 3,
	"price": 200.0,
	"area": 35.0,
	"salerent": "Rent"
}, {
	"id": 5,
	"city": 2,
	"owner": 4,
	"price": 60.0,
	"area": 65.0,
	"salerent": "Rent"
}, {
	"id": 6,
	"city": 1,
	"owner": 5,
	"price": 1080.0,
	"area": 90.0,
	"salerent": "Rent"
}, {
	"id": 7,
	"city": 1,
	"owner": 6,
	"price": 550.0,
	"area": 50.0,
	"salerent": "Rent"
}, {
	"id": 8,
	"city": 1,
	"owner": 7,
	"price": 250000.0,
	"area": 75.0,
	"salerent": "Sell"
}, {
	"id": 9,
	"city": 1,
	"owner": 8,
	"price": 380000.0,
	"area": 135.0,
	"salerent": "Sell"
}, {
	"id": 10,
	"city": 1,
	"owner": 9,
	"price": 480000.0,
	"area": 185.0,
	"salerent": "Sell"
}, {
	"id": 11,
	"city": 1,
	"owner": 10,
	"price": 139000.0,
	"area": 158.0,
	"salerent": "Sell"
}, {
	"id": 12,
	"city": 3,
	"owner": 11,
	"price": 350000.0,
	"area": 92.0,
	"salerent": "Sell"
}, {
	"id": 13,
	"city": 3,
	"owner": 11,
	"price": 225000.0,
	"area": 150.0,
	"salerent": "Sell"
}, {
	"id": 14,
	"city": 3,
	"owner": 12,
	"price": 220.0,
	"area": 40.0,
	"salerent": "Rent"
}, {
	"id": 15,
	"city": 3,
	"owner": 13,
	"price": 1350.0,
	"area": 140.0,
	"salerent": "Rent"
}, {
	"id": 16,
	"city": 2,
	"owner": 14,
	"price": 27000.0,
	"area": 120.0,
	"salerent": "Sell"
}, {
	"id": 17,
	"city": 2,
	"owner": 15,
	"price": 70000.0,
	"area": 65.0,
	"salerent": "Sell"
}, {
	"id": 18,
	"city": 2,
	"owner": 15,
	"price": 160000.0,
	"area": 140.0,
	"salerent": "Sell"
}, {
	"id": 19,
	"city": 2,
	"owner": 16,
	"price": 300.0,
	"area": 120.0,
	"salerent": "Rent"
}];

var cities = [{
	"id": 1,
	"cityname": "Athens"
}, {
	"id": 2,
	"cityname": "Thessaloniki"
}, {
	"id": 3,
	"cityname": "Chania"
}];

var owners = [{
	"id": 1,
	"fullname": "Matrik Real Estate",
	"username": "admin1",
	"password": "admin1"
}, {
	"id": 2,
	"fullname": "Monopoly Home",
	"username": "admin2",
	"password": "admin2"
}, {
	"id": 3,
	"fullname": "Ζαφείρης Λασκαρίδης",
	"username": "admin3",
	"password": "admin3"
}, {
	"id": 4,
	"fullname": "Giorgos P.",
	"username": "admin4",
	"password": "admin4"
}, {
	"id": 5,
	"fullname": "Best Home",
	"username": "admin5",
	"password": "admin5"
}, {
	"id": 6,
	"fullname": "all weather",
	"username": "admin6",
	"password": "admin6"
}, {
	"id": 7,
	"fullname": "Marc Julovich",
	"username": "admin7",
	"password": "admin7"
}, {
	"id": 8,
	"fullname": "LP Home",
	"username": "admin8",
	"password": "admin8"
}, {
	"id": 9,
	"fullname": "Epsilon Team",
	"username": "admin9",
	"password": "admin9"
}, {
	"id": 10,
	"fullname": "Attica House",
	"username": "admin10",
	"password": "admin10"
}, {
	"id": 11,
	"fullname": "Broosco",
	"username": "admin11",
	"password": "admin11"
}, {
	"id": 12,
	"fullname": "Your Wish",
	"username": "admin12",
	"password": "admin12"
}, {
	"id": 13,
	"fullname": "Olympos Real Estate",
	"username": "admin13",
	"password": "admin13"
}, {
	"id": 14,
	"fullname": "Diaylos",
	"username": "admin114",
	"password": "admin114"
}, {
	"id": 15,
	"fullname": "Remax-Choice",
	"username": "admin115",
	"password": "admin15"
}, {
	"id": 16,
	"fullname": "Lagadas Real Estate",
	"username": "admin116",
	"password": "admin16"
}];

