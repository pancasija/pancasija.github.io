//Others
const header = document.getElementById("welcome")
const navbar = document.getElementById("navbar")
const navitems = document.getElementById("navitems")
const aboutUs = document.getElementById("about-us-card")
const questions = document.getElementById("questions")
const wordToMove = document.getElementById("kami")
const metadata = document.getElementById("metadata")
const foodContainer = document.getElementById("food-section")
const foodInformationContainer = document.getElementById("information")
const pentasInformationContainer = document.getElementById("pentas-information-container")

//Containers with section element (except progress-container & footer & wrapper)
const welcomePageContainer  = document.getElementById("welcome-page-container")
const aboutUsContainer = document.getElementById("about-us-container")
const bazaarContainer = document.getElementById("bazaar-container")
const pentasContainer = document.getElementById("pentas-container")
const fashionContainer = document.getElementById("fashion-container")
const quizContainer = document.getElementById("quiz-container")
const progressContainer = document.getElementById("progress-container")
const footer = document.querySelector("footer")
const wrapper = document.getElementById("wrapper")

//Database
const db = "https://server-side-proxytest.thegenocide.repl.co"
const test = document.getElementById("db-test")
const raw = true

//progress-bars
const progressBar = document.getElementById("progress-bar")
const aboutUsPoint = document.getElementById("about-us-point")
const bazaarPoint = document.getElementById("bazaar-point")
const pentasPoint = document.getElementById("pentas-point")
const fashionPoint = document.getElementById("fashion-point")

//Data/information regarding a certain topic
const aboutUsPage = { 
	"what": "Pancasija merupakan website yang dikhususkan untuk proyek P5 jurusan kami. Tujuan dari website ini untuk memberi informasi kepada pembaca tentang proyek kami.",

	"who": "Kami dari SMKN 1 Jakarta jurusan SIJA ingin menyampaikan kepada kalian hasil kerja keras kami untuk proyek P5. Tim kami terus bekerja keras untuk memaximalkan hasil project! Pada akhirnya P5 memiliki 3 acara yaitu <a class='link' href='#'>bazaar makanan</a>, <a class='link' href='#'>fashion shows</a>, dan <a class='link' href='#'>kesenian</a>. Kami akan menampilkan acara berikut dengan tema dari provinsi NTT",

	"when": "Acara - acara tersebut dilenggarakan pada waktu puncak projek P5 yaitu pada tanggal <time datetime='10-5'>5 Oktober</time>. Jangan lupa mampir ya karena bakal ada kupon loh kalau selesain quiz di website ini",

	"where": "Acara kami akan diselenggarakan di halaman sekolah SMKN 1 Jakarta. Kami akan buka stand khusus. Bisa dicari di lapangan nanti. Kami akan tunggu kedatangan kalian!"
}
const foodDescription = {
	"salome": "<a href='https://www.detik.com/bali/nusra/d-6390608/mencicipi-kenyal-enaknya-salome-cilok-dari-dompu-yang-bikin-nagih#:~:text=Salome%20terbuat%20dari%20olahan%20daging,mencolok%20pada%20rasa%20dan%20varian.' class='link' target='_blank'>Salome</a> terbuat dari olahan daging ayam dicampur sedikit tepung kanji (pentol daging). Bentuk atau rupanya dan proses pembuatannya hampir sama dengan cilok. Namun ada sedikit perbedaan yang mencolok pada rasa dan varian.",
	"susu-goreng": "<a href='https://gacasshop.com/makanan-khas-rote-yang-unik-dan-lezat-untuk-dicoba/' class='link' target='_blank'>Susu Goreng</a> adalah salah satu hasil olahan susu tradisional masyarakat Rote Nusa Tenggara Timur (NTT), yang terbuat dari susu kerbau dengan campuran gula lontar melalui proses pemanasan.",
	"sambal-luat": "<a href='https://www.tribunnewswiki.com/2022/08/03/sambal-luat' class='link' target='_blank'>Sambal Luat</a> adalah hidangan pendamping khas dari Kupang, Nusa Tenggara Timur. Sambal luat adalah jenis sambal khas Kupang, Nusa Tenggara Timur (NTT). Sambal ini terbuat dari cabai rawit yang ditambahkan kemangi dan perasan jeruk nipis. Sambal luat selalu menjadi makanan pendamping bagi orang Nusa Tenggara Timur (NTT). Umumnya sambal ini dimakan bersama dengan sei sapi.",
	"es-sarang-burung": "<a href='https://www.tribunnewswiki.com/2021/12/31/es-sarang-burung' class='link'>Es Sarang Burung</a> yang terdiri dari agar-agar yang diserut sehingga sekilas mirip dengan sarang burung, akan dicampur dengan buah leci, sirup, biji selasih, es batu, dan air ini memang sangat menyegarkan dinikmati saat udara panas di siang hari.",
	"ricebowl": "Makanan berat kami yaitu riceball dengan aneka lauk dari NTT (gambar tidak sesuai dengan apa yang kita jual)."
}
const foodPrices = {
	"salome": "<a href='https://www.detik.com/bali/nusra/d-6390608/mencicipi-kenyal-enaknya-salome-cilok-dari-dompu-yang-bikin-nagih#:~:text=Salome%20terbuat%20dari%20olahan%20daging,mencolok%20pada%20rasa%20dan%20varian.' class='link' target='_blank'>Salome</a> dijual dengan harga 5 ribu",
	"susu-goreng": "<a href='https://gacasshop.com/makanan-khas-rote-yang-unik-dan-lezat-untuk-dicoba/' class='link' target='_blank'>Susu Goreng</a> dijual dengan harga 5 ribu",
	"sambal-luat": "<a href='https://www.tribunnewswiki.com/2022/08/03/sambal-luat' class='link' target='_blank'>Mie Sambal Luat</a> kami dijual dengan harga <strong>10K RP</strong>",
	"es-sarang-burung": "<a href='https://www.tribunnewswiki.com/2021/12/31/es-sarang-burung' class='link'>Es Sarang Burung</a> kami dijual dengan harga <strong>5K RP</strong>",
	"ricebowl": "Ricebowl kami dijual dengan harga <strong>12K RP</strong>",
}

