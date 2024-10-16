<?php
$str_1="Первая строка";
$str_2="Вторая строка123";
$str_3= $str_1 .  " & " . $str_2;
print($str_3 ."\n");
if(strlen($str_1) >= strlen($str_2)){
print($str_1);
}else{
    print($str_2);
}
