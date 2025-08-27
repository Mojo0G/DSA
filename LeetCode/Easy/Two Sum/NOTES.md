
          Two Sum

          - Summary: This algorithm utilizes a hash map (dictionary in Python) to efficiently find two numbers within a list that sum up to a target value. It iterates through the input list, checking for each number if its complement (target - number) exists in the hash map. If found, it returns the indices of the two numbers. Otherwise, it adds the current number and its index to the hash map and continues. If no pair is found, it returns an empty list.

          - Time Complexity: O(n) because the algorithm iterates through the input list once. Hash map lookups (in and assignment) take constant time on average.
          - Space Complexity: O(n) because in the worst-case scenario, the hash map will store all the numbers from the input list, resulting in linear space usage.
          