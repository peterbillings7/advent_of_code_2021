const myFunc1 = function () {
    const input = document
        .getElementsByTagName('Pre')[0]
        .innerText
        .split('\n')
        .map(el => parseInt(el, 10));

    let totalIncreases = 0;

    for (let i = 0; i < input.length - 1; i++) {
        if (input[i] < input[i + 1]) {
            totalIncreases++;
        }
    }

    return totalIncreases;
}

alert('The answer to part 1 is: ' + myFunc1());
