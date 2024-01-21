function solution(age) {
    var answer = '';
    age = age.toString(); 23
    let a=['a','b','c','d','e','f','g','h','i','j'];
    for(let i=0; i<age.length; i++){
        answer += a[age[i]];
    }
    
    return answer;
}