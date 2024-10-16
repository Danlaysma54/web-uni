<?php
$arr=array();
$res=array();
$countNegative=0;
print("Исходный массив: ");
for($i=0;$i<10;$i++){
array_push($arr,mt_rand(-50, 50));
if($arr[$i] >0 && $arr[$i]%2==0){
    array_push($res,$arr[$i]);
}
}
print_r($arr); 
print("\nПолученный массив:\n");
print_r($res);