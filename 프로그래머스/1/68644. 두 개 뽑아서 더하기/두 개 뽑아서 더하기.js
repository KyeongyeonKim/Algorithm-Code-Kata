function solution(numbers) {
    var answer = [];
    // 배열돌면서 다 더하고 answer에 push
    // answer에 없으면 넣기
    // sort
    for ( let i = 0; i < numbers.length; i++) {
      for ( let j = i + 1; j < numbers.length; j++) {
        let sum = numbers[i] + numbers[j];
        if( answer.indexOf(sum) === -1) {
          answer.push(sum);
        }
      }
    }
    answer.sort((a,b)=>a-b);
    return answer;
}