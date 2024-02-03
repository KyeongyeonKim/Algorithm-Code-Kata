function solution(myString, pat) {
    var answer = 0;
    myString = myString.toUpperCase();
    pat = pat.toUpperCase();
    answer = myString.includes(pat)? 1: 0;
    return answer;
}