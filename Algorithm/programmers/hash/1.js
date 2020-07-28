/*
    수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
    단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

    마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
    완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
*/

/*
function solution(participant, completion) {
    const answer = participant.find(p => {
        const idx = completion.indexOf(p)
        if(idx === -1) {
            return true;
        } else {
            completion.splice(idx, 1)
        }
    })
    console.log(answer)
    return answer;
}
*/


function solution(participant, completion) {
    const obj = {};
    participant.forEach(p => {
        if(p in obj) 
            obj[p] += 1;
        else
            obj[p] = 1;
    })

    completion.forEach(c => {
        obj[c] -= 1;
    })

    for(let [k, v] of Object.entries(obj)) {
        if(v > 0)
            return k;
    }
}
solution(["leo", "kiki", "eden", "leo"], ["leo", "kiki", "eden"])