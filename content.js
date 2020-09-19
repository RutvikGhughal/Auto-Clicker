
let button = document.getElementsByName('ctl00$plhMain$btnSubmit');
let status = document.getElementById('plhMain_lblMsg');
let url = `https://www.youtube.com/watch?v=TazHNpt6OTo`;

if(status.innerHTML=='No date(s) available for appointment.')
{
	if(button[0]!= undefined)
		button[0].click();
}
else
{
	let myWindow = window.open(url, "_blank");
}
