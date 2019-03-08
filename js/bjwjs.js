// JavaScript Document

function foodOption() {

	"use strict";

	var input;

	var otherParent;

	if (document.getElementById("foodSelect").value === "other") {

		document.getElementById("otherLabel").innerHTML = "Food Restrictions:";

		input = document.createElement("input");

		input.setAttribute("type","text");

		input.setAttribute("id","foodInput");

		otherParent = document.getElementById("otherInput");

		otherParent.appendChild(input);

		document.getElementById("foodInput").focus();

			

	}

	else {

		document.getElementById("otherLabel").innerHTML = "";

		document.getElementById("otherInput").innerHTML = "";

	}

}





//

function weddingCountdown() {
	//set date to count down to
	var weddingDate = new Date("Oct 14, 2018");
	
	//"use strict";

	//Get todays date and time
	var now = new Date();

	//Get time frame until end date
	var dateDistance = weddingDate - now;

	//get number of days
	var days = Math.floor(dateDistance / (1000*60*60*24)) + 1;
	
	//When counter reaches zero
	if(dateDistance <= 0) {
		document.getElementById("days").innerHTML = "Our wedding is TODAY!";
	}else {
		document.getElementById("days").innerHTML = days + " days until our wedding!";
	}
}

function copyright() {
	"use strict";
	var date = new Date().getFullYear();
	
	document.getElementById("copyright").innerHTML = "Copyright &copy; " + 
	date + " &middot; All Rights Reserved &middot; MJ Productions";
}
copyright();


function engagementPhotos() {
	"use strict";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var photoFile = JSON.parse(this.responseText);
			for(let i = 0; i < photoFile.length; i++) {
				if(i % 3 === 0) {
					$("#column1").append("<img src='"+ photoFile[i] +"' alt='" + photoFile[i] +"' class='img-thumbnail img-fluid'>");
				}else if (i % 3 === 1) {
					$("#column2").append("<img src='"+ photoFile[i] +"' alt='" + photoFile[i] +"' class='img-thumbnail img-fluid'>");
				}else {
					$("#column3").append("<img src='"+ photoFile[i] +"' alt='" + photoFile[i] +"' class='img-thumbnail img-fluid'>");
				}
			}
    }
};
	xmlhttp.open('GET', '../PHP/getphotos.php', true);
	xmlhttp.send();
}

engagementPhotos();



$("#rsvpbtn").click(function () {
	$("#rsvpform").toggle();	
});

function showGuestNum () {
	let element = document.getElementById("guestnum");

	if(element.selectedIndex === 4) {
		document.getElementById("guestinput").style.display = "inline-block";
		document.getElementById("guestinput").setAttribute("name", "guestnum");
	}else {
		document.getElementById("guestinput").style.display = "none";
		document.getElementById("guestinput").setAttribute("name", "#");
	}
}


/*function submitForm() {
	var formElement = document.querySelector("#rsvpshow");
	var request = new XMLHttpRequest();
	request.open("POST", "connection.php");
	request.send(new FormData(formElement));
	document.querySelector('#submit_resp').style.display = "inline-block";
	
}*/

$(document).ready(function () {
	"use strict";
		$('#rsvpform').on('submit', function(e) {
			e.preventDefault();
			$.ajax({
				url: $(this).attr('action'),
				type: "POST",
				data: $(this).serialize(),
				success: function(data) {
					document.querySelector('#submitmessage').style.display = "inline-block";
					$('#rsvpform').toggle();
					//window.scrollTo(0,document.getElementById('submitmessage').offsetTop);
					document.querySelector("#days").scrollIntoView();
					console.log(data);
				},
				error: function (jXHR, textStatus, errorThrown) {
					alert(errorThrown);
				}
			});
		});
	});