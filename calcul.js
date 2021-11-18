function getCen(){
	return{
		Grupp:[3000,4000,5000],
		mesta:[500,1500,1000],
		afish:500
	};
}
function uberiradios()
{
	let radios = document.getElementsByName("myradio");
	console.log("R");
	for(var i=0; i<3;i++)
		radios[i].checked=false;
	
}
function ubericheckbox()
{
	let checkboxes = document.getElementsByName("afish");
	for(var i=0; i<1;i++)
	{
		checkboxes[i].checked=false;
	}
}
function newprice()
{
	let s=document.getElementById("myselect");
	let cena=0;
	let ceni=getCen();
	let CenaNumber =parseInt(s.value);
	cena=ceni.Grupp[CenaNumber];
	
	let radiot=document.getElementById("radios");
	console.log(s.value);
	if(s.value == "1"){
		ubericheckbox();
		radiot.style.display ="block";
		let radios = document.getElementsByName("myradio");
	radios.forEach(function(radio){
		if (radio.checked){
			let radioCena = ceni.mesta[radio.value];
			if (radioCena !== undefined){
				cena += radioCena;
			}
		}
	});
	}
	else
		radiot.style.display = "none";
	
	let checkf =document.getElementById("checkbox");
	console.log(s.value);
	if (s.value == "2"){
		uberiradios();
		checkf.style.display = "block";
		let checkboxes = document.getElementsByName("afish");
	checkboxes.forEach(function(checkbox){
		if (checkbox.checked){
			let afishCena =ceni.afish;
			cena += afishCena;
		}
	});
	}
	else
		checkf.style.display = "none";
	
	let Cenabill = document.getElementById("out");
	let k = document.getElementsByName("number1");
	console.log(s.value);
	if (s.value =="0"){
		uberiradios();
		ubericheckbox();
		console.log(s.value);
		cena=ceni.Grupp[0];
		k[0] = Number.parseInt(k[0]);
		var rec=cena*k[0].value;
		Cenabill.innerHTML = Math.abs(rec);
	}
	const chek =/^\d+$/;
	const pr= /[0-9/.]+/;
	
	if  (chek.test(Number.parseInt(k[0].value))==false){
		console.log(s.value);
		Cenabill.innerHTML='Введённые данные неверны';
	}
	else
	{
		
		k[0] = Number.parseInt(k[0].value);
		var res=cena*k[0].value;
		Cenabill.innerHTML = Math.abs(res);
		return false;
	}
}

window.addEventListener('DOMContentLoaded',function(event) {
    console.log("DOM finaly loaded and parsed");
    const chek =/^\d+$/;
    let radiof = document.getElementById("radios");
	radiof.style.display="none";
	
    let select1 = document.getElementById("myselect");

    
	select1.addEventListener("change",function(event){
	    let select = event.target;
	    newprice();
	});
	 let kolvo = document.getElementsByName("number1");
	let kol= kolvo[0];
	kol.addEventListener("input",function(event){
		let p = event.target;
		newprice();
	});
    let radios = document.getElementsByName("myradio");
	radios.forEach(function(radio){
		radio.addEventListener("change",function(event){
			let r = event.target;
			newprice();
		});
	});
	
    let checkboxes = document.getElementsByName("afish");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
          let g = event.target;
          newprice();
      });
    });
   
	newprice();
});
