// function Loadjson(file,callback)
// {
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange = function()
// 	{
// 		if(xhr.readyState === 4 && xhr.status == "200")
// 		{
// 			callback(xhr.responseText);
// 		}
// 	};
// 	xhr.send(null);
// }
// Loadjson("data.json",function(text)
// {
// 	var data = JSON.parse(text);
// 	console.log(data);
// 	basics(data.details);
// 	careerinfo(data.career);
// 	educationinfo(data.education);
// 	technicalskills(data.technicalskills);
// 	achievementsinfo(data.achievement);
// })
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());

			}
			else
			{
				reject(new Error('error'));

			}
		})
	})
}
var newfile =loadjson("data.json");
newfile.then(data=>{
		console.log(data);
	basics(data.details);
	careerinfo(data.career);
 	educationinfo(data.education);
 	technicalskills(data.technicalskills);
 	achievementsinfo(data.achievement);
})
var left = document.querySelector(".left");
function basics(det)
{
var img = document.createElement("img");
img.src = det.image;
left.appendChild(img);
var name1 = document.createElement("h3");
name1.textContent = det.name;
left.appendChild(name1);
var phno1 = document.createElement("h3");
phno1.textContent = det.phno;
left.appendChild(phno1);
var email=document.createElement("a");
email.href = "mail to:kasiannapurnabhavirishetty@gmail.com";
email.textContent = det.email;
left.appendChild(email);
var add = document.createElement("h2");
add.textContent ="address";
left.appendChild(add);
var hr = document.createElement("hr");
left.appendChild(hr);
var address = document.createElement("p");
address.textContent = det.address;
left.appendChild(address);
}
var right = document.querySelector(".right");
function  careerinfo(info)
{
	var  ca = document.createElement("h3");
	ca.textContent ="careerobjective";
	right.appendChild(ca);
	var hr = document.createElement("hr");
	right.appendChild(hr);
	var care = document.createElement("p");
	care.textContent=info.info;
	right.appendChild(care);
	
}
function educationinfo(edu)
{
	var ed =document.createElement("h3");
	ed.textContent="education qualification";
	right.appendChild(ed);
	var hp =document.createElement("hr");
	right.appendChild(hp);
	var table1=document.createElement("table");
	table1.border="2";
	right.appendChild(table1);
	tabledata="";
	for(i=0;i<edu.length;i++)
	{
        tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";

	}
	table1.innerHTML=tabledata;
}
	function technicalskills(tech)
	{
		var edc=document.createElement("h3");
		edc.textContent="technical skills";
		right.appendChild(edc);
        var hp1=document.createElement("hr");
	right.appendChild(hp1);
	for(i=0;i<tech.length;i++)
	{
      var s=document.createElement("h3");
      s.textContent=tech[i].title;
      right.appendChild(s);
      var ul=document.createElement("ul");
      var li=document.createElement("li");
      li.textContent=tech[i].info;
      ul.appendChild(li);
      right.appendChild(ul);

	}
}
function achievementsinfo(ment)
{
	var d=document.createElement("h3");
	d.textContent="achievements";
	right.appendChild(d);
	var k=document.createElement("hr");
	right.appendChild(k);
	for(i=0;i<ment.length;i++)
	{
		
		var ul=document.createElement("ul");
		var li=document.createElement("li");
		li.textContent=ment[i].title;
		ul.appendChild(li);
		right.appendChild(ul);
    }
 }   
function openpage(){
	window.open("resume.html","_self",true)
}

	

