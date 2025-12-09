//var a;  //glbal scope
//a=10;
//var a = 20;
//let b;  //block scope
//b=10;
//b=20;
//cons= c=10;

//example of datatype javascript
var p=20;          //number
var q="Hello"      //string
var bool = true;    //boolean
var r;           //undefined
var s=null;     //null

var symbol = Symbol("li");
console.log(typeof p);
console.log(typeof q);
console.log(typeof bool);
console.log(typeof r);
console.log(typeof s);
console.log(typeof symbol);

var arr = [1,2,3,4,5]  //array
console.log(arr)     //print the array
console.log(typeof arr);
console.log(typeof object);

var obj = {id:1,name:"John"}  //object
console.log(obj)  //print the object  
//Arithmetic operators(+,-,*,/,%)
var a = 10; 
var b = 20;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//Relational operators(==, !=, >, <, >=, <=)
var a = 10;
var b = 20;
console.log(a==b)
console.log(a!=b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a===b)  //strict eaqul to //false

//Assignment operators(=, +=, -=, *=, /=, %=)
console.log(a+=b)  //30
console.log(a-=b)  //10
console.log(a*=b)  //200
console.log(a/=b)  //10
console.log(a%=b)  //10
a%=2;
console.log(a);

//logical operators(&&, ||, !)
a=true;
b=false;
console.log(a&&b)  //false = 0
console.log(a||b)  //true = 1
console.log(!a)  //false = 0

//looping statements
//for loop
for(var i=0;i<5;i++){
    console.log(i)
}
//while loop
var i=0;
while(i<3){
    console.log(i)
    i++;
}
//do while loop
a=0;    
do{
    console.log(a);
}while(a===1);

//Conditional statements
a=5;
if(a%2===0){
    console.log("Even") }
//if else
if(a%2===0)  console.log("Even") ;
else console.log("Odd");
//Else if
var marks=80;
if(marks>=90){
    console.log("O")
}
else if(marks>=80){
    console.log("A+")
}
else if(marks>=70){
    console.log("A")
}
else{
     console.log("B")
}

//Switch
day=4;
switch(day){
    case 1: {
        console.log("Monday");
        break; }
    case 2:{
        console.log("Tuesday");
        break; }
    case 3: {
        console.log("Wednesday");
        break;  }
    case 4: {
        console.log("Thursday");
        break; }
    case 5: {
        console.log("Friday");
        break; }
    case 6: { 
        console.log("Saturday");
        break; }
    case 7: {
        console.log("Sunday");
        break; }
    default:
        console.log("Invalid day");
}

//terinary operator //synatx
a=10;
var result = a%2===0 ? "Even" : "Odd";
console.log(result);

mark=55;
var result = mark>=90 ? "O" : mark>=80 ? "A" : mark>=70 ? "B" : "Fail";
console.log(result);

function add(a,b){
    console.log(a+b);
}  add(10+20);

//Arrow Function
var addParam = (a,b) => {
    console.log(a+b);
}
addParam(10,20);
console.log(typeof addParam);

//spread operator
const arrA=[1,2,3];
const arrB=[4,5,6];
console.log(arrA);
console.log(arrB);

//const[myname,age,mark1]=["Srinithi",18,90];
//console.log(myname);
//console.log(age);
//console.log(mark1); 

//Object Methods
//[Name,Age,City]="Srinithi",18,"Mnp";  
//console.log(Name);
//console.log(Age);
//console.log(City);  

//for...in loop
var arr=[98,24,4,19];
for(let i in arr){
    console.log(i);
}
//for...of loop
for(var value of arr){
    console.log(value);
}
//foreach loop
arr.forEach((value)=>{
    console.log(value);
});

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
Person1 = new Person("Sri", 18);
Person1.display();

//Prime number
var num=7;
var flag=0;
for(var i=2;i<num;i++){
    if(num%i==0){
        flag=1;
        break;
    }
}
if(flag==0){
    console.log("Prime");
}
else{
    console.log("Not Prime");
}

//palindrome
function isPalindrome(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 

var a=10;//Global scope
if(true){
    var b=20;// var Global scope
    console.log(a);
}
console.log(a,b);

add();
function add(){
    console.log("10+20");
}

//for..in(obj)
var obj={
    name:"Hari",
    age:18,
    city:"Mnp"
};
for(let i in obj){
    console.log(i,obj[i]);
}

//callback function
var add = (a,b,callback)=>{
    var result = a+b;
    callback(result);
}
add(10, 20, (result)=>{
    console.log(result);
});

var a=10;//Global scope
if(true){
    var b=20;// var Global scope
    console.log(a);
}
console.log(a,b);


// const a=10;//Global scope
// if(true){
//     const b=20;// var Global scope
//     console.log(a);
// }
// console.log(A,B);

//Hoisting in JavaScript
var x;//By JavaScript
console.log(x); // undefined
var x = 5;    

//CallBack function
// var demo=()=>{
//     console.log("Demo function executed");
// }            
// var main=(callback)=>{
//     console.log("Main function executed");
//     callback();
// }                
// main(demo);             

var main=(callback)=>{
    console.log("Main function executed");
    callback();
}
main(()=>{
    console.log("Demo function executed");
});

var Demo=()=>{
    setTimeout(()=>{
        console.log("Processing...");
    }, 3000);
}
Demo();
