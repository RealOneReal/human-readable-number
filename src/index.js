module.exports = function toReadable (number) {
    // Добавляю лет,куда буду складывать число
  let numb;
  let ten;
  let hund;
    //  делаю из числа массив,которым будем разбивать на составные части число
  let arr = String(number).split('');
  if(arr.length = 3) {
    switch(arr[0]) {
        case "1" :
            hund = "one hundred";
            break;
        case "2" :
            hund = "two hundred";
            break;
        case "3" :
            hund = "three hundred";
            break;
        case "4" :
            hund = "four hundred";
            break;
        case "5" :
            hund = "five hundred";
            break;
        case "6" :
            hund= "six hundred";
            break;
        case "7" :
            hund = "seven hundred";
            break;
        case "8" :
            hund = "eight hundred";
            break;
        case "9" :
            hund = "nine hundred";
            break;
    };
    switch(arr[1]) {
        case "1" :
            ten = "ten";
            switch(arr[2]) {
                case "1" :
                    ten = "eleven";
                    break;
                case "2" :
                    ten = "twelve";
                    break;
                case "3" :
                    ten = "thirteen";
                     break;
                case "4" :
                    ten = "fourteen";
                    break;
                case "5" :
                    ten = "fifteen";
                    break;
                case "6" :
                    ten = "sixteen";
                    break;
                case "7" :
                    ten = "seventeen";
                    break;
                case "8" :
                    ten = "eighteen";
                    break;
                case "9" :
                    ten = "nineteen";
                    break;
            }
            return hund + " " + ten;
        case "2" :
            ten = "twenty";
            break;
        case "3" :
            ten = "thirty";
            break;
        case "4" :
            ten = "forty";
            break;
        case "5" :
            ten = "fifty";
            break;
        case "6" :
            ten= "sixty";
            break;
        case "7" :
            ten = "seventy";
            break;
        case "8" :
            ten = "eighty";
            break;
        case "9" :
            ten = "ninety";
            break;
        case "0" :
            switch(arr[0]) {
                case "1" :
                    numb = "one";
                    break;
                case "2" :
                    numb = "two";
                    break;
                case "3" :
                    numb = "three";
                    break;
                case "4" :
                    numb = "four";
                    break;
                case "5" :
                    numb = "five";
                    break;
                case "6" :
                    numb = "six";
                    break;
                case "7" :
                    numb = "seven";
                    break;
                case "8" :
                    numb = "eight";
                    break;
                case "9" :
                    numb = "nine";
                    break;
                case "0" :
                    break;
            }
            return hund + " " + numb;
    };
    switch(arr[2]) {
        case "1" :
            numb = "one";
            break;
        case "2" :
            numb = "two";
            break;
        case "3" :
            numb = "three";
            break;
        case "4" :
            numb = "four";
            break;
        case "5" :
            numb = "five";
            break;
        case "6" :
            numb = "six";
            break;
        case "7" :
            numb = "seven";
            break;
        case "8" :
            numb = "eight";
            break;
        case "9" :
            numb = "nine";
            break;
        case "0" :
            numb = "";
            return hund + " " + ten;
    }
    return hund +" "+ ten +" "+ numb;
} else if(arr.length = 2) {
    switch(arr[0]) {
        case "1" :
            ten = "ten";
            switch(arr[2]) {
                case "1" :
                    ten = "eleven";
                    break;
                case "2" :
                    ten = "twelve";
                    break;
                case "3" :
                    ten = "thirteen";
                     break;
                case "4" :
                    ten = "fourteen";
                    break;
                case "5" :
                    ten = "fifteen";
                    break;
                case "6" :
                    ten = "sixteen";
                    break;
                case "7" :
                    ten = "seventeen";
                    break;
                case "8" :
                    ten = "eighteen";
                    break;
                case "9" :
                    ten = "nineteen";
                    break;
            }
            return ten;
        case "2" :
            ten = "twenty";
            break;
        case "3" :
            ten = "thirty";
            break;
        case "4" :
            ten = "forty";
            break;
        case "5" :
            ten = "fifty";
            break;
        case "6" :
            ten= "sixty";
            break;
        case "7" :
            ten = "seventy";
            break;
        case "8" :
            ten = "eighty";
            break;
        case "9" :
            ten = "ninety";
            break;

    };
    switch(arr[1]) {
        case "1" :
            numb = "one";
            break;
        case "2" :
            numb = "two";
            break;
        case "3" :
            numb = "three";
            break;
        case "4" :
            numb = "four";
            break;
        case "5" :
            numb = "five";
            break;
        case "6" :
            numb = "six";
            break;
        case "7" :
            numb = "seven";
            break;
        case "8" :
            numb = "eight";
            break;
        case "9" :
            numb = "nine";
            break;
        case "0" :
            numb = "zero";
            break;
    }
    return ten +" "+ numb;
} else if (arr.length = 1) {
        switch(arr[0]) {
        case "1" :
            numb = "one";
            break;
        case "2" :
            numb = "two";
            break;
        case "3" :
            numb = "three";
            break;
        case "4" :
            numb = "four";
            break;
        case "5" :
            numb = "five";
            break;
        case "6" :
            numb = "six";
            break;
        case "7" :
            numb = "seven";
            break;
        case "8" :
            numb = "eight";
            break;
        case "9" :
            numb = "nine";
            break;
        case "0" :
            numb = "zero";
            break;
    }
    return numb;
}

}
