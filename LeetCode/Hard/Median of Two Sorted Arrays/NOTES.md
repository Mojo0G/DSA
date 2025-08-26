
          # Median of Two Sorted Arrays

          **Summary:** The code uses vectors (dynamic arrays) to store and manipulate input and merged arrays. It first merges two input sorted arrays into a single vector, then sorts the merged vector. Finally, it determines the median based on whether the total number of elements is odd or even, returning the middle element or the average of the two middle elements, respectively.

          - Time Complexity: O(m+n+k log k), where m and n are the lengths of input arrays and k = m+n. This is because merging takes O(m+n), sorting takes O(k log k), and the rest of the operations are O(1). In the worst-case scenario, where both input arrays are unsorted, the sorting step dominates.
          - Space Complexity: O(m+n), because a new vector 'merged' of size m+n is created to store the combined elements of the two input arrays. This is a linear space complexity.
          