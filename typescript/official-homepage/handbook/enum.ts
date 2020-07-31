enum Direction {
    up = 1,
    down
}

console.log(Direction.down)

enum YESNO {
    NO,
    YES
}

function respond(recipient: string, message: YESNO): void {
    // ...
}

respond("Princess Caroline", YESNO.YES)

enum E {
    X, Y, Z
}

function f(obj: {X: number}) {
    console.log(obj)
}

f(E);

const enum Enum {
    A = 1,
    B = A * 2
}

console.log(Enum.A, Enum.B)
