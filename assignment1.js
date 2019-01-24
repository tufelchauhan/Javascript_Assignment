var experience_array = ["None",">= 6 months",">= 1 years",">= 2 years",">= 5 years",">= 10 years"];
var qualification_array = ["10th","12th","B.C.A","M.sc(IT)","Ph.D."];

function Friend(name,isEnabled){
	this.name=name;
	this.isEnabled=isEnabled;
}

var languages  = [ 
	new Friend("C/C++",false), 
	new Friend("Java",true), 
	new Friend("C#",true),
	new Friend("PHP",false),
	new Friend("Python",false)
];

function Create_Dynamic_Content(){
	Create_Qual_DropDownList();
	Create_expe_DropDownList();
	Create_Lang_Checkbox();
}

function Create_Qual_DropDownList(){
	var qualification_dropdown = document.getElementById("qualification_dropdown"); // get qualification dropdown div reference

	var select_ = document.createElement("select");  // create Select
	select_.id = "qualification";      // assign select id
	select_.name = "qualification";   // assign select name
	qualification_dropdown.appendChild(select_);   // append seelct to qualification dropdown div
	
	for (var i = 0; i < qualification_array.length; i++) { 
		var option_ = document.createElement("option");  //create option
		option_.value = qualification_array[i];  // assign option value
		option_.text = qualification_array[i];  // asign option text
		select_.appendChild(option_);       // append option to select
	}
}

function Create_expe_DropDownList(){
	var experience_dropdown = document.getElementById("experience_dropdown"); // get experience dropdown div reference

	var select_ = document.createElement("select");  // create Select
	select_.id = "experience";      // assign select id
	select_.name = "experience";   // assign select name
	experience_dropdown.appendChild(select_);   // append seelct to experience dropdown div
	
	for (var i = 0; i < experience_array.length; i++) { 
		var option_ = document.createElement("option");  //create option
		option_.value = experience_array[i];  // assign option value
		option_.text = experience_array[i];  // asign option text
		select_.appendChild(option_);       // append option to select
	}
}

function Create_Lang_Checkbox() {
	for(var i=0 ; i<languages.length ; i++){
		var chk = document.createElement('input');  // create input
		chk.setAttribute('type', 'checkbox');       // define input type
		chk.setAttribute('id', languages[i].name);      // assign checkbox id
		chk.setAttribute('value', languages[i].name);   // assign checkbox value 
		chk.setAttribute('name', 'languages');      // assign checkbox name
		if(languages[i].isEnabled===true)// check for default checked attribute
		{
			chk.setAttribute('checked', 'true');    
		}
		var lbl = document.createElement('label');  // create label.
		lbl.setAttribute('for', languages[i]);     // attach label to checkbox
		lbl.appendChild(document.createTextNode(languages[i].name)); // create textnode for label and attach it
		
		container.appendChild(chk);  // append checkbox to checkbox_div
		container.appendChild(lbl);  // append checkbox to checkbox_div
		container.appendChild(document.createElement('br'));  // create <br> and append it to checkbox_div
	}
}
	
var user; // use to store registratoni details
function display(){
	var form_ = document.getElementById("registration_form");
	user = new user_details(form_.firstname.value,form_.lastname.value,form_.email.value,form_.contact.value,form_.address.value,form_.username.value,form_.pass.value,form_.gender.value,form_.qualification.value,form_.experience.value,form_.languages);
	/*alert(user.firstname);
	alert(user.lastname);
	alert(user.email);
	alert(user.contact);
	alert(user.address);
	alert(user.username);
	alert(user.pass);
	alert(user.gender);
	alert(user.qualification);
	alert(user.experience);*/
	
	console.log("Firstname : "+user.firstname);
	console.log("lastName : "+user.lastname);
	console.log("Email : "+user.email);
	console.log("Contact Number " +user.contact);
	console.log("Address"+user.address);
	console.log("Username :"+user.username);
	console.log("Password : "+user.pass);
	console.log("Gender : "+user.gender);
	console.log("Qualification : "+user.qualification);
	console.log("Experience "+user.experience);
	console.log("Coding Languages : ");
	for(var j=0;j<languages.length;j++)
	{
		console.log(languages[j]);
	}
}

	function user_details(fname,lname,email,contact,address,uname,pass,gender,qual,expe,lang){
		var i;
		this.firstname=fname;
		this.lastname=lname;
		this.email=email;
		this.contact=contact;
		this.address=address;
		this.username=uname;
		this.pass=pass;
		this.gender=gender;
		this.qualification=qual;
		this.experience=expe;
		this.languages = [];
		for(i=0;i<lang.length;i++)
		{
			if(lang[i].checked)
			{
				languages.push(lang[i].value);
			}
		}
	}