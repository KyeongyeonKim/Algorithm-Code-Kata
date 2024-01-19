function solution(array, commands) {
    var answer = [];
    // array에 대해 commands[i][0]-1부터 commands[i][1]까지 자르고 정렬
    // 정렬된 배열에서 commands[i][2]숫자 반환
    for(let i=0; i<commands.length; i++){
        let n = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=>a-b);
        answer.push(n[commands[i][2]-1]);
    }
    return answer;
}