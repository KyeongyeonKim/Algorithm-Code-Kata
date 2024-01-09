function solution(left, right) {
    var answer = 0;
    let num =[];
    let num2=[];
    let cnt=0;
    // left부터 right까지 수 배열 만들기
    for(let i=left; i<=right; i++){
        num.push(i);
    }
    // 배열 돌면서 약수 개수를 담은 배열 구하기
    for(let i=0; i<num.length; i++){
        for(let j=1; j<=num[i]; j++){
            if(num[i] % j === 0) cnt++;
        } num2.push(cnt); cnt=0;
    }
    // 짝수면 +부호 반환, 홀수면 -부호 반환
    for(let i=0; i<num2.length; i++){
        if(num2[i]%2 === 0) {
            answer += num[i];
        }else {answer -= num[i];}
    }
    // 누적합 answer 구하기
    
    return answer;
}