function countNiceChildren(nameListString) {
    const names = nameListString.split(",");
    let numberOfNiceChildren = 0;
    let numberOfNaughtyChildren = 0;
    names.forEach((nameAndNaughtyOrNice) => {
        console.log(nameAndNaughtyOrNice);
        const endsWithPlus = nameAndNaughtyOrNice.endsWith("+");
        if (endsWithPlus) {
            numberOfNiceChildren++;
        } else if(nameAndNaughtyOrNice.endsWith("-")) {
            numberOfNaughtyChildren++;
        }
    })
    return `Nice: ${numberOfNiceChildren}, Naughty: ${numberOfNaughtyChildren}`
}

console.log(countNiceChildren("Ben-,Sarah-,Tom-,Ella-,Max-"))



//console.log(arr)

