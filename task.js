// XMLHttpRequest
function jsonloading(file,callback) {
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=()=>{
	if (xhr.readyState =="4" && xhr.status =="200") {
	callback(xhr.responseText);	
	}  
}
xhr.send();
}

jsonloading("data.json",(text)=>{
	let d = JSON.parse(text);
	console.log(d);
	details(d.details);
	EducationalDetails(d.EducationalDetails);
    
})
var main = document.querySelector(".main");
function details(react){
var p = document.createElement("img");
p.src=react.picture;
p.alt="profile-pic";
main.appendChild(p);
var n = document.createElement("h1");
n.textContent= react.name;
main.appendChild(n);
var a = document.createElement("h1");
a.textContent= react.email;
main.appendChild(a);
var b = document.createElement("h1");
b.textContent= react.phone number;
main.appendChild(b);
var h1=document.createElement("h1");
h1.textContent="hobbies";
main.appendChild(h1);
h1.appendChild(document.createElement("hr"));
var ul = document.createElement("ul");
for (var i = 0; i < react.Languages.length; i++) {
	var li = document.createElement("li");
	li.textContent = react.Languages[i];
	ul.appendChild(li);
}
main.appendChild(ul);
var h1=document.createElement("h1");
h1.textContent="Carrier Objective";
main.appendChild(h1);
function EducationalDetails(s){
var table = document.createElement("table");
var row ="";
for (var i = 0; i < s.length; i++) {
	row +="<tr><td>"+s[i].Course name+"</td><td>"+s[i].Institute+"</td><td>"+s[i].Board/University+"</td><td>"+s[i].year of passing+"</td><td>"+s[i].Percentage/CGPA+"</td></tr>";
}
table.innerHTML=row;
main.appendChild(table);
}
var h1=document.createElement("h1");
h1.textContent="Mini Project";
main.appendChild(h1);
var h1=document.createElement("h1");
h1.textContent="Declaration";
main.appendChild(h1);

}

