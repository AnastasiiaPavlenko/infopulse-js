\d{10} или [0-9]{10} //число до 10 символов
[A-Za-z0-9_ \\-]{5, 15} //слово из англ символов верхнего и нижнего регистра от 5 до 15 символов
//2 буквы только большие или укр или англ а потом 6 цифр
([A-Z]{2}|[А-ЯЄЇІҐ]{2})[0-9]{6} //или 2 буквы латинского алфавита или 2 буквы укр, потом 6 цифр
(([0-9]{2}\\-)[0-9]{4}) // дд мм гггг
([0-9]{1,3}\\.){3}[0-9]{1,3}//4 позиции на каждой от 1 до 3 символов, разделяются между собой точкой

// цена 99999 (5 символов максимум) или копейки 99.09 или 9.9
[0-9]{1,5}(\\.[0-9]{1,2})?

//01 1
//10 19
//20 29
//30 31
(0?[1-9]|([1-2][0-9]){2}|3[0-1])

//1920 по 2018
//1920-1999
//2000-2018
(19[2-9][0-9]|200[0-9]|201[0-8])
19[2-9][0-9]|20(0[0-9]|1[0-8])//упрощенный вариант

// дома от 1 до 3 чисел                                          2 56 127
//дом может быть с буквой большой, маленькой и еще и через дефис 2A 2а
//дом может быть угловой и с дробью                              12/212
//и может быть дом с дефисом                                     12-1 12-20
[0-9]{1,3}([\\/\\-][0-9]{1,3}|\\-?[А-Яа-яA-Za-z])?
