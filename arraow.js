//siungle peremeter
const doubleit =num => num *2;
const result= doubleit(20);
console.log(result);

//more than one peremeter
const add =(x,y)=> x+y;
const result2=add(5,7);
console.log(result2);

//no peremeter
const giveMe5=() =>5;
const result3=giveMe5();
console.log(result3);


//for one or more operation

const doMath=(x, y)=>{
    const sum=x+y;
    const diff= x-y;
    const result4= sum * diff;

    return result4;

}
const newResult=doMath(10,7);
console.log(newResult);
