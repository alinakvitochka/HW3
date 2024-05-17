function FizzBuzz(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz");
    } else if (number % 3 == 0) {
        console.log("Fizz");
    } else if (number % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}



function isLeapYear(year){
    if((year % 4 == 0 && year % 100 !==0) || (year % 400 == 0)){
        console.log('is LeapYear');
    }else {
        console.log('isn\'t LeapYear')
    } 
}
 isLeapYear(2020)
 isLeapYear(2021)

 function ofTheYear(n) {
    let word = "років"; 
    
    if (n % 10 == 1 && n % 100 !== 11) {
        word = "рік";
    } else if ((n % 10 == 2 || n % 10 == 3 || n % 10 == 4) && (n % 100 !== 12 && n % 100 !== 13 && n % 100 !== 14)) {
        word = "роки";
    }
    
    console.log(`Вам ${n} ${word}`);
}

ofTheYear(7);