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
const db = "https://kv.replit.com/v0/eyJhbGciOiJIUzUxMiIsImlzcyI6ImNvbm1hbiIsImtpZCI6InByb2Q6MSIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb25tYW4iLCJleHAiOjE2OTU3MjUyMDgsImlhdCI6MTY5NTYxMzYwOCwiZGF0YWJhc2VfaWQiOiJkYzY1YmE2Ny1jZDg2LTRmZTMtYTYzZC02NjExMzQ2NzA2YmQiLCJ1c2VyIjoiVGhlR2Vub2NpZGUiLCJzbHVnIjoidGVzdGRiIn0.48oLqvUO7IsJT2RvZ6VHOCxfAR0Cylcus4N_P-Vz7Mp7EpC0hKBchK9pAuHna8nD6DisbUUqIYBXKPFR-S6mGw"
const aboutUsPage = { 
	"what": "Pancasija merupakan website yang dikhususkan untuk proyek P5 jurusan kami. Tujuan dari website ini untuk memberi informasi kepada pembaca tentang proyek kami.",

	"who": "Kami dari SMKN 1 Jakarta jurusan SIJA ingin menyampaikan kepada kalian hasil kerja keras kami untuk proyek P5. Tim kami terus bekerja keras untuk memaximalkan hasil project! Pada akhirnya P5 memiliki 3 acara yaitu <a class='link' href='#'>bazaar makanan</a>, <a class='link' href='#'>fashion shows</a>, dan <a class='link' href='#'>kesenian</a>. Kami akan menampilkan acara berikut dengan tema dari provinsi NTT",

	"when": "Acara - acara tersebut dilenggarakan pada waktu puncak projek P5 yaitu pada tanggal <time datetime='10-5'>5 Oktober</time>. Jangan lupa mampir ya karena bakal ada kupon loh kalau selesain quiz di website ini",

	"where": "Acara kami akan diselenggarakan di halaman sekolah SMKN 1 Jakarta. Kami akan buka stand khusus. Bisa dicari di lapangan nanti. Kami akan tunggu kedatangan kalian!"
}

const foodDescription = {
	"salome": "<a href='https://www.detik.com/bali/nusra/d-6390608/mencicipi-kenyal-enaknya-salome-cilok-dari-dompu-yang-bikin-nagih#:~:text=Salome%20terbuat%20dari%20olahan%20daging,mencolok%20pada%20rasa%20dan%20varian.' class='link' target='_blank'>Salome</a> terbuat dari olahan daging ayam dicampur sedikit tepung kanji (pentol daging). Bentuk atau rupanya dan proses pembuatannya hampir sama dengan cilok. Namun ada sedikit perbedaan yang mencolok pada rasa dan varian.",
	"susu-goreng": "<a href='https://gacasshop.com/makanan-khas-rote-yang-unik-dan-lezat-untuk-dicoba/' class='link' target='_blank'>Susu Goreng</a> adalah salah satu hasil olahan susu tradisional masyarakat Rote Nusa Tenggara Timur (NTT), yang terbuat dari susu kerbau dengan campuran gula lontar melalui proses pemanasan.",
	"lawar-ayam": "<a href='http://www.masakandapurku.com/2015/11/resep-membuat-ayam-lawar-khas-ntt.html' class='link' target='_blank'>Lawar Ayam</a> merupakan makanan khas Nusa Tenggara Timur yang biasa dijadikan lauk untuk menyantap nasi. Rasanya pedas, gurih dan nikmat serta menggugah selera makan Anda. Kalau Anda pergi ke NTT, jangan lupa mampir ke warung-warung yang menjualnya.",
	"catemak-jagung": "<a href='https://www.nttmediaexpress.com/region-ntt/4249122460/catemak-jagung-kuliner-khas-ntt-makanan-penutup-yang-menarik-untuk-dicoba-resep-mudah-didapat#:~:text=LEMBATA%2C%20NTT%20EXPRESS.COM%20%2D,yang%20sangat%20menggugah%20selera%2C%20lho.' class='link' target='_blank'>Catemak Jagung</a> adalah makanan penutup yang berasal dari Nusa Tenggara Timur. Dessert satu ini berbahan utama kacang-kacangan yang disertai dengan bermacam sayuran. Walaupun makanan penutup, olahan ini memiliki rasa asin yang sangat menggugah selera",
	"sambal-luat": "<a href='https://www.tribunnewswiki.com/2022/08/03/sambal-luat' class='link' target='_blank'>Sambal Luat</a> adalah hidangan pendamping khas dari Kupang, Nusa Tenggara Timur. Sambal luat adalah jenis sambal khas Kupang, Nusa Tenggara Timur (NTT). Sambal ini terbuat dari cabai rawit yang ditambahkan kemangi dan perasan jeruk nipis. Sambal luat selalu menjadi makanan pendamping bagi orang Nusa Tenggara Timur (NTT). Umumnya sambal ini dimakan bersama dengan sei sapi.",
	"es-sarang-burung": "<a href='https://www.tribunnewswiki.com/2021/12/31/es-sarang-burung' class='link'>Es Sarang Burung</a> yang terdiri dari agar-agar yang diserut sehingga sekilas mirip dengan sarang burung, akan dicampur dengan buah leci, sirup, biji selasih, es batu, dan air ini memang sangat menyegarkan dinikmati saat udara panas di siang hari."
}
const foodPrices = {
	"salome": "<a href='https://www.detik.com/bali/nusra/d-6390608/mencicipi-kenyal-enaknya-salome-cilok-dari-dompu-yang-bikin-nagih#:~:text=Salome%20terbuat%20dari%20olahan%20daging,mencolok%20pada%20rasa%20dan%20varian.' class='link' target='_blank'>Salome</a> dibuat oleh Rasya dengan harga 5 ribu",
	"susu-goreng": "<a href='https://gacasshop.com/makanan-khas-rote-yang-unik-dan-lezat-untuk-dicoba/' class='link' target='_blank'>Susu Goreng</a> dibuat oleh Rasya dengan harga  5 ribu",
	"lawar-ayam": "<a href='http://www.masakandapurku.com/2015/11/resep-membuat-ayam-lawar-khas-ntt.html' class='link' target='_blank'>Lawar Ayam</a> kami dibuat oleh Navito dengan harga 50 ribu",
	"sambal-luat": "<a href='https://www.tribunnewswiki.com/2022/08/03/sambal-luat' class='link' target='_blank'>Sambal Luat</a> kami dibuat oleh Rasya dengan harga 5 ribu",
	"es-sarang-burung": "<a href='https://www.tribunnewswiki.com/2021/12/31/es-sarang-burung' class='link'>Es Sarang Burung</a> kami dibuat oleh Rafael dengan harga 5 ribu",
	"catemak-jagung": "<a href='https://www.nttmediaexpress.com/region-ntt/4249122460/catemak-jagung-kuliner-khas-ntt-makanan-penutup-yang-menarik-untuk-dicoba-resep-mudah-didapat#:~:text=LEMBATA%2C%20NTT%20EXPRESS.COM%20%2D,yang%20sangat%20menggugah%20selera%2C%20lho.' class='link' target='_blank'>Catemak Jagung</a> kami dibuat oleh Rasya dengan harga 5 ribu",
}

let range = 3
let page = "who"
let imageChoice = "salome"
let choice;

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
	x.classList.toggle("change");
}

// Function to handle the scroll event

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