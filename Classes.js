class Animal{
    constructor(name,sound){
        this._name = name;
        this._sound = sound;
    }
    speak(){
        console.log(this._sound);
    }
    sayName(){
        console.log(this._name);
    }
    get nameProp(){
        console.log(this._name);
    }
    set newName(nName){
        this._name = nName;
    }   
}

class Dog extends Animal{
    constructor(name,sound){
        super(name, sound)
    }
}


const coco = new Dog("Coco", "Bark")
console.log(coco)
coco.speak();
coco.sayName();
coco.nameProp;
coco.newName = "Fido";
coco.nameProp;
