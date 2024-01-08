function solution(phone_number) {
    var answer = '';
    let last = phone_number.substring(phone_number.length - 4);
    let x = phone_number.length - 4;
    answer = "*".repeat(x) + last;
    return answer;
}