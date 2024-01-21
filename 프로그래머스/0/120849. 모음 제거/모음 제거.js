function solution(my_string) {
    var answer = '';
    let a = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0; i<my_string.length; i++){
        if(!a.includes(my_string[i])) answer += my_string[i];
    }
    return answer;
}