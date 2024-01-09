function solution(s) {
    var answer = '';
    let x = s.length;
    if(x % 2 == 0){
        answer = s.slice((x/2)-1, (x/2)+1);
    }else{
        answer = s.slice(x/2, (x/2)+1);
    }
    
    return answer;
}