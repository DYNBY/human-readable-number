module.exports = function toReadable (number) {
    
const unitMore = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const twentyMore = [' ',' ','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
const hundredMore = [' ','one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'];    

let x = 0;
let y = '';
let z = 0;
let t = 0;
let i = 0;
let j = 0;
let resXX = '';
let resXXX = '';

if (number < 20) {
    resXX = unitMore[number];
    return resXX;
} 

if (number >= 20, number < 100) {
    x = Math.trunc(number/10);
    t = number%10;
    if (t === 0) {
        resXX = twentyMore[x];
    return resXX;
    } else {
        resXX = twentyMore[x] + ' ' + unitMore[t];
    return resXX; 
    }    
}

if (number >= 100) {
i = Math.trunc(number/100);
j = number%100;
    if (j === 0) {
    resXXX = hundredMore[i];
    return resXXX;
    } else {
        if (j < 20) {
        resXXX = hundredMore[i] + ' ' + unitMore[j];
        return resXXX;
        } 
        if (j >= 20, j < 100) {
        x = Math.trunc(j/10);
        t = j%10;
        if (t === 0) {
            resXXX = hundredMore[i] + ' ' + twentyMore[x];
        return resXXX;
        } else {
            resXXX = hundredMore[i] + ' ' + twentyMore[x] + ' ' + unitMore[t];
        return resXXX; 
        }       
        }
    }
}
}



