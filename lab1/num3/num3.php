<?php
$str = "Hello world";
print("Строка: ".$str . "\n" . "Длина строки: " . strlen($str) ."\n" . "Последний символ: " . $str[strlen($str)-1] . "\n");
for($i=strlen($str)-1;$i>=0;$i--){
    print($str[$i]. " ");
}
?>