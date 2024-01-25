function solution(k, score) {
    var answer = [];
    let arr = [];
    
    for(let i = 0; i < score.length; i++){
        if(i < k){
            // i가 k보다 작을 때는 arr[i]에 score[i]값을 넣고 최솟값을 answer에 넣는다.
            arr[i] = score[i];
            answer.push(Math.min(...arr));
        } else { 
            // i가 k보다 클때는 arr을 내림차순으로 하고 k-1번째 값을 answer에 넣는다.
            arr[i] = score[i];
            arr.sort((a,b)=>b-a);
            answer.push(arr[k-1]);
        }
    }
    return answer;
}