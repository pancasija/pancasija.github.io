const header = document.getElementById("welcome")
const navbar = document.getElementById("navbar")
let range = 3

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

setTimeout(_ => {
	header.style.opacity = 1
	header.style.transform = "translateY(-15px)"
}, 300)