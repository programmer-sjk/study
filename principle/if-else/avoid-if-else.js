const nums = [4, 6 , 1, 9, 7]
let count = 0;

nums.forEach(num => {
    const remainder = num % 2;
    //if(remainder === 1)
    //    count++;
    count += remainder
})

console.log(count)



function test(fruit) {
    // bad
    if(fruit == 'apple' || fruit == 'watermelon') {
        console.log('red')
    }

    // better
    const redFruits = ['apple', 'watermelon', 'strawberry']
    if(redFruits.includes(fruit)) {
        console.log('red')
    }
}

function test(fruit, quantity) {
    // bad
    const redFruits = ['apple', 'watermelon', 'strawberry']
  
    if(fruit) {
        if(redFruits.includes(fruit)) {
            console.log('red');
            if(quantity > 10) {
                console.log('big quantity');
            }
        }
    } else {
        throw new Error('No fruit!');
    }
    // better 
    const redFruits = ['apple', 'watermelon', 'strawberry']
    if(!fruit) throw new Error('No fruit!');
    if(redFruits.includes(fruit)) {
        console.log('red');
        if (quantity > 10) {
            console.log('big quantity');
        }
    }

    // best
    const redFruits = ['apple', 'watermelon', 'strawberry']
    if(!fruit) throw new Error('No fruit!');
    if(!redFruits.includes(fruit)) return;

    console.log('red');
    if(quantity > 10) {
        console.log('big quantity');
    }
    
}

// bad
function test(fruit, quantity) {
    if(!fruit) return;
    const q = quantity || 1; 

    console.log(`We have ${q} ${fruit}!`);
}

// better
function test(fruit, quantity = 1) { 
    if(!fruit) return;
    console.log(`We have ${quantity} ${fruit}!`);
}

// bad
function test(fruit) { 
    if(fruit && fruit.name)  {
        console.log (fruit.name);
    } else {
        console.log('unknown');
    }
}

// better
function test({name} = {}) {
    console.log (name || 'unknown');
}
  

// bad 
function test(color) {
    // use switch case to find fruits in color
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
const fruitColors = {
    red: ['apple', 'strawberry'],
    yellow: ['banana', 'pineapple'],
    purple: ['grape', 'plum']
};

function test(color) {
    return fruitColors[color] || [];
}

const fruitColors = new Map()
    .set('red', ['apple', 'strawberry'])
    .set('yellow', ['banana', 'pineapple'])
    .set('purple', ['grape', 'plum']);

function test(color) {
    return fruitColors.get(color) || [];
}
