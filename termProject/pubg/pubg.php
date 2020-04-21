<?php
$myFile = "pubg.json";
$fh = fopen($myFile, 'wb') or die("can't open file");
$postItem = $_POST["data"];
fwrite($fh, $postItem);
fclose($fh)
?>