class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let j = s.length-1;
        while(i<j){
            if(s[i]!==s[j]){
                return false;
            }else{
                i++;
                j--;
            }
        }
        return true;
    }
}
