//your JS code here. If required.
let timer= document.getElementById("timer");
setInterval(()=>{
	let instance= new Date();
	let date= `${(instance.getMonth())+1}/${instance.getDate()}/${instance.getFullYear()}`;
	
	let hrs= instance.getHours();
	// console.log(hrs);
	
	let ampm= hrs>=12?"PM":"AM";
	
	hrs= hrs>12?(hrs-12):hrs;
	// console.log(hrs);
		let time= `${hrs}:${instance.getMinutes()}:${instance.getSeconds()} ${ampm}`;
	
	timer.innerText= `${date}, ${time}`;
	
	
},1000);
