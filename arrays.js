//wrong array decleration
//abc={3,7,9,8}

arr=[1,3,5,7,9]
//leanght of the array
console.log(arr.length)

arr1=["suman","sri","ram","sri","krishna"]
console.log(arr1[0])
console.log(typeof(arr1))//object
console.log(typeof(arr1)[0])//string

arr2=["sri",1,3,5,true,undefined,null]

arr3=arr1.concat(arr2) //joining the arrays using the concat operater
console.log(arr3)


//how to add the element in the end of the array usig push option 
arr4=["wakeup","read","write","sleep"]
arr4.push("eatingfood")
console.log(arr4)

// how to add the element in the begnning of the array usig unshift option

arr4.unshift("brakefast")
console.log(arr4)

//pop will be removed from the last element of the array

arr4.pop()
console.log(arr4)

//shift will be removed from the first element of the array

arr4.shift()
console.log(arr4)

//using for loop removeing the all the elements

arr5=["wakeup","read","write","sleep"]
for (let i=0;i<arr.length-1;i++){
    arr5.pop()

}
console.log(arr5)

//convert string to array-split()
str="javascript"
arr6= str.split(" ")
console.log(arr6)

str="My Place is bangalore"
arr7=str.split(" ")
console.log(arr7)

//join() method it will convert array to string 
arr8=['My', 'Place', 'is', 'bangalore']
str2=arr8.join(" ")
console.log(str2)

//another way of decleaing the object
//arr= new array(2,3,4,5)// it will occupy more memory 
// we will avoid declaing array as object

//replace one element to another element

arr9=["suman","jay","krithik","sri"]
arr9[3]="radha"
console.log(arr9)

//indexOf the element 
arr9=["suman","jay","krithik","sri"]
console.log(arr9.indexOf("jay"))

arr10=["suman","jay","krithik","sri"]
arr10.forEach(element => {
    console.log(element)
});

//includes if the data is there it will print 
arr11=["wakeup","read","work","sleep"]
arr11.includes("yoga")
arr11.includes("eat")

if(arr11.includes("yoga")){
    console.log("element is present")
}

//sort the values

arr12=[2,5,3,6,4,9,8,7]
arr13=arr12.sort()
console.log(arr13)

arr14=["Suman","raju","anil","jay","bhargav","abhishek"]
arr15=arr14.sort()
console.log(arr15)
// map is sqrt of the numbers
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
console.log(newArr)

//filter

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}

//slice 

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus)

//map funcation

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  persons.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }
  
//splice remove one item and add other items to the list

// Create an Array
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 1 item, add "Lemon" and "Kiwi"
fruits1.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits1)

//reverse () the number 
price=[2,3,4,5,6,7]
srotedprice=price.sort().reverse()
console.log(srotedprice)

//revere the string
str="my name is suman"
//convert to array

arr=str.split(" ")
console.log(arr)
//arr we need to reverse
arr2=arr.reverse(" ")
console.log(arr2)
//we need to join

str2=arr2.join("")

console.log(str2)

//write it in a single line (how to reverse the string)
str5="my name is suman"
revstr=str5.split("").reverse().join("")
console.log(revstr)