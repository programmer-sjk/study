/**
 * 영화 이름의 배열이 주어질 때 가장 많이 예매된 순으로 영화제목을 정렬하여 리턴하자.
 * 예매수가 같은 영화는 영화이름으로 사전 순으로 정렬한다.
 * 
 * 입출력 예
 * movie / resulst
 * ["spy", "ray", "spy", "room", "once", "ray", "spy", "once"] / ["spy", "once", "ray", "room"]
 */

 function solution(movie) {
    const answers = convertToArr(movie);
    answers.sort((a, b) => {
        if (a[1] != b[1]) return b[1] - a[1];
        return a[0] > b[0] ? 1 : -1;
    });

    return answers.map(answer => answer[0]);
}

function convertToArr(movies) {
    const result = {}
    movies.map(item => {
        if (result[item] == undefined) {
            result[item] = 1;
        } else {
            result[item] = result[item] + 1;
        }
    })
    return Object.entries(result);
}