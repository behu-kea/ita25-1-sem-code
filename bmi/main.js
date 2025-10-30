// 1. Vælge mine elementer
const weightInput = document.querySelector("input.weight");
const heightInput = document.querySelector("input.height");
const button = document.querySelector("button");
const resultElement = document.querySelector("div.result");
console.log(weightInput)
console.log(heightInput)
console.log(button)

button.addEventListener("click", function() {
    // 2. Vi skal have sat vores eventlistener op. Så når man klikker på knappen sker der noget
    console.log("knap klikket på")
    // 3. have fat i højden og vægten brugerne har skrevet
    const weight = parseInt(weightInput.value);
    const height = parseInt(heightInput.value);
    const heightInMeters = height / 100;

    // 4. Lave beregning
    const result = weight / (heightInMeters * heightInMeters)
    console.log(result)

    // 5. Render beregningen for brugeren
    resultElement.innerText = result
})





