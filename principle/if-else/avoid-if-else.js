
const isNight = true
/*
let drink = 'coffee';
if(isNight) {
    drink = 'soju'
}
*/
//const drink = isNight? 'soju' : 'coffee'
const drink = isNight && 'soju' || 'coffee'
console.log(drink)

/*
let message = null
if (user && user.name) {
    message = `Welcome, ${user.name}!`
} else {
    message = 'Welcome, guest'
}
*/
const user = {}
const message = user && user.name && `Welcome, ${user.name}!` || 'Welcome, guest'
console.log(message)
