class Solution {
    public int[] twoSum(int[] nums, int target) {
         Map<Integer, Integer> mp = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            mp.put(nums[i], i );
        }
        //mycode
        int[] res = new int[2];

        for (int i = 0; i < nums.length; i++) {
            
            int later = target - nums[i];
            if (mp.containsKey(later) && mp.get(later) != i) {
                res = new int[]{i, mp.get(later)};
                break;
            }
        }

        return res;
    }
}