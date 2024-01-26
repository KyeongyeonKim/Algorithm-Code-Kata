function solution(num_list) {
    var answer = 0;
    answer = num_list.reduce((a,c)=>a*c)<num_list.reduce((a,c)=>a+c)**2 ? 1: 0;
    return answer;
}