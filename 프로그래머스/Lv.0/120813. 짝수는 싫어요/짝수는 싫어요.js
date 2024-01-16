function solution(n) {
    var answer = [];
    for(let i=1; i<=n; i++){
        let num;
        if(i%2 !== 0) {
            num=i;
            answer.push(num);
        }
    }
    return answer;
}