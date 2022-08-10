const bgimg = document.getElementById("back-img")
const styleLink = document.getElementById("style-link")
const projs = document.getElementById("projs-thumb")
const sideContainer = document.getElementById("sidebar-container")
const animationCheckInput = document.getElementById("animation-check-input")
const bluishCheckInput = document.getElementById("bluish-check-input")
const fotoDiv = document.getElementById("foto-img")
const fotoImg = document.getElementById("profile-img")
const header = document.querySelector("header")
const headLogo = header.getElementsByTagName("img")[0]
const headUl = header.getElementsByTagName("ul")[0]
const headli = header.getElementsByTagName("li")
const headA = header.getElementsByTagName("a");
const desch1 = document.querySelector(".sobre-h1")
const descp = document.querySelector(".sobre-p")
const homeContent = document.getElementById("content")
const projContent = document.getElementById("content-projetos")
const phpContent = document.getElementById("content-php")
const rect1 = document.getElementById("rect1")
const rect2 = document.getElementById("rect2")
const rect3 = document.getElementById("rect3")
const burguer = document.querySelector(".burguer")
const goToTopButton = document.querySelector(".go-to-top")
const root = document.documentElement

window.onscroll = function(){
	var y = window.pageYOffset
	bgimg.style.marginTop = y/4 + "px"
	fotoDiv.style.marginTop = y/2 + "px"

	var yInvert = (200 - y)/100
	fotoDiv.style.opacity = yInvert
}

window.onload = function(){

	goToTopButton.click()
	rect1.style.transition = "0.8s ease-in-out"
	rect2.style.transition = "0.8s ease-in-out"
	rect3.style.transition = "0.8s ease-in-out"
	setTimeout(function(){
		rect1.style.left = "200vw"
		setTimeout(function(){
			rect2.style.left = "200vw"
			setTimeout(function(){
				rect3.style.left = "200vw"
				setTimeout(function(){
					rect1.remove()
					rect2.remove()
					rect3.remove()
				},600)
			},120)
		},120)
	},200)


	//Remove a marca d'agua kkkk
	childs = document.body.children

	if (childs.length > 2) {
		for(i=3 ; i>=1 ; i--){
			document.body.removeChild(childs[i])
		}
	}

}


//Checa se o usuario quer animacao de entrada
if(localStorage.getItem("enableAnimation") == "false"){
	console.log("Animação desabilitada")
	animationCheckInput.checked = false


	//Remove todas transições de elementos animados
	fotoDiv.style.transition = "0s"
	fotoImg.style.transition = "0s"
	header.style.transition = "0s"
	headUl.style.transition = "0s"
	bgimg.style.transition = "0s"
	desch1.style.transition = "0s"
	descp.style.transition = "0s"

	//Posiciona os elementos instantaneamente
	fotoDiv.style.left = "50%"
	fotoDiv.style.height = "300px"
	fotoDiv.style.width = "300px"
	fotoImg.style.opacity = "1"
	header.style.left = "0"
	headUl.style.right = "6%"
	bgimg.style.top = "-100%"
	desch1.style.top = "140px"
	descp.style.top = "170px"

	for(let i = 0; i <= 3; i++){
		headli[i].style.transition = "0s"
		headli[i].style.backgroundColor = "transparent"
		headli[i].style.color = "var(--main-color)"
	}

	rect1.remove()
	rect2.remove()
	rect3.remove()

}else{
	console.log("Animação habilitada")
	animationCheckInput.checked = true

	setTimeout(function(){
		window.scrollTo(0, 0)

		//Profile pic animation
		setTimeout(function(){
			window.scrollTo(0, 0)
			fotoDiv.style.left = "50%"
			setTimeout(function(){
				fotoDiv.style.height = "300px"
				setTimeout(function(){
					fotoDiv.style.width = "300px"
					setTimeout(function(){
						fotoImg.style.opacity = "1"
					},650)
				},500)
			},720)
		},100)
		setTimeout(function(){
			fotoDiv.style.transition = "0s"
		},1600)

		//Header animation
		setTimeout(function(){
			header.style.left = "0"
			setTimeout(function(){
				headUl.style.right = "6%"
				setTimeout(function(){
					for(let i = 0; i <= 3;i++){
						headli[i].style.backgroundColor = "transparent"
						headli[i].style.color = "var(--main-color)"
					}
				},850)
			},324)
		},100)

		//Background image animation
		setTimeout(function(){
			bgimg.style.top = "-100%"
			setTimeout(function(){
				bgimg.style.transition = "0s"
			},800)
		},300)

		//Text image animation
		setTimeout(function(){
			desch1.style.top = "140px"
			descp.style.top = "170px"
		},100)
	},1000)
}

//Verifica se o usuário selecionou o tema azul
// if(localStorage.getItem("theme") == "bluish"){
// 	bluishCheckInput.checked = true
// 	styleLink.href = "./css/bluish.css"
// }else{
// 	bluishCheckInput.checked = false
// 	styleLink.href = "./css/style.css"
// }


//Navigation
function link(id){
	if (id == "home") {
		homeContent.style.left = "0"
		projContent.style.left = "-150vw"
		phpContent.style.left = "-150vw"
		//document.documentElement.style.setProperty("--after-left", "33.8%");
	}else if(id == "js"){
		projContent.style.left = "0"
		homeContent.style.left = "-150vw"
		phpContent.style.left = "-150vw"
		//document.documentElement.style.setProperty("--after-left", "55%");
	}else if(id == "php"){
		phpContent.style.left = "0"
		projContent.style.left = "-150vw"
		homeContent.style.left = "-150vw"
		//document.documentElement.style.setProperty("--after-left", "85%");
	}
}

var isBurguerOpened = false
burguer.onclick = function (){

	if(isBurguerOpened == false){
		changeBurguerStyle("50%", "50%", "45deg", "-45deg", "6px")
		isBurguerOpened = true
	}else{
		changeBurguerStyle("20%", "80%", "0deg", "0deg", "-210px")
		isBurguerOpened = false
	}

}

function changeBurguerStyle(beforeTop, afterTop, beforeRot, afterRot, sideCont){
	root.style.setProperty("--before-top", beforeTop)
	root.style.setProperty("--after-top", afterTop)

	root.style.setProperty("--before-rotation", beforeRot)
	root.style.setProperty("--after-rotation", afterRot)

	sideContainer.style.right = sideCont
}

animationCheckInput.onclick = function(){
	if(animationCheckInput.checked){
		console.log("Ta checado")
		localStorage.setItem("enableAnimation", "true")
	}else{
		console.log("Nn ta checado")
		localStorage.setItem("enableAnimation", "false")
	}
}

bluishCheckInput.onclick = function(){
	if(bluishCheckInput.checked){
		localStorage.setItem("theme", "bluish")
	}else{
		localStorage.setItem("theme", "dark")
	}
	location.reload()
}

