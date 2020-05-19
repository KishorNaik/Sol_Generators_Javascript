function* onDemo() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

let valuesGenerate = onDemo();

let firstValue = valuesGenerate.next();
console.log(firstValue.value);

let secondValue = valuesGenerate.next();
console.log(secondValue.value);

let thirdValue = valuesGenerate.next();
console.log(thirdValue.value);

let fourthValue = valuesGenerate.next();
console.log(fourthValue.value);

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = generateSequence();

for (let value of generator) {
    console.log(value) // 1, then 2, then 3
}
