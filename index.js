const header = document.getElementById("welcome")
const navbar = document.getElementById("navbar")
const aboutUs = document.getElementById("about-us-card")
const questions = document.getElementById("questions")
const wordToMove = document.getElementById("kami")
const metadata = document.getElementById("metadata")
const aboutUsPage = { //Make the value string rather than making a new object :)
	"what": "Pancasija merupakan website yang dikhususkan untuk proyek P5 sekolah kami. Tujuan dari website ini untuk memberi informasi kepada pembaca tentang proyek kami.",

	"who": "Kami dari SMKN 1 Jakarta jurusan SIJA ingin menyampaikan kepada kalian hasil kerja keras kami untuk proyek P5. Tim kami terus bekerja keras untuk memaximalkan hasil project! Pada akhirnya P5 memiliki 3 acara yaitu <a class='link' href='#'>fashion shows</a>, <a class='link' href='#'>kesenian</a>, <a class='link' href='#'>bazaar makanan</a>. Kami akan menampilkan acara berikut dengan tema dari provinsi NTT",

	"when": "Acara - acara tersebut dilenggarakan pada waktu puncak projek P5 yaitu pada tanggal <time datetime='10-5'>5 Oktober</time>. Jangan lupa mampir ya karena bakal ada kupon loh kalau selesain quiz di website ini",

	"where": "Acara kami akan diselenggarakan di halaman sekolah SMKN 1 Jakarta. Kami akan buka stand khusus. Bisa dicari di lapangan nanti. Kami akan tunggu kedatangan kalian!"
}

let range = 3
let page = "who"
let choice;
let transsitionWord = false;

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
  

Array.from(questions.children).forEach((child) => {
	child.addEventListener("click", (event) => {
		if (event.target.id == page){
			return;
		}

		page = event.target.id
		if (page == "what"){
			metadata.style.left = "2.5em"
			metadata.innerText = "Adalah"
			wordToMove.style.left = "0px"
		} else if (page == "who"){
			metadata.style.left = "0px"
			metadata.innerText = "Tentang"
			wordToMove.style.left = "3.5em"
		} else if (page == "when"){
			metadata.style.left = "0px"
			metadata.innerText = "Kapan Acara"
			wordToMove.style.left = "5.5em"
		} else if (page == "where"){
			metadata.style.left = "0px"
			metadata.innerText = "Dimana Acara"
			wordToMove.style.left = "6.1em"
		}
		let aboutUsDescription = aboutUs.children[1];
		aboutUsDescription.style.opacity = 0
		setTimeout(() => {
			aboutUsDescription.innerHTML = aboutUsPage[page];
			aboutUsDescription.style.opacity = 1
		}, 300);
	})
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
});

setTimeout(_ => {
	header.style.opacity = 1;
	header.style.transform = "translateY(-15px)";
}, 300)