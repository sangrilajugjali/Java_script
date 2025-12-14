//variable declaration

let name = "ram";
name = "shyam";
console.log(name);

//array

const fruits =["apple","banana","cherry"];
console.log(fruits[0]);

//object

const person = {
    firstName:"john"

}

function oddEven (a){
    if(a%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
oddEven(6);

function greater( a,b){
    if(a>b){
        console.log("a is greater");
    }
    else{
        console.log("b is greater");
    }
}
greater(2,3);