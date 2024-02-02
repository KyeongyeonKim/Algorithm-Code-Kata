function solution(nums) {
    var answer = 0, number=0;
    for(let i=0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                number=nums[i]+nums[j]+nums[k];
                var count=0;
                for(var l=1;l<=number;l++){
                    if(number%l==0) count++;
                }
                if(count==2) answer++;
            }
        }
    }
    return answer;
}