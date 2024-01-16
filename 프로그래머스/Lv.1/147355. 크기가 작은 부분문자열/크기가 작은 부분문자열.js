function solution(t, p) {
    var answer = 0;
    let arr = [];
    // p 길이만큼 t를 잘라서 배열로 만들기
    for(let i=0; i<t.length; i++){
       if(t.slice(i, i+p.length).length == p.length)
        arr.push(+t.slice(i, i+p.length));
    }
    
    // p보다 큰 요소만 카운트
    for(let i=0; i<arr.length; i++){
        if(arr[i]<= +p) answer++;
    }
    return answer;
}