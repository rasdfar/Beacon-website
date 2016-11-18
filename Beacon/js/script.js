//var dataReq = new XMLHttpRequest(); 
var loginReq = new XMLHttpRequest();
var registerReq = new XMLHttpRequest();
var data;
var loginData;
var cookie;
/*
function testi(divname){			//gets temperatures. starts when user selects value into dropbox
	//var id_select = "id="+document.getElementById("selected_id").value;
	dataReq.open("get", "../Beacon/php/testi.php", false);
	dataReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	dataReq.onload = function() {
	    if(dataReq.readyState == 4 && dataReq.status == 200) {
			data= JSON.parse(this.responseText);			//data is set to variable witch is later used in char. JSON parse is used that its in right form for chart to use
			console.log(data);	
		}
	};
	dataReq.send();
	var newDiv = document.createElement('testi');
	var testHTML = "";
	var i;
	for( i = 0; i < data.length; i++){
		testHTML +="<div>";
		testHTML += "<p>" + data[i] + "</p>";
		testHTML +="<a href='' class='button' type='submit' style='float:right'>Edit</a>";
		testHTML +="</div>";
	}
	newDiv.innerHTML = testHTML;
	document.getElementById("testi").appendChild(newDiv);
}
*/

function logIn(){
//get email and pw from html
//base64 pw
//post call php
//php returns true->cookie and log in
//if php returns false -> pw or email wrong
var email = "email="+document.getElementById("email").value;
var password = document.getElementById("password").value;
var pw64 = "password=" + btoa(password);
var send = email + "&" + pw64;

console.log(email);
console.log(pw64);

//ajax call
loginReq.open("POST", "../Beacon/php/login.php", true);
	loginReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	loginReq.onreadystatechange = function() {
	    if(loginReq.readyState == 4 && loginReq.status == 200) {
		    var return_data = loginReq.responseText;
			loginData= return_data;
			console.log(loginData);
			passwordCheck();
		}
	}
	loginReq.send(send);
}

function passwordCheck(){
	if(loginData == "true"){
		console.log("loggin in....");
		document.cookie = "id=bG9nZ2VkIGlu";
		window.location.href = "index.html";
	}
	else{
		console.log("no acces")
		error("alert","Wrong email or password");
	}
}

function load(){
	cookie = getCookie("id");
	if(cookie != "bG9nZ2VkIGlu"){
		window.location.href = "login.html";
	}
	else{
		window.location.href = "feed.html"
	}
}

function feedLoad(){
	cookie = getCookie("id");
	console.log(cookie);
	if(cookie != "bG9nZ2VkIGlu"){
		window.location.href = "index.html";

	}
	else{
		console.log("welcome");
	}
}

function deleteCookie(){
	document.cookie = "id=null; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	window.location.href = "index.html"
}

function register(){
	//email and password from text fields
	//if password and confirm password == ->php call
	var emailLog = document.getElementById("regEmail").value;
	var email = "email="+document.getElementById("regEmail").value;
	var password = document.getElementById("regPassword").value;
	var confirmPassword = document.getElementById("confirmPassword").value;
	
	if (password == confirmPassword && password != "" && email != ""){
		var pw64 = "password=" + btoa(password);
		var send = email + "&" + pw64;
		//ajax
		registerReq.open("POST", "../Beacon/php/register.php", true);
		registerReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
		registerReq.onreadystatechange = function() {
	    if(registerReq.readyState == 4 && registerReq.status == 200) {
		    var return_data = registerReq.responseText;
			var data= return_data;
			console.log(data);
			if(data == "Success"){
				document.getElementById("email").value = emailLog;
				document.getElementById("password").value = password;
				logIn();
			}
			else{
				error("registerError", data);
			}
		}
	}
	registerReq.send(send);
	}
	if(password == "" || email == ""){
		error("registerError","Email or pasword can not be left blank")
	}
	else{
		console.log("FAIL!");
		error("registerError","Passwords don't match");
	}
}

function error(div,message){
	var selectedDiv = div;
	var msg = message;
	
	var newDiv = document.createElement(selectedDiv);
	
	var selectHTML = "";
	selectHTML="<div data-alert class='alert-box'>";
	selectHTML += msg;
	selectHTML += "<a href=\"#\" class=\"close\">&times;</a>"
	selectHTML +="</div>"
	
	newDiv.innerHTML = selectHTML;
	document.getElementById(selectedDiv).appendChild(newDiv);
	setTimeout(function(){
        $(".alert-box a.close").click();
	}, 5000);
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}