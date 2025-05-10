//prototype is an object this is associated with every funcation & object by default
//if we want to add new properties at later stage to a funcation/class,we can take help of the prototype

//create funcation
function student(){
    this.name="john"
    this.gender="male"


}
//adding age to the funcation 
student.prototype.age=35;
stu1= new student();
console.log(stu1.name);
console.log(stu1.gender);
console.log(stu1.age);
stu2=new student();
console.log(stu2.name,stu2.gender,stu2.age);

//ex 2 creating with class 
class employee{
    constructor (id,name){
        this.eid=id;
        this.enmae=name;
    }
}

employee.prototype.sal=50000;

emp1obj= new employee(1000,"sri");
console.log(emp1obj.eid,emp1obj.enmae,emp1obj.sal);
emp1obj1=new employee(1001,"sriram")
console.log(emp1obj1.eid,emp1obj1.enmae,emp1obj1.sal);

