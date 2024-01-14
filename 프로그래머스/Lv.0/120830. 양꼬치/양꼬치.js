function solution(n, k) {
    var answer = 0;
    answer = n>=10 ? (12000 * n) + (2000 * k) -  Math.floor(n/10)*2000 : 
    (12000 * n) + (2000 * k);
    return answer;
}