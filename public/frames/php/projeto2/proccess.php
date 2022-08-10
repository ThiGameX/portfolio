<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

	<div id="box">
		
		<form method="get" action="proccess.php">
			
			<input autofocus required autocomplete="off" type="number" name="num" placeholder="Digite um numero:">

			<button type="submit">Submit</button>

		</form>

		<h2>

			<?php 

				$n = $_GET["num"];

				if($n <= 1){
					echo "Digite um valor maior que 1!";
				}else{
					$math = "$n * ";
					for($i = $n - 1; $i > 0; $i--){ 
						if($i == 1){
							$math = $math . "$i";
						}else{
							$math = $math . "$i * ";
						}
					}
					echo $math . "<br><br>";
					echo eval('return ' . $math . ';');
				}
				
			?>

		</h2>

	</div>	

</body>
</html>