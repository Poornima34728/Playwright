
/* // Example:1 
let value = "Hello World";

let svalue = value.split(" ");
let len = svalue.length;
console.log(svalue[len-1]); */
 

 
// Example:2
/* let value = "   fly me   to   the moon  ";

value = value.trim();

console.log(value); 
let svalue = value.split(" ");
let len = svalue.length;
console.log(svalue[len-1]); */

//EXAMPLE:3

function isAnagram()
{
    /* let str1 = "listen";
    let str2 = "silent"; */
    let str1 = "Hello";
    let str2 = "worrld";
    let s1 = str1.split("").sort().join("");
    let s2 = str2.split("").sort().join("");

    if(s1 === s2) {
        console.log("True");
    } else {
        console.log("False");
    }
    
}
isAnagram();