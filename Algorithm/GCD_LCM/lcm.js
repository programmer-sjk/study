/*
    두 수 A, B가 있을 떄 최대공약수 G에 의해 나눠진 서로소 a, b가 있을 때
    L = G * a * b  (1)

    A = G * a, B = G * b 이기 때문에
    A * B = G * G * a * b
    A * B = G * L (1번 식에 의해서)
    L = A * B / G
*/
const A = 30
const B = 70

const G = gcd(A, B)

console.log('최대공약수 GCM: ' + G)
console.log(lcm(G, 30, 70))

function lcm(G, A, B) {
    return A * B / G;
}

function gcd(a, b) {
    if(a === 1 || b === 1)
        return 1;

    let ans = 1;
    const [min, max] = a < b? [a,b] : [b,a];
    
    for(let i=2; i<=min; i++) {
        if(min % i == 0 && max % i == 0) {
            ans = i;
        }
    }
    return ans
}


