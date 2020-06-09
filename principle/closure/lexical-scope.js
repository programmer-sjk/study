var x = 1;

function print() {
    console.log(x);
}

function dummy() {
    var x = 999;
    print();
}

dummy();

var who = 'i';

function outer(what) {
    var want = ' wanna make a ';
    function inner() {  
        console.log(who + want + what)
    }
    inner();
}

outer('girl friend')