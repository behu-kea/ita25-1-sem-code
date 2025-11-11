const name = "benjamin";
const age = 23;
const isAdult = age > 18;
const isBenjaminAdult = name === "benjamin" && isAdult;
const names = ["ben", "maria", "benny"];
const firstElement = names[0];
names.push("peter");
// iterering
names.forEach((name,i) => {
    const firstLetter = name.charAt(0)
    if(firstLetter === 'b') {
        console.log(name);
    }
});

for (let i = 0; i < names.length; i++) {
    const name = names[i];
}

// kør loop 2 gange
for (let i = 0; i < 2; i++) {
    console.log(i)
}

const user = {
    name: "ben",
    age: 38
}


console.log(user.age);
/*
console.log(apiResponse.output)
console.log(apiResponse.output[0])
console.log(apiResponse.output[0].content)
console.log(apiResponse.output[0].content[0])
console.log(apiResponse.output[0].content[0].text)

const text = apiResponse.output[0].content[0].text
*/

function getGreetMessage(name) {
    return `Hello ${name}!`
}

// brug af functioner
const greetMessageBen= getGreetMessage("benjamin");
console.log(greetMessageBen);
const greetMessageHenriette= getGreetMessage("henriette");

function displayWinner(playerOneScore, playerTwoScore) {
    if (playerOneScore > playerTwoScore) {
        console.log("player one won")
    } else {
        console.log("player two won")
    }
}

displayWinner(20, 30);
//console.log(name)

// https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json


//

const button = document.querySelector("button");
const pTag = document.querySelector("p");
console.log(button);
button.addEventListener("click", function() {
    console.log("button clicked");
    pTag.innerText = "this the user can see";

    fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
        .then(response => response.json())
        .then(movies => {
            console.log(movies)
        })
})


// 1. lave en funktion der som parameter har et array af landenavne ☑
function getLongestCountryname(countryNames) {
    console.log(countryNames)
    // 2. iterere landenavnene ☑
    let longestCountryNameLength = 0;
    let longestCountryName = "";
    countryNames.forEach(countryName => {
        console.log(countryName)
        // 3. For hvert landenavn finde længden
        const countryNameLength = countryName.length

        // 4. Finde det længste landnavn
        if(countryNameLength > longestCountryNameLength) {
            //console.log(longestCountryName)
            longestCountryNameLength = countryNameLength;
            longestCountryName = countryName
        }
        console.log("longestCountryName after: " +  longestCountryName);
    });

    // 5. returnere det landenavn
    return longestCountryName;
}

console.log(getLongestCountryname(["Australia", "Germany", "United States of America"]))













