//OOPS - Encapsulation is defined as the wrapping up of data a single unit 
class student{
    constructor(){
        //create varibles 
        let name,marks;

    }
    //create method
    getname(){
        return this.name;
    }
    setname(name){
        return this.name;
    }
    getmarks(){
        return this.marks;
    }
    setmarks(marks){
        this.marks=marks;
    }
    
}

let stu=new student();
stu.setmarks(100);
stu.setname("amin");
console.log(stu.getname(),stu.getmarks());


///Inheritance | Overriding 
class A{
    a=100;
    display(){
        console.log(this.a);
    }

}
class B extends A {
    b=200;
    show(){
        console.log(this.b);
            }
        
}
//crate object for b class 
bobj=new B();
bobj.display();
bobj.show();

//method Overriding 

class bank{

    roi(){
        return 0;
    }
}

class axis extends bank{
    roi(){
        return 10.75;
    }

}
   
class sbi extends bank{ 

    roi(){
        return 10.50;
    }

}

sb=new sbi()
console.log(sb.roi());
ax=new axis()
console.log(ax.roi())

//super Keyword how to use it 
class animal{
    constructor (color){
        this.color=color;

    }
    printcolor(){
        console.log(this.color);

    }


}

class dog extends animal{ 
    constructor(food,color){
        super(color);
        this.food=food;

    }
     eating()
    {

    console.log("eating:",this.food);
            
        }
        display(){
            this.printcolor();
            this.eating();
        }
    
}

d=new dog("black","Bread");
d.display()