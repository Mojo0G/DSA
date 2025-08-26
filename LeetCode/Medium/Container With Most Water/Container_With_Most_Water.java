class Solution {
    public int maxArea(int[] height) {
       
        int i = 0, j = height.length - 1;
        int max = 0;

        while (i < j) {
            
            int water = Math.min(height[i],height[j])*(j-i);

            max = max < water? water: max;

            if (height[i] <= height[j]) {
                i++;
            }
            else{
                j--;
            }
        }
        return max;  
    }
}