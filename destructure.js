const preson= {name: "Tom", age: 22, job: "facbooker", gfName: "Ema watson", phone:"017111111111", address: "kochukhet", friends:['Tom cruise', 'Tom hank', 'Tom yarn']};

const {phone, gfName, address}=preson;
//const gfName=preson.gfName;
//const phone=preson.phone;

console.log(gfName, phone, address);
//console.log(phone);


//destructure for array
const friends=['sakib khan', 'salman khan', 'sharukh khan', 'amin khan'];
const [firstfriend, chotofriend, ...restfriend]=friends;
console.log(firstfriend,chotofriend);
console.log(restfriend);


//complexobject
const complexobject={
    name:"Rahman",
    info: {
        address:'kola bagan',
        leader:'Tiger'
    }


}
const {leader}=complexobject.info;
console.log(leader);