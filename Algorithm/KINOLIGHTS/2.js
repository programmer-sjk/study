/**
 * 중앙 값은 어떤 주어진 값들을 크기 순서대로 정렬했을 때 가장 중앙에 위치한 값이다.
 * 예를 들어 {1, 2, 40} 의 중앙값은 2이다. NxN 크기의 행렬이 있을 때 행별로, 열별로 중앙값을 구할 수 있다.
 * NxN 행렬이 주어질 때 행, 열 동시에 중앙값인 원소의 개수를 return 하도록 구하자.
 * 
 * 입 출력 예
 * matrix / result
 * [[1, 19, 20, 8, 25], [21, 4, 3, 17, 24], [12, 5, 6, 16, 15], 
 * [11, 18, 10, 9, 23], [7, 13, 14, 22, 2]] / 2
 * [[4, 2, 9], [1, 3, 5], [6, 8, 7]] / 3
 */

 function solution(matrix) {
    const rowMedians = getRowMedian(matrix);
    const colMedians = getColMedian(matrix);
    const bothMedians = rowMedians.filter(row => colMedians.includes(row));
    return bothMedians.length;
}

function getRowMedian(matrix) {
    const temp = JSON.parse(JSON.stringify(matrix))
    return sortedMedians(temp)
}

function getColMedian(matrix) {
    const temp = convertColToRow(matrix);
    return sortedMedians(temp);
}

function sortedMedians(matrix) {
    sortByrow(matrix);
    const rowPos = Math.floor(matrix[0].length / 2);
    return matrix.map(arr => arr[rowPos]);
}

function sortByrow(matrix) {
    for (i = 0; i < matrix.length; i++) {
        matrix[i].sort((a, b) => a - b);
    }
}

function convertColToRow(matrix) {
    const result = [];
    const colLength = matrix.length;
    for (let i = 0; i < matrix[0].length; i++) {
        const col = [];
        for (let j = 0; j < colLength; j++) {
            col.push(matrix[j][i]);
        }
        result.push(col);
    }
    return result;
}