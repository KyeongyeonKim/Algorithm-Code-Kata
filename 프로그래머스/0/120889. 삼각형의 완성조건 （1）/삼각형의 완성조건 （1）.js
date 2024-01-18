function solution(sides) {
    var answer = 0;
    let sum, max;
    sides.sort((a,b)=>b-a);
    max = sides[0];
    sum = sides[1]+sides[2];
    answer = sum>max ? 1 : 2;
    return answer;
}