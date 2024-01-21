function solution(n) {
    var answer = 0;
    // 약수의 개수
    for(let i=0; i<=n; i++){
        if(n%i===0) answer++;
    }
    return answer;
}