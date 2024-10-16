<?php
$arr=["orange", "red", "green", "blue"];
function sort_func($a,$b)
{
 
 if (strlen($a) == strlen($b))
 {
        return 0;
 }
 
    return (strlen($a) <strlen( $b)) ? -1 : 1;
}
 
usort($arr, "sort_func");
print_r($arr);