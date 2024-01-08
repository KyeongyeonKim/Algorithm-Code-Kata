function solution(arr) {
    var answer = [];
// arr = 1,2,3,4
    let min = arr[0];
    let i=0;
    for(i; i<arr.length; i++) {
        if(arr[i] <= min){
            min = arr[i];
        }
    }
    let x = arr.indexOf(min);
    arr.splice(x, 1);
    
    if(arr.length === 0) arr.push(-1);
    return arr;
}