//previously for concating array

const age=[12, 45, 32, 15];
const age2=[32, 43, 21, 43];
const age3=[22, 33, 67, 78];
const allAges=age.concat(age2).concat([5]).concat(age3);
console.log(allAges);



// But Now by es6
const allAges2=[...age, ...age2, 4, ...age3];
console.log(allAges2); 

//Normal operation
const buisnessMan=650;
const politician=450;
const policeMan=750;
//by previous we can find max value by just

 const max=Math.max(buisnessMan,policeMan,politician);
 console.log(max);

 // but if the value is in a array
 const takaPoisha=[850, 450, 950];
 const max2=Math.max(...takaPoisha);

 console.log(max2);