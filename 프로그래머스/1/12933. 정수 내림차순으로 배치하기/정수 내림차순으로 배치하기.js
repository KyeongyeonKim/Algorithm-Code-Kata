function solution(n) {
    var answer = 0;
    let str = String(n);
    answer = str.split("");
    answer = answer.sort((a,b)=> b-a).join("");
    return +answer;
}