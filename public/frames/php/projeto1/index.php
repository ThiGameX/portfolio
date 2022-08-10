<!DOCTYPE html>
<html>
<head>
	<title>Exercicio 2</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<link href="https://fonts.googleapis.com/css?family=Saira+Stencil+One&display=swap" rel="stylesheet">
</head>
<body>
    
    <div id="wrapper">
    
	<div class="box">
		<form action="process.php" method="get">
			<input name="num1" type="number" id="num1">
			<input name="num2" type="number" id="num2">

			<button id="soma" class="op" onclick="choose('+')"><h2 class="soma">+</h2></button>
			<button id="sub" class="op" onclick="choose('-')"><h2 class="sub">-</h2></button>
			<button id="div" class="op" onclick="choose('/')"><h2 class="div">÷</h2></button>
			<button id="mult" class="op" onclick="choose('*')"><h2 class="mult">*</h2></button>
			<input id="choosedOp" name="operation">

			<div id="resultBg"><h2 id="result">---</h2></div>
		</form>
	</div>

	<div class="boxShadow"></div>
	
	<script type="text/javascript">
		
		function choose(op){
			document.querySelector("#choosedOp").value = op
		}
		
		window.onload = function(){
			//Remove a marca d'agua kkkk
				childs = document.body.children

				if (childs.length > 2) {
					for(i=3 ; i>=1 ; i--){
						document.body.removeChild(childs[i])
					}
				}
		}

	</script>
	
	</div>

</body>
</html>