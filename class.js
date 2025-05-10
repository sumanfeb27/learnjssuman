function add(num1,num2){
    console.log(num1+num2)

}

add(4,5)

// class is a keyword 
//how to declare a class inside some funcation we will call it as a method (add())
//using same class we can create n number of objects
class calculator{
    a=10
    str="Suman"
     add(num1,num2){
        console.log(num1+num2)
    
    }
    substract(num1,num2){
        console.log(num1-num2)
        }
        devision(num1,num2){
            console.log(num1/num2)
            }

}
const cal1= new calculator()//object creation for the class 
cal1.add(4,5)
cal1.devision(100,20)
cal1.substract(10,5)
cal1.str
cal1.a

console.log(cal1.str)
console.log(cal1.a)

class classname{
    
    y=10
    constructor (){
        console.log("this is a simple message")
    }
add(num1,num2){
    return num1+num2
}

}

const obj= new classname
 results =obj.add(2,7)
 console.log(results)

 // i have a method inside a class 
 //i don't want to call that method 
 // it should be automatically invoked 
 //constructor 
 // constructor is a method , we no need to call that it is automatically invoked 
const obj1=new classname("suman","raju")
const obj2=new classname("honda","royal")
  
class emploee{
   static x="raju"//static variable 
    y="arjun"  //non static variable

    display(){
        console.log("this is a simple method")
    }
    //non static method
    m1(){
        console.log("m1 message")
    }
    //static method
   static m2(){

    console.log("m2 message")
}
}

console.log(emploee.x)

