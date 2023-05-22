let challenge = '30 Days Of JavaScript';
console.log(challenge)
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.split(" ")[0]);
console.log(challenge.includes("Script"))
console.log(challenge.replace("JavaScript","Python"))

let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(str.split(','))

console.log(challenge.repeat(2))


st1 = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(st1);
st2 = '"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."';
console.log(st2)

let num1 = '10'
num1 = +num1;
if ( typeof(num1) == typeof(10) ) {
    console.log("Type Match...");
} else {
    console.log("Type Mismatch");
}




/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/
for( i=1; i <= 5 ; i++ ) {
  let line = "";
  line += i.toString();
  line += " ";
  for( j = 0 ; j <= 3 ; j++ ) {
    line += Math.pow(i,j).toString();
    line += " ";
  }
  line += "\n" ;
  console.log(line)
}