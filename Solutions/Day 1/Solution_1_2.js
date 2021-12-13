const myFunc2 = function () {
    const input = document
        .getElementsByTagName('Pre')[0]
        .innerText
        .split('\n')
        .map(el => parseInt(el, 10));

    let totalIncreases = 0;

    const reduce = (prev, curr) => prev + curr;

    for (let i = 0; i < input.length - 2; i++) {

        let group1 = input
            .slice(i, i + 3)
            .reduce(reduce);

        let group2 = input
            .slice(i + 1, i + 4)
            .reduce(reduce);

        if (group1 < group2) {
            totalIncreases++;
        }
    }

    return totalIncreases;
}

alert('The answer to part 2 is: ' + myFunc2());
