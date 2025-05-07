str="suman"
str='suman'
str=`suman`


//coresion only + number to string 
num=2+"4"
console.log(num)

num2=3+"sri"
console.log(num2)

num3="25"-3
console.log(num3)

//impartent one "suman"-2 output is Nan

num4="suman"-5
console.log(num4)

//undefined

num5=6+undefined
console.log(num5)

//lenght

str1="suman"
console.log(str1.length)

//trim the string
str2="   sanjy   "
console.log(str2)
console.log(str2.trim())

//touppercase

str3="play wright automation testing"
str4=str3.toUpperCase()
console.log(str4)

//convert string to array (split())

console.log(str3.split(" "))

//convert array to string join()

arr=["java script","is","high","level","language"]
str6=arr.join("")
console.log(str6)

//lowercase

str7="AUTOMATION Testing"
str8=str7.toLowerCase()
console.log(str8)

//how to get pertaculaer value of the index charAt

str9="java script"
console.log(str9[6])
console.log(str9.charAt(3))


//convert number to string
str10="40"
 num=Number(str10)
 console.log(num)
 console.log(typeof(num))

 //includes

 str11="ram sri krishna"
 console.log(str11.includes("krishna"))

 //strings are unmutable
 //replace()
 str1="$165"
 str2="$135"
 total= Number(str1.replace("$",""))+Number(str2.replace("$",""))
console.log(total)

//concat

str12="suman"
str13="ram"
str14=str12.concat(str13)
console.log(str14)