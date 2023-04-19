
function showMore1(){ 
	let par1 = document.getElementById("1-2");
	let button1 = document.getElementById("b1");
	let button3 = document.getElementById("b3");
	par1.classList.remove("hidden");
	button1.classList.add("hidden");
	button3.classList.remove("hidden");
}
function showLess1(){
	let par1 = document.getElementById("1-2");
	let button1 = document.getElementById("b1");
	let button3 = document.getElementById("b3");
	par1.classList.add("hidden");
	button1.classList.remove("hidden");
	button3.classList.add("hidden");
}
function showMore2(){ 
	let par2 = document.getElementById("2-2");
	let button2 = document.getElementById("b2");
	let button4 = document.getElementById("b4");
	par2.classList.remove("hidden");
	button2.classList.add("hidden");
	button4.classList.remove('hidden')
}
function showLess2(){
	let par2 = document.getElementById("2-2");
	let button2 = document.getElementById("b2");
	let button4 = document.getElementById("b4");
	par2.classList.add("hidden");
	button2.classList.remove("hidden");
	button4.classList.add("hidden");
}
function submitQuiz(){
		let Q1 = document.getElementById("q1").value;
		let Q2 = document.getElementById("q2").value;
		let Q3 = document.getElementById("q3").value;
		let Q4 = document.getElementById("q4").value;
		let Cone = document.getElementById("C1")
		let Ctwo = document.getElementById("C2")
		let Cthree = document.getElementById("C3")
		let Cfour = document.getElementById("C4")
		let score = document.getElementById("total")
		let grade = 0;
	
	if(Q1 == "Associative arrays have 2 variables associated with each other"){
			Cone.innerHTML= "Question 1: Correct";
			grade ++;
	}
	else{
		Cone.innerHTML = "Question 1: Incorrect";
	}
	if(Q2 == "Everything but a specific value"){
			Ctwo.innerHTML= "Question 2: Correct";
			grade ++;
	}
	else{
		Ctwo.innerHTML = "Question 2: Incorrect";
	}
	if(Q3 == "Images are embedded into the code not coded themselves"){
			Cthree.innerHTML= "Question 3: Correct";
			grade ++;
	}
	else{
		Cthree.innerHTML = "Question 3: Incorrect";
	}
	if(Q4 == "A class can be used an infinite amount of times where as an id can only be used once"){
			Cfour.innerHTML= "Question 4: Correct";
			grade ++;
	}
	else{
		Cfour.innerHTML = "Question 4: Incorrect";
	}
		score.innerHTML = grade + "/4";
}
