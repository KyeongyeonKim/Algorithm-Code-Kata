function solution(s) {
    var answer = [];
    let str = [];
    // 처음 나온 글자라면 -1
    // 자신의 인덱스-그 글자 나오는 인덱스들의 배열중 큰수
    for(let i = 0; i < s.length; i++){
        if(!str.includes(s[i])){
            answer.push(-1);
            str.push(s[i]);
        } else if(str.includes(s[i])){
            answer.push(i - str.lastIndexOf(s[i]));
            str.push(s[i]);
        }
    }
    return answer;
}