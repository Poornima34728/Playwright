let array = [26,34,35,36,26]

let length = array.length;
let num

for(i=0;i<length;i++)
{
    num = array[i];
     {
        for(j=i+1;j<length;j++)
        {
            if(num===array[j])
            {
                console.log("Duplicate found for element: " + num);
            }
        }
     }
}