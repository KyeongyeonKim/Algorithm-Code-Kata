function solution(array) {
    var answer = 0;
    
    array.sort(function(a,b){
        return a-b;
    })
    
    let i = array.length;
    
    return answer = array[Math.floor(i/2)];
}