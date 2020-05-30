/*
    두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 
    예를 들어 2와 7의 최소공배수는 14가 됩니다. 
    정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. 
    n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.
*/

const arr = [2, 6, 8, 14];

let G = gcd(arr[0], arr[1]);
let L = lcm(G, arr[0], arr[1]);

for(let i=2; i<arr.length; i++) {
    G = gcd(L, arr[i]);
    L = lcm(G, L, arr[i]);
}
console.log(L)
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