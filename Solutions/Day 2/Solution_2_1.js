const myFunc1 = function () {
    const input = document
        .getElementsByTagName('Pre')[0]
        .innerText
        .split('\n')
        .map(el => {
            const keyValue = el.split(' ');

            return {
                dir: keyValue[0],
                dist: parseInt(keyValue[1], 10)
            };
        });


    let horiz = 0;
    let vert = 0;

    for (var move of input) {
        if (move.dir === 'forward') {
            horiz += move.dist;
        }
        else if (move.dir === 'down') {
            vert += move.dist;
        }
        else if (move.dir === 'up') {
            vert -= move.dist;
        }
    }

    return horiz * vert;
}

alert("The answer to part 1 is: " + myFunc1());