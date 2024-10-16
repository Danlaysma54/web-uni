<?php
$arrRu=["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
$arrEn=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
sort($arrEn);
print("Отсортированные массивы по алфавиту:\n");
foreach($arrEn as $value){
    print($value . " ");
}
print("\n");
sort($arrRu);
foreach($arrRu as $value){
    print($value .  " ");
}
