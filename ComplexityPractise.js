let ar = [1,2,3,4,5]

ar[0]=ar[0]+10;
// Constant Complexity - O(1)
console.log(ar[0])
//C--> O(1)  always time

//------------------------>

let num = ar[ar.length - 1]; 
console.log(`last element is - ${num}`)
// number of 4 bites 
// o(4) ---> 
//O(4 bytes ) -- > is constant O(1)   complexity space as well 


//Space complexity always refer to the additional space
//--------------------->

//IMPORTANT -->  inside  `...`  the data is string

//.....................................................................>

// Linear Complexity --> O(n) 
// not very acceptible algo

//Task is to print the elements of the array 

for(let i =0;i<ar.length;i++){
    console.log(ar[i])
}
// more the input ize more we need to comput time inc 

//Hence - O(n) - Linear 
//------

//Task - 2 - Add 01 to 1st element 
ar[0]=ar[0]+1;

for(let i =0;i<ar.length;i++){
    console.log(ar[i])
}

// C- O(1) + O(n) = O(1+n) = O(n)  overall = O(n) 
//Linear Complexity

// its space complexity is O(1) -- a consant 

//Task - 3 copy element one array to another 

ar = [1,2,3,4,5];
let newAr = [ar.length]; //T.C - O(1) |S.P O(n) 

for(let i =0;i<ar.length;i++){ // T.C O(n) | Sp- O(1)
    newAr[i] = ar[i]
}

for(let i =0;i<ar.length;i++){ // T.C O(n) | Sp- O(1)
    console.log(newAr[i])
}

//Overall s.c --> O(1+1+1+1+n+1) = O(n)
//Overall T.C  --> O(1+n+1+1+n+n) = O(n) 

// -- > down th y axis the better 