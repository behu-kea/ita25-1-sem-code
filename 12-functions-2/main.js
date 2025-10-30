
function adder(a, b) {
    console.log(4 + 4);
}

const sumOfNumbers = adder(4, 4);







const numbers = [1,2]
numbers.push()










function emojiLogger(string) {
    console.log("🎉❤️🚀");
}

const emojiPrinterArrow = (string) => {
    return "🎉❤️🚀"
}

const returnFromEmojiprinterArrow = emojiPrinterArrow("asd")
console.log(returnFromEmojiprinterArrow)


const emojiPrinter = () => {
    console.log("🎉❤️🚀");
}

console.log(emojiPrinter)

console.log(emojiLogger)







const emojiAdder = name => {
    console.log(name)
    return name + ' 🎉';
}

const nameWithEmoji = emojiAdder("benjamin");
console.log(emojiLogger);

const nameWithEmoji2 = emojiAdder("peter");


function time() {
    console.log("hej hej")
}

setTimeout(time, 1000);

let counter = 0;
const intervalId = setInterval(function() {
    console.log(counter);
    counter++;
    if(counter > 60) {
        // this stops the interval from continuing
        clearInterval(intervalId);
    }
}, 1000);

console.log(setTimeout)


document.write("hej")
document.body.innerHTML = ''
document.write("hej")

