function solution(n) {
    var answer = 0;
    let p=6;
    // 피자조각수를 인원수로 나눠서 나누어 떨어지면 그 피자조각을 6으로 나눠서 몇 판인지 구하기
    while(p%n !== 0){
        p += 6;
    }if(p%n == 0) answer = p/6;
    return answer;
}