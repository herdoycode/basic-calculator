
const calculator = () => {
	const display = document.querySelector(".display");
	const buttons = Array.from(document.querySelectorAll(".button"));
	
	buttons.map(button=>  button.addEventListener("click", (e)=> {
		switch(e.target.value) {
			case "C" :
				display.innerText = "";
					break;
			case "←":
				display.innerText = display.innerText.slice(0, -1);
					break;
			case "=":
				display.innerText = eval(display.innerText);
					break;
			default:
				display.innerText += e.target.value;
		}
	}))
}
calculator();