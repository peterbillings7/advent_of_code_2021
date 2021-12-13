const myFunc2 = function () {
    const input = document
        .getElementsByTagName('Pre')[0]
        .innerText
        .split('\n')
        .map(el => {
            const keyValue = el.split(' ');

            return {
                dir: keyValue[0],
                val: parseInt(keyValue[1], 10)
            };
        });


    let horiz = 0;
    let vert = 0;
    let aim = 0;

    for (var move of input) {
        if (move.dir === 'forward') {
            horiz += move.val;
            vert += (move.val * aim);
        }
        else if (move.dir === 'down') {
            aim += move.val;
        }
        else if (move.dir === 'up') {
            aim -= move.val;
        }
    }

    return horiz * vert;
}

alert("The answer to part 2 is: " + myFunc2());
