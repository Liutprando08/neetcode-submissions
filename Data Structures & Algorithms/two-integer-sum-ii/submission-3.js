class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length-1;
        let total;
        while(i<j){
        total=numbers[i]+numbers[j];
        if(total === target){
            return [i+1, j+1];
        }else if(total > target){
            j--;
        }else if(total < target){
            i++;
        }
            }    
            return;
        }
}
