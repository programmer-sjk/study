///////// ES5 Promise /////////////

var isMomHappy = true;
var willGetNewPhone = new Promise(
    function(resolve, reject)
    {
        if(isMomHappy) {
            var phone = {
                brand: "samsung",
                color: "gray"
            }
            resolve(phone)
        } else {
            var reason = new Error('mom is not happy');
            reject(reason)
        }
    }
 )

 var showOff = function(phone) {
    var msg = 'Hey Buddy, i have a new ' + phone.color + ' ' + phone.brand + ' ' + 'phone'
    return Promise.resolve(msg)
}

 var askMom = function() {
     willGetNewPhone
     .then(showOff)
     .then(function(fullfilled) {
         console.log(fullfilled)
     })
     .catch(function(error) {
        console.log(error)
     })
     console.log('after asking mom')
 }

 askMom();


 ///////// ES6 Promise /////////////

const isMomHappy = true;
const willGetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy) {
        var phone = {
            brand: "samsung",
            color: "gray"
        }
        resolve(phone)
    } else {
        var reason = new Error('mom is not happy');
        reject(reason)
    }
})

const showOff = phone => {
    var msg = 'Hey Buddy, i have a new ' + phone.color + ' ' + phone.brand + ' ' + 'phone'
    return Promise.resolve(msg)
}
    

 var askMom = () => {
     willGetNewPhone
     .then(showOff)
     .then(fullfilled => console.log(fullfilled))
     .catch(error => console.log(error))

     console.log('after asking mom')
 }

 askMom();