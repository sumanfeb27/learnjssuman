student={
    fnname:"suman",
    lnname:"v",
    place:"bangalore",
    age:38,
    number:9900


}

console.log(typeof(student));
console.log(student.number)
console.log(student.age)
console.log(student['lnname'])

student['gender']="male"

console.log(student.gender)

console.log(student.fathername)

student['fathername']='sri'

console.log(student.fathername)

student['place']="hyd"
console.log(student.place)


studname1="suman"
studname2="ram"
sentance=`${studname1} and ${studname2} are friends`

console.log(sentance)
