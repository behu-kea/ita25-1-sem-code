console.log("script init")

const text = "hej"

if (text.length > 5) {
    console.log("lang streng")
} else {
    console.log("kort streng")
}

const number = "3";
const string = 3;
const boolean = typeof 3 === "number" && number == string;
console.log(boolean);



for(let j = 4; j >= 3; j--) {
    console.log(j);
}


let name = "ben";
name = "kena";

if(name === "ben"){
    console.log("name is ben")
}

const typeOfName = typeof name;
console.log(typeOfName);

if(typeOfName === "string") {
    console.log("String")
} else {
    console.log("something else")
}

console.log(typeof "hjlasbdfhjldsbfljksdbfsd");



