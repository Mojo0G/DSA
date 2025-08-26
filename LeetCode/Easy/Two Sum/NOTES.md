
          # Two Sum

          **Summary:** This Java code uses a HashMap to solve the Two Sum problem. It first populates the HashMap with array elements as keys and their indices as values. Then, it iterates through the array; for each element, it checks if the complement (target - element) exists in the HashMap. If the complement exists and its index is different from the current element's index, it means a pair adding up to the target has been found. The indices of this pair are returned. Otherwise, the loop continues until a pair is found or the loop completes.

          - Time Complexity: O(n) because the code iterates through the input array once to populate the HashMap and then iterates through it again at most once to find the pair.  HashMap operations (put and containsKey) take constant time on average.
          - Space Complexity: O(n) because the HashMap stores at most n key-value pairs, where n is the length of the input array. The space used by other variables is constant.
          