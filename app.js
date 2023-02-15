// select the elements
const quote = document.querySelector('.quote');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c1ffc2f35msh4f1fe81e1f4f22dp1de285jsn3bb33d88ab1f',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

async function showQuote() {
	try {
		const response = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options);
		const res = await response.json();
		// console.log(res.content);
		let con = res.content;
		quote.innerHTML = con;
	}
	catch(error){
		console.log(error);
	}
}

showQuote();

// countdown
const timer = document.querySelector('.show-time');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
let countdown;
let maxTime = 10;


// functions
const startTimer = () => {
	if(!countdown){
		countdown = setInterval(time, 1000);
		console.log("timer started");	
	}
}

const time = () => {
	timer.innerHTML = `${maxTime} mins remaining`;
	console.log(maxTime);
	maxTime--;
console.log("log running before if")
if (maxTime < 0) {
	clearInterval(countdown);
	maxTime = 10;
	alert("timer cleared");
	countdown = null;
}
}

const resetTimer = () => {
	clearInterval(countdown);
	timer.innerHTML = "0 mins";
	console.log("timer reset");
	maxTime = 10;
	countdown = null;
}

// event listeners
start.addEventListener('click', startTimer);
reset.addEventListener('click', resetTimer);
