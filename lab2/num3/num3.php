<?php
$a="023m0df0dfg0";
$arr=array();
for($i=0;$i<strlen($a);$i++){
if($a[$i]=='0'){
array_push($arr,$i);
}
}
print("Позиции, где находится цифра 0: ");
print_r($arr);