function arraysum()
{
let arsum = [10, 20, 30, 40, 50];
let sum = 0;

let length = arsum.length;

for(i=0;i<length;i++)
{
    sum = sum + arsum[i];

}
console.log("The sum of the array is " + sum);
}
arraysum();

