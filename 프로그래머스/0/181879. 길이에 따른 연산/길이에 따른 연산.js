function solution(num_list) {
    var answer=0;
    if(num_list.length>=11){
        for(let i=0; i<num_list.length; i++)
            answer += num_list[i];
    } else if(num_list.length<11){
        answer = num_list.reduce((a,b) => a*b);
        }
    return answer;
}