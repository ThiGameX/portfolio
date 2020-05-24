
	const bgimg = document.getElementById("back-img")
	const projs = document.getElementById("projs-thumb")
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

	window.onscroll = function(){
		var y = window.pageYOffset
		bgimg.style.marginTop = y/4 + "px"
		fotoDiv.style.marginTop = y/2 + "px"

		var yInvert = (200 - y)/100
		fotoDiv.style.opacity = yInvert
	}

	window.onload = function(){

			window.scrollTo(0, 0)

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
			    
        		for(i=3 ; i>=1 ; i--){
        	        document.body.removeChild(childs[i])
        		}
			    
	}

	//Scroll top on reload
	window.onbeforeunload = function(){
		window.scrollTo(0, 0)
	}


	setTimeout(function(){

			//Profile pic animation
		setTimeout(function(){
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
						for(let i = 0; i <= 2;i++){
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


		//Navigation
	function link(id){
		if (id == "home") {
			homeContent.style.left = "0"
			projContent.style.left = "-150vw"
			phpContent.style.left = "-150vw"
			//document.documentElement.style.setProperty("--after-left", "33.8%");
		}else if(id == "projetos"){
			projContent.style.left = "0"
			homeContent.style.left = "-150vw"
			phpContent.style.left = "-150vw"
			//document.documentElement.style.setProperty("--after-left", "55%");
		}else{
			phpContent.style.left = "0"
			projContent.style.left = "-150vw"
			homeContent.style.left = "-150vw"
			//document.documentElement.style.setProperty("--after-left", "85%");
		}
	}
