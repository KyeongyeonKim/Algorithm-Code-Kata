function solution(numbers) {
  var answer=0;
  let sum=0;
  let avg=0;
  for(let i=0; i<numbers.length; i++){
      sum += numbers[i];
  }
  avg= sum/numbers.length;
  return avg.toFixed(1);
}