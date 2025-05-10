// creating a class 
class student{
    //create method
    setdetails(id,name,grade){
        //this is representing a class  
       this.sid=id;
       this.sname=name;
       this.sgrade=grade;
    }
    //create another method
    display(){
        console.log(this.sid,this.sname,this.sgrade);
    }
}

//create an object (in java script to create an object we need to create varible)
let stu=new student();
stu.setdetails(101,"smith","A")
stu.display();

//creating class 
class emp{
    details(empid,ename,esal){
        this.id=empid;
        this.name=ename;
        this.sal=esal;

    }

    print(){
        console.log(this.id,this.name,this.sal)
    }

}

const empe= new emp()
empe.details(100,"suman",16000);
empe.print();

// creating another class 
class visitor{

    vms(vid,vname,vno){
       this.visitorid=vid;
       this.visitorname=vname;
       this.visitorno=vno;
    }

    checkin(){
        console.log(this.visitorid,this.visitorname,this.visitorno)
    }
}

const visit= new visitor()
visit.vms(1000,"sanjay",3000);
visit.checkin();

// how to create constructor

class rtc{
    constructor(bus,number,root){
        this.rbus=bus;
        this.rnumber=number;
        this.rroot=root;

    }

    track(){
        console.log(this.rbus,this.rnumber,this.rroot)
    }

    }
//creat New object and provide the details 
const rtc1 = new  rtc ("st",9999,"nrt");
//not required to call rtc ()
rtc1.track();

//creating multiple objets 
const rtc2 = new rtc ("st1",999,"nrt1");
rtc2.track();
const rtc3 = new rtc("st2",888,"chpet");
rtc3.track();


//OOPS - static keyword in JavaScript

class test{
    static a=10; // static varible 
    b=20;   // non static varible 

    //static and non static methods 
    static m1(){
        console.log("staticmethods")
    }
    //non static method
    m2(){
    console.log("non static method") 
}
}
//we can directly access static varibles and methods using class name 
console.log(test.a);//10
console.log(test.b);//undefined 

test.m1();// this is m1 static method
//test.m2();// error , incorrect 

//we can access non static varibles and methods using objects

const test1= new test();
console.log(test1.b);
test1.m2();
