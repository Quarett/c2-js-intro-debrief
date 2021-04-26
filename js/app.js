let myNumber = 45
if (typeof myNumber !== 'number') {
    console.log('This is not a number');
}else if (myNumber %3 ) {console.log('Gen');
}else if ( myNumber %5 ) {console.log('Buzz');
}else if ( myNumber %3 && myNumber %5){ console.log('GenBuz');}
else { console.log(myNumber)

}



let item = 'Shoes';
switch (item) {
   case 'Jeans':
       console.log('Jeans are $25');
       break;
    case 'Hat':
        console.log('hat is $12');
        break;
    case 'Socks':
        console.log('Socks are $2');
        break;
    default: 
        console.log('Invalid Item')
}



let min = 50
let max = 100
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max-min) + min)

}
getRandomInt (72, 84)





