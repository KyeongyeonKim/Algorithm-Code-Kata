function solution(a, b) {
    var answer = 0;
    let ab = a.toString()+b.toString();
    let ba = b.toString()+a.toString();
    answer= +ab>+ba? +ab : +ba;
    return answer;
}