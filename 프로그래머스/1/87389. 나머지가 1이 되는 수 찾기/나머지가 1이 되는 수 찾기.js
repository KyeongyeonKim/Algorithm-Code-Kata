function solution(n) {
    var answer = 0;
    var x=1;
    for(x; x<n; x++){
        if(n%x === 1) break;
    }
    return x;
}