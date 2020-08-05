// bad
function test(color) {
    switch (color) {
        case 'red':
            return ['apple', 'strawberry'];
        case 'yellow':
            return ['banana', 'pineapple'];
        case 'purple':
            return ['grape', 'plum'];
        default:
            return [];
    }
}

// better
const fruitColor = {
    red: ['apple', 'strawberry'],
    yellow: ['banana', 'pineapple'],
    purple: ['grape', 'plum']
};

function test(color) {
    return fruitColor[color] || [];
}

// better
const fruitColor = new Map()
    .set('red', ['apple', 'strawberry'])
    .set('yellow', ['banana', 'pineapple'])
    .set('purple', ['grape', 'plum']);

function test(color) {
    return fruitColor.get(color) || [];
}
