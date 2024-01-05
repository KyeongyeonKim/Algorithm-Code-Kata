function solution(n) {
    var answer = 0;
    let x=1;

    for(x=1; x<=n; x++){
        if(n === x**2){  
            return answer = (x+1)**2; 
        }
    }
    if(n !== x**2){ return answer = -1;}

}