
const arrayFirst = [1 , 2 , 3 , 4 , 5 ];
const arraySecond = [1 , 2 , 31 , 66 , 92 , 4 , 5  , 23 , 22 , 11 ,5456 ,1231 ];

let arrayShort;
let arrayLong;

if (arrayFirst.length === arraySecond.length){
    console.log("Stessa lunghezza");
} else if (arrayFirst.length > arraySecond.length){
    arrayLong= arrayFirst;
    arrayShort = arraySecond;
} else {
    arrayShort = arrayFirst;
    arrayLong = arraySecond;
}   

const elements = arrayLong.length  - arrayShort.length;
for (let i = 0 ; i <elements; i++  ){
        arrayShort.push(i);
} 

console.log(arrayLong , arrayShort , arrayLong.length , arrayShort.length);
