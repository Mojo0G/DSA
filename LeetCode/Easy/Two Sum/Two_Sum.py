class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        num_to_index = {}
        
        for i, n in enumerate(nums):
            n2 = target - n
            if n2 in num_to_index:
                return [num_to_index[n2], i]
            num_to_index[n] = i
        
        return []  # Return an empty list if no solution is found