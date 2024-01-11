function solution(n) {
    var answer = 0;
    let arr =[];
    // 3진법n을 구함
    n = n.toString(3);

    // 앞뒤반전
    let rev = n.split("").reverse().join("");

    // 반전한 수를 10진법으로 표현
    answer = parseInt(rev,3);
    return answer;
}