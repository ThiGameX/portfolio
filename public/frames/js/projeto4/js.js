
	const transactionsListBox = document.querySelector("#transactions-list")
	const transactionNameInput = document.querySelector("#transac-name")
	const transactionValueInput = document.querySelector("#transac-value")
	const saldoInput = document.querySelector("#saldo-value")
	const ganhoInput = document.querySelector("#ganho-value")
	const despInput = document.querySelector("#despesas-value")
	const addTransacBtn = document.querySelector("#add-transaction-btn")
	const closeButton = document.querySelector(".close-button")
	var transacName, transacValue

	window.onload = function(){
		var localSaldo = localStorage.getItem("stored-saldo")
		saldoValue = (!(localSaldo))? 0 : Number(localStorage.getItem("stored-saldo"))

		var localGanho = localStorage.getItem("stored-ganho")
		ganhoValue = (!(localGanho))? 0 : Number(localStorage.getItem("stored-ganho"))

		var localDesp = localStorage.getItem("stored-desp")
		despValue = (!(localDesp))? 0 : Number(localStorage.getItem("stored-desp"))

		transactionsListBox.innerHTML = localStorage.getItem("transac-list")
		saldoInput.innerHTML = `R$${saldoValue.toFixed(2)}`
		ganhoInput.innerHTML = `R$${ganhoValue.toFixed(2)}`
		despInput.innerHTML = `R$${despValue.toFixed(2)}`
		
		//Remove a marca d'agua kkkk
			childs = document.body.children

			if(childs.length > 2){
				for(i=3 ; i>=1 ; i--){
					document.body.removeChild(childs[i])
				}
			}
	}

	function addTransaction(){
		transacName = transactionNameInput.value.trim()
		transacValue = transactionValueInput.value.trim()
        
        if((transacName == "") || (transacValue == "")){
    		alert("Dados invalidos!")
        }else{
            transacType = (transacValue < 0)?"minus":"plus"
    		transacShownAmount = (transacValue < 0)?Math.abs(transacValue):transacValue
    
    		newTransaction = `
    			<div class="transactions-item">		
    				<div class="transac-info">
    					<h3>${transacName}</h3> <span class="${transacType}">R$${transacShownAmount}</span>
    				</div>
    				<span class="close-button" onclick="removeTransaction(event)" data-valor="${transacValue}"></span>
    			</div>
		    `
    
    		transactionsListBox.innerHTML += newTransaction
    
    		updateUIValues(Number(transacValue), "add")
        }
	}

	function removeTransaction(e){
		target = e.target
		parent = target.parentElement

		updateUIValues(Number(target.getAttribute("data-valor")), "remove")

		if(parent.classList == "transactions-item"){
			parent.remove()
		}

		localStorage.setItem("transac-list", transactionsListBox.innerHTML)

	}

	function updateUIValues(amount, action){
		console.log(`ação: ${action} | valor: ${amount}`)
		var isPositive = (amount > 0)?true :false
		if(action == "add"){
			if(isPositive){
				saldoValue = saldoValue + amount
				saldoInput.innerHTML = `R$${saldoValue.toFixed(2)}`

				ganhoValue = ganhoValue + amount
				ganhoInput.innerHTML = `R$${ganhoValue.toFixed(2)}`
			}else{
				saldoValue = saldoValue + amount
				saldoInput.innerHTML = `R$${saldoValue.toFixed(2)}`

				despValue = despValue + amount
				despInput.innerHTML = `-R$${despValue.toFixed(2).replace("-","")}`
			}
		}else{
			if(isPositive){
				saldoValue = saldoValue - amount
				saldoInput.innerHTML = `R$${saldoValue.toFixed(2)}`

				ganhoValue = ganhoValue - amount
				ganhoInput.innerHTML = `R$${ganhoValue.toFixed(2)}`
			}else{
				saldoValue = saldoValue - amount
				saldoInput.innerHTML = `R$${saldoValue.toFixed(2)}`

				despValue = despValue - amount
				despInput.innerHTML = `-R$${despValue.toFixed(2).replace("-","")}`
			}
		}

		storeData()
	}

	function storeData(){
		localStorage.setItem("stored-saldo", saldoValue)
		localStorage.setItem("stored-ganho", ganhoValue)
		localStorage.setItem("stored-desp", despValue)
		localStorage.setItem("transac-list", transactionsListBox.innerHTML)
	}
	
	function clearAll(){
	    localStorage.setItem("stored-saldo", "")
		localStorage.setItem("stored-ganho", "")
		localStorage.setItem("stored-desp", "")
		localStorage.setItem("transac-list", "")
		location.reload()
	}
