const quizQuestions = document.querySelectorAll(".quiz-question")
const credentialsButton = document.getElementById("credentials-button")
const seconds = document.getElementById("seconds")
const db = "https://server-side-proxytest.thegenocide.repl.co"
const submit = document.getElementById("submit")

let timerInterval
let firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, fifthAnswer, sixthAnswer, seventhAnswer;

Array.from(quizQuestions).forEach(question => {
    question.style.display = "none"
})

Array.from(quizQuestions).forEach((question, index) => {
    Array.from(question.children).forEach(el => {
        if (el.tagName == "INPUT"){
            if ((index + 1) === 1) {
                el.addEventListener("change", event => {
                    if (firstAnswer){
                        firstAnswer.checked = false
                    }
                    firstAnswer = event.target
                })

            } else if ((index + 1) == 2){
                el.addEventListener("change", event => {
                    if (secondAnswer){
                        secondAnswer.checked = false
                    }
                    secondAnswer = event.target
                }) 
            } else if ((index + 1) == 3){
                el.addEventListener("change", event => {
                    if (thirdAnswer){
                        thirdAnswer.checked = false
                    }
                    thirdAnswer = event.target
                }) 
            } else if ((index + 1) == 4){
                el.addEventListener("change", event => {
                    if (fourthAnswer){
                        fourthAnswer.checked = false
                    }
                    fourthAnswer = event.target
                }) 
            } else if ((index + 1) == 5){
                el.addEventListener("change", event => {
                    if (fifthAnswer){
                        fifthAnswer.checked = false
                    }
                    fifthAnswer = event.target
                }) 
            } else if ((index + 1) == 6){
                el.addEventListener("change", event => {
                    if (sixthAnswer){
                        sixthAnswer.checked = false
                    }
                    sixthAnswer = event.target
                }) 
            } else if ((index + 1) == 7){
                if (el.id != "yanglain"){
                    el.addEventListener("change", event => {
                        if (seventhAnswer){
                            seventhAnswer.checked = false
                        }
                        seventhAnswer = event.target
                    }) 
                }
            }
        }
    })
})

credentialsButton.addEventListener("click", async event => {
    let name = document.getElementById("name-input").value
    let class_ = document.getElementById("class-input").value
    let password = document.getElementById("password-input").value
    let text = document.getElementById("pesan").value
    let passwords = await fetch(`${db}/get?key=passwords&raw=false`)
    .then(response => {
        if (response.status >= 500){
            alert("Internal Server Error: Ada error didalam server. Bisa dicoba beberapa menit lagi...")
            return null;
        }
        return response.json()
    })
    .catch(err => {
        if (err instanceof TypeError){
            alert("Internel Server Error: Server sedang bermasalah, bisa dicoba beberapa menit lagi!")
        } else {
            alert(`Error: ${err}`)
        }
        return null;
    })

    if (!passwords){
        return;
    }

    if (!name || !class_ || !password || !text){
        alert("Masukan data yang lengkap!")
        return;
    }
    if (!passwords.includes(password)){
        alert("Password tidak valid, Antara password hangus atau salah penulisan!")
        return;
    }

    await fetch(`${db}/password_invalid?password=${password}`, {method: "POST"})
    .then(res => res.text())
    .then(text => {
        console.log(text)
    })
    Array.from(quizQuestions).forEach(question => {
        question.style.display = "block"
    })
    timerInterval = setInterval(() => {
        if (seconds.innerHTML <= 1){
            seconds.innerHTML = "0"
            alert("Timeout! Terimakasih sudah mencoba! Password hangus tidak bisa dipakai lagi")
            clearInterval(timerInterval)
            document.getElementById("submit").disabled = true
            Array.from(quizQuestions).forEach(question => {
                question.style.display = "none"
            })
            return;
        }
        let before = parseInt(seconds.innerHTML)
        seconds.innerHTML = (before - 1)
    }, 1000)
    Array.from(document.getElementById("credentials-input").children).forEach(container => {
        Array.from(container.children).forEach(el => {
            if (el.type == "text"){
                el.disabled = true
            } 
        })
    })
    credentialsButton.disabled = true
})

submit.addEventListener("click", _ => {
    if (!firstAnswer || !secondAnswer || !thirdAnswer || !fourthAnswer || !fifthAnswer || !sixthAnswer || !(document.getElementById("yanglain").value || seventhAnswer)){
        alert("Harap isi semuah pertanyaan")
        return;
    }
    let customText = document.getElementById("pesan").value
    let name = document.getElementById("name-input").value
    let class_ = document.getElementById("class-input").value
    let password = document.getElementById("password-input").value
    let otherAnswer = (Boolean(document.getElementById("yanglain").value) == true) ? document.getElementById("yanglain").value:document.querySelector(`label[for=${seventhAnswer.id}]`).innerText

    Array.from(quizQuestions).forEach(question => {
        question.style.display = "none"
    })

    if (!(firstAnswer.id == "komodo" && secondAnswer.id == "cendana" && thirdAnswer.id == "ricebowl-" && fourthAnswer.id == "ikan-bakar" && fifthAnswer.id == "sei" && sixthAnswer.id == "kupang" && Boolean(customText))){
        alert("Maaf jawaban ada yang salah. Terimakasih untuk mencoba quiz kami!");

    } else {
        alert(`Halo ${name} dari kelas ${class_} jawaban kamu benar! password ${password} hangus. Terimakasih pesannya: ${customText}.\nJawaban kamu untuk perntayaan terakhir: ${otherAnswer}`)
    }

    

})
//TODO: 1. Check jawaban benar, jika benar dapat kupon. Jangan lupa masukan data ke database.
//      2. Membuat text tidak bisa dicopy paste