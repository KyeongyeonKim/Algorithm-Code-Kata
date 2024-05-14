function solution(hp) {
    var answer = 0;
    const first = Math.floor(hp / 5)
    const second = Math.floor((hp - first * 5) / 3)
    const third = (hp - first * 5 - second * 3)
    return answer = first+second+third;
}