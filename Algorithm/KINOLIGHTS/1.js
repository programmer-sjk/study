/**
 * Q. 앞에서부터 읽을 때와 뒤에서 부터 읽을 때 똑같은 단어를 팰린드롬(palindrome) 이라 한다.
 * 예를 들어 racecar, 10201은 팰린드롬이다. 두 자연수 n, m이 매개변수로 주어질 때 n이상 m이하
 * 의 자연수중 팰린드롬인 숫자의 개수를 리턴하라.
 * 
 * 입출력 예
 * n / m / result
 * 1 / 100 / 18
 * 100 / 300 / 20
 * 
 * 1과 100 사이의 팰린드롬은 아래와 같이 18개가 있다.
 * 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99
 */

 function solution(n, m){
    var answer = 0
    for (let i = n; i <= m; i++) {
        if (isPalindrome(i)) {
            answer++;
        }
    }
    
    return answer
}

function isPalindrome(value) {
    const str = String(value);
    const length = str.length - 1;
    let currentPos = length;

    for (let i = 0; i <= length; i++) {
        if (i >= currentPos) {
            return true;
        }

        if (str[i] == str[currentPos]) {
            currentPos--;
            continue;
        }

        return false;
    }
}