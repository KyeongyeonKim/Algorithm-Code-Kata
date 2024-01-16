function solution(sizes) {
    var answer = 0;
    let w=[], h=[];
    // [a,b] 비교해서 큰수를 뒤에, 작은수를 앞에 정렬
    for(let i=0; i<sizes.length; i++){
        sizes[i].sort((a,b)=> a-b);
        w.push(sizes[i][0]);
        h.push(sizes[i][1]);
    }
    // sizes 각 요소의 0번째 중에서 제일 큰 수, 1번째 요소 중에서 제일 큰 수 반환,,,

    return answer = Math.max(...w) * Math.max(...h);
}