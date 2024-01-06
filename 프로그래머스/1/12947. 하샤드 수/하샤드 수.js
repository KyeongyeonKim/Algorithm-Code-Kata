function solution(x) {
    var answer = true;
    let sum = 0;
    let arr = String(x).split("");
    
    for(let i=0; i<arr.length; i++){
        sum += +arr[i];
    }
    answer = (x%sum === 0) ? true: false;
    return answer;
}