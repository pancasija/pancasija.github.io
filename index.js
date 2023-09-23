const header = document.getElementById("welcome")
const navbar = document.getElementById("navbar")
const aboutUs = document.getElementById("about-us")
const db = "https://kv.replit.com/v0/eyJhbGciOiJIUzUxMiIsImlzcyI6ImNvbm1hbiIsImtpZCI6InByb2Q6MSIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb25tYW4iLCJleHAiOjE2OTU1NTAxMzcsImlhdCI6MTY5NTQzODUzNywiZGF0YWJhc2VfaWQiOiJkYzY1YmE2Ny1jZDg2LTRmZTMtYTYzZC02NjExMzQ2NzA2YmQiLCJ1c2VyIjoiVGhlR2Vub2NpZGUiLCJzbHVnIjoidGVzdGRiIn0.1jQyPG-DFwCQhdefV9zZlwLgrMRX5dTQ4d0p6qxVI2b-s-mHJ8H5ql-m8-PjI3KAS6H-Yip8Jqyedea21u1INg"
let range = 3
let pageChoice = 1
let choice;

fetch(db, {method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, body: "super_secret_password=LAMOAKSOAKSOAKSOAKSOAKOS", mode: "no-cors"}).catch(err => console.error("Looks like there an error: ", err))

function isElementInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
	  rect.top >= 0 &&
	  rect.left >= 0 &&
	  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
  }

function triggerNavbar(x) {
	if (x.classList.contains("change")){
		for (let child of navbar.children){
			if (!child.classList.contains("ignored")){
				range -= 3;
				child.style.top = "0em"
				child.style.opacity = 0
			}
		}
		setTimeout(() => navbar.style.right = "-4em", 50)
	}
	else {
		navbar.style.right = "0em";
		setTimeout(() => {
			for (let child of navbar.children){
				if (!child.classList.contains("ignored")){
					child.style.opacity = 1
					child.style.top = `${range}em`
					range += 3;
				}
			}
		}, 100)
		range = 3
	}
	x.classList.toggle("change");
}

// Function to handle the scroll event

Array.from(navbar.children).forEach((child) => {
	if (!child.classList.contains("ignored")){
		child.addEventListener("click", (_event) => {
			if (choice && choice.style.borderRight.startsWith("3px")){
				choice.style.borderRight = ""
				choice.style.backgroundColor = ""
			}
			choice = child
			choice.style.borderRight = "3px solid rgb(188, 172, 216)"
			choice.style.backgroundColor = "rgba(124, 112, 143, 0.30)"
		})
	}
})
  
// Attach the handleScroll function to the window's scroll event
window.addEventListener('scroll', () => {
	if (isElementInViewport(header)) {
		header.style.opacity = 1;
		header.style.transform = "translateY(-15px)"
	} else {
		header.style.opacity = 0;
		header.style.transform = "translateY(15px)"
	}

	if (isElementInViewport(bazaar)) {
		bazaar.style.opacity = 1;
		bazaar.style.transform = "translateY(-15px)"
	} else {
		bazaar.style.opacity = 0;
		bazaar.style.transform = "translateY(15px)"
	}
});

// nextButton.addEventListener("click", (event) => {
// 	if (pageChoice == 3){pageChoice = 1}
// 	else {pageChoice++}
// 	let pageInformation = pages[pageChoice]

// 	informationHeader.style.opacity = 0
// 	informationDescription.style.opacity = 0

// 	setTimeout(() => {
// 		informationHeader.style.opacity = 1
// 		informationDescription.style.opacity = 1
// 		informationHeader.innerText = pageInformation.title
// 		informationDescription.innerText = pageInformation.description
// 	}, 200)	
// })

// previousButton.addEventListener("click", (event) => {
// 	if (pageChoice == 1){pageChoice = 3}
// 	else {pageChoice -= 1}
// 	let pageInformation = pages[pageChoice]

// 	informationHeader.style.opacity = 0
// 	informationDescription.style.opacity = 0

// 	setTimeout(() => {
// 		informationHeader.style.opacity = 1
// 		informationDescription.style.opacity = 1
// 		informationHeader.innerText = pageInformation.title
// 		informationDescription.innerText = pageInformation.description
// 	}, 200)
// })

setTimeout(_ => {
	header.style.opacity = 1;
	header.style.transform = "translateY(-15px)";
}, 300)