<?php
$firstNumb=-1;
$lastNumb=-1;
$flag=true;
$a="d023m0df0dfg0";
for($i=0;$i<strlen($a);$i++){
if(preg_match('/[0-9]/',$a[$i])){
if($flag){
    $flag=false;
    $firstNumb=$i+1;
}
$lastNumb=$i+1;
}
}
print("Строка: ". $a .   "\nПозиция первой цифры в строке: " . $firstNumb ."\nПозиция последней цифры в строке: " . $lastNumb);