//Variables
let range = 3
let page = "who"
let imageChoice = "salome"
let choice;

progressContainer.style.height = `${wrapper.clientHeight}px` 
aboutUsPoint.style.top = `${aboutUsContainer.clientHeight * 0.25}px`
bazaarPoint.style.top = `${aboutUsContainer.clientHeight + (bazaarContainer.clientHeight * 0.25)}px`
pentasPoint.style.top = `${aboutUsContainer.clientHeight + bazaarContainer.clientHeight + (pentasContainer.clientHeight * 0.25)}px`
fashionPoint.style.top = `${aboutUsContainer.clientHeight + bazaarContainer.clientHeight + pentasContainer.clientHeight + (fashionContainer.clientHeight * 0.25)}px`

fetch(`${db}/view`, {method: "POST"})

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
		for (let child of navitems.children){
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
			for (let child of navitems.children){
				if (!child.classList.contains("ignored")){
					child.style.opacity = 1
					child.style.top = `${range}em`
					range += 3;
				}
			}
		}, 100)
		range = 3
	}
	wrapper.classList.toggle("unfocus")
	footer.classList.toggle("unfocus")
	x.classList.toggle("change");
}

Array.from(navbar.children).forEach((child) => {
	if (!child.classList.contains("ignored") && child.id != "menu-header"){
		child.addEventListener("click", (event) => {
			if (choice){
				choice.classList.toggle("nav-item-clicked")
			}
			choice = event.target
			choice.classList.toggle("nav-item-clicked")
		})
	}
})
  

Array.from(questions.children).forEach((child) => {
	child.addEventListener("click", (event) => {
		if (event.target.id == page){
			return;
		}

		document.getElementById(page).classList.toggle("click")
		event.target.classList.toggle("click")

		page = event.target.id
		if (page == "what"){
			metadata.style.left = "2.5em"
			metadata.innerText = "Adalah"
			wordToMove.style.left = "0px"
		} else if (page == "who"){
			metadata.style.left = "0px"
			metadata.innerText = "Tentang"
			wordToMove.style.left = "3.7em"
		} else if (page == "when"){
			metadata.style.left = "0px"
			metadata.innerText = "Kapan Acara"
			wordToMove.style.left = "5.7em"
		} else if (page == "where"){
			metadata.style.left = "0px"
			metadata.innerText = "Dimana Acara"
			wordToMove.style.left = "6.3em"
		}
		let aboutUsDescription = aboutUs.children[1];
		aboutUsDescription.style.opacity = 0
		setTimeout(() => {
			aboutUsDescription.innerHTML = aboutUsPage[page];
			aboutUsDescription.style.opacity = 1
		}, 300);
	})
})

