function solution(arr1, arr2) {
    let arr1Sum = arr1.reduce((a,c)=>a+c, 0);
    let arr2Sum = arr2.reduce((a,c)=>a+c, 0);
    
    if(arr1.length !== arr2.length){
        return arr1.length > arr2.length ? 1 : -1;
    } else if(arr1Sum===arr2Sum) {
        return 0;
    }
    else {
        return arr1Sum>arr2Sum ? 1 : -1;
    }
}