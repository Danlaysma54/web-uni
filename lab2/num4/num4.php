<?php
$arr=array();
$res=array();
print("Все числа: ");
for($i=0;$i<10;$i++){
array_push($arr,mt_rand());
}
print_r($arr);
print("\n");
foreach($arr as $value){
if(str_contains($value,5)){
    array_push($res,$value);
}
}
print("Числа содержащие цифру 5: ");
print_r($res);