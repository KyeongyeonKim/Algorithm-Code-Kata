function solution(strlist) {
    var answer = [];
    strlist.forEach(function(item){
        answer.push(item.length);
    })
    return answer;
}