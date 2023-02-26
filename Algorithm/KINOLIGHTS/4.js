/**
 * R X C 크기의 흑백이미지가 있다. 각 칸은 검은색 혹은 흰색으로 이루어져있고
 * 검은색은 0 흰색은 1로 표시된다. 가로 세로로 연결될 때 하나의 영역이라고 하며 대각선은 제외된다.
 * 흑백 이미지가 주어질 때 흰색 영역의 개수와 가장 큰 넓이를 return 하도록 함수를 완성한다.
 *
 * 입출력 예
 * v / answer
 * [[1, 1, 0, 1, 1], [0 ,1, 1, 0, 0], [0, 0, 0, 0, 0], 
 * [1, 1, 0, 1, 1], [1, 0, 1, 1, 1], [1, 0, 1, 1, 1]] / [4, 8]
 */

solution([[1, 1, 0, 1, 1], [0 ,1, 1, 0, 0], [0, 0, 0, 0, 0], [1, 1, 0, 1, 1], [1, 0, 1, 1, 1], [1, 0, 1, 1, 1]])

 function solution(v)
 {
    const result = [4, 8];
    const whiteBoard = createWhiteBoard(v);
    const connectedBoard = createConnectedBoard(whiteBoard);
    return result;
 }

 function createConnectedBoard(whiteBoard) {
    const results = [];
    do {
        const currentPos = whiteBoard.pop();
        results.push(findConnectedSection(currentPos, whiteBoard));
    } while(whiteBoard.length > 0)

    return results;
 }

 function findConnectedSection(currentPos, whiteBoard) {
    if (whiteBoard.length === 0) {
        return [currentPos];
    }

    // if (whiteBoard.includes([]))
 }

 function createWhiteBoard(v) {
    const results = [];
    const xLength = v[0].length;
    const yLength = v.length;

    for (let y = 0; y < yLength; y++) {
        for (let x = 0; x < xLength; x++) {
            if (v[x][y] == 1) {
                results.push([x, y])
            }
        }
    }

    return results;
 }