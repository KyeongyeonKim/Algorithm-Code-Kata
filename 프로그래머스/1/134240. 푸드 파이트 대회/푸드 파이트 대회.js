function solution(food) {
    var answer = '';
    let left='';
    let right='';
    // 요소가 홀수면 -1
    // 위에 수 만큼 반복 출력 > left
    // 뒤집은것이 right
    // left+0+rigth
    for(var i=1; i<food.length; i++){
        if(food[i]%2 !== 0) {
            food[i] = food[i]-1;
        }
        i = i.toString();
        left += i.repeat(food[i]/2);
    }
    right = left.split('').reverse().join('');
    return answer=left+0+right;
}