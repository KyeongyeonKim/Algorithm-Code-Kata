function solution(s) {
    var answer = '';
    let count=0;
    s.split(" ");
    
    // 짝수 인덱스를 만나면 대문자로
    // 홀수 인덱스를 만나면 소문자로
    // 공백을 만나면 count=0;
    for(let i=0; i<s.length; i++){
        if(s[i]==" "){
            answer += " ";
            count=0;
        }else{
            if(count%2==0){
                answer += s[i].toUpperCase();
            } else{
                answer += s[i].toLowerCase();
            }   
            count++;
        }
}
    return answer;
}