function solution(n) {
    var answer = '';
    let a = "수";
    let x = "수박";
    if(n===1){
        answer = a;
    } else if(n%2 === 0){
        answer = x.repeat(n/2);
    }else{
        answer = x.repeat(n/2) + a;
    }
    return answer;
}