Array.from(foodContainer.children).forEach(child => {
	child.addEventListener("click", (event) => {
		if (event.target.id == imageChoice){
			return;
		}

		document.getElementById(imageChoice).classList.toggle("click")
		event.target.classList.toggle("click")
		
		imageChoice = event.target.id
		foodInformationContainer.style.opacity = 0
		setTimeout(() => {
			let informationHeader = foodInformationContainer.children[0]
			let informationDescription = foodInformationContainer.children[1]
			let informationPrice = foodInformationContainer.children[4]
			if (imageChoice.includes("-")){
				informationHeader.innerText = imageChoice.replace(/-/g, " ") 
			} else {
				informationHeader.innerText = imageChoice
			}
			informationDescription.innerHTML = foodDescription[imageChoice]
			informationPrice.innerHTML = foodPrices[imageChoice]
			foodInformationContainer.style.opacity = 1
		}, 300);
	})
})

window.addEventListener('scroll', () => {
	let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight - footer.clientHeight;
	let scrolled = (winScroll / height) * 100;
	if (scrolled > 100){
		scrolled = 100
	}
	console.log(scrolled)
	let pixelScrolled = (scrolled > 95) ? progressContainer.clientHeight * (scrolled/100):progressContainer.clientHeight * (scrolled/100) - 10
	progressBar.style.height = `${pixelScrolled}px`;
	if (pixelScrolled >= (parseInt(aboutUsPoint.style.top.replace("px", "")) + 50)){
		aboutUsPoint.style.height = "5%"
		aboutUsPoint.style.transform = "scale(1.7)"
	} else {
		aboutUsPoint.style.height = "1%"
		aboutUsPoint.style.transform = ""
	}

	if (pixelScrolled >= (parseInt(bazaarPoint.style.top.replace("px", "")) + 50)){
		bazaarPoint.style.height = "7%"
		bazaarPoint.style.transform = "scale(1.7)"
	} else {
		bazaarPoint.style.height = "1%"
		bazaarPoint.style.transform = ""
	}

	if (pixelScrolled >= (parseInt(pentasPoint.style.top.replace("px", "")) + 50)){
		pentasPoint.style.height = "7%"
		pentasPoint.style.transform = "scale(1.7)"
	} else {
		pentasPoint.style.height = "1%"
		pentasPoint.style.transform = ""
	}

	if (pixelScrolled >= (parseInt(fashionPoint.style.top.replace("px", "")) + 50)){
		fashionPoint.style.height = "7%"
		fashionPoint.style.transform = "scale(1.7)"
	} else {
		fashionPoint.style.height = "1%"
		fashionPoint.style.transform = ""
	}
	
	if (isElementInViewport(header)) {
		header.style.opacity = 1;
		header.style.transform = "translateY(-15px)"
	} else {
		header.style.opacity = 0;
		header.style.transform = "translateY(15px)"
	}
});

window.addEventListener("resize", (event) => {
	progressContainer.style.height = `${wrapper.clientHeight}px` 
	aboutUsPoint.style.top = `${aboutUsContainer.clientHeight * 0.25}px`
	bazaarPoint.style.top = `${aboutUsContainer.clientHeight + (bazaarContainer.clientHeight * 0.25)}px`
	pentasPoint.style.top = `${aboutUsContainer.clientHeight + bazaarContainer.clientHeight + (pentasContainer.clientHeight * 0.25)}px`
	fashionPoint.style.top = `${aboutUsContainer.clientHeight + bazaarContainer.clientHeight + pentasContainer.clientHeight + (fashionContainer.clientHeight * 0.25)}px`
})

setTimeout(_ => {
	header.style.opacity = 1;
	header.style.transform = "translateY(-15px)";
}, 300)