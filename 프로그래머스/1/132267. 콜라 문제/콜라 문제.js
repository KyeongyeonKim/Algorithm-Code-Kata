function solution(a, b, n) { // 빈병a주면, 콜라b병받음, 빈병n개주면 몇병받음?
    var answer = 0;
    while(true){
    if(a>n){ break; }
    answer += parseInt(n/a)*b;
    n = parseInt(n/a)*b + n%a;
    }

    return answer;
}