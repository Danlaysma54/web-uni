<?php
$arr=array();
print("Исходный массив: ");
for($i=0;$i<10;$i++){
array_push($arr,mt_rand(-100, 100));
}
print_r($arr);
print("\n");
rsort($arr);
print("Отсортированный массив: ");
print_r($arr);