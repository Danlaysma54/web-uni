<?php
$arr=array();
$countNegative=0;
print("Исходный массив: ");
for($i=0;$i<10;$i++){
array_push($arr,mt_rand(-100, 100));
if($arr[$i] <0){
    $countNegative++;
} 
}
print_r($arr);
print("\nОтрицательных элементов в массиве: " .$countNegative);
