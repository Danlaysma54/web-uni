<?php
$arr=array();
$firstSum=0;
$secondSum=0;
print("Исходный массив: ");
for($i=0;$i<8;$i++){
array_push($arr,mt_rand(0, 50));
}
print_r($arr);
print("\n");
for($i=0;$i<4;$i++){
$firstSum+=$arr[$i];
}
for($i=4;$i<8;$i++){
    $secondSum+=$arr[$i];
}
print("Сумма первой половины: " . $firstSum . "\n");
print("Сумма второй половины: " .$secondSum . "\n");
print("Частное: " . $firstSum/$secondSum);