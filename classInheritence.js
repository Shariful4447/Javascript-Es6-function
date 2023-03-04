class parent{
    constructor(){
        this.fatherName="scherwinger";

    }
}

class child extends parent{
    constructor(cName){
        super();
        this.name=cName;
    }
    getFullName(){
        return this.name+" "+this.fatherName;
        
    }
    

}


const baby= new child("Arnold");
//const baby2= new child("Tom");
console.log(baby.getFullName());