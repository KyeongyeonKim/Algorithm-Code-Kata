function solution(rsp) {
    var answer = '';
    // 2->0, 0->5, 5->2
    for (let i = 0; i < rsp.length; i++) {
        if (rsp[i] === '2') {
            answer += '0' 
        } else if (rsp[i] === '0') {
            answer += '5'
        } else if (rsp[i] === '5') {
            answer += '2'
        }
    }
    
    return answer;
}