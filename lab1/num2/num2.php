<?php
$a =  mt_rand();
print("Само число: " .$a ."\n");
$b = $a%10;
$str_a=(string) $a;
$sum = $str_a[0]+$b;
print("Первая цифра: " .$str_a[0] . "\n" ."Последняя цифра: " . $b . "\n" ."Сумма первой и последней цифры: " . $sum . "\n" ."Количество цифр: " .strlen($str_a)) ;
?>