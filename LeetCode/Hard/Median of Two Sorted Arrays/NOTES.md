
          # Median of Two Sorted Arrays

          **Summary:** The code utilizes vectors (dynamic arrays) to store and manipulate input and merged arrays. It first merges two sorted input vectors, `nums1` and `nums2`, into a single vector `merged`. Then, it sorts `merged` and determines the median based on whether the total number of elements is odd or even.  If odd, the middle element is the median; if even, the average of the two middle elements is the median.

          - Time Complexity: O(m+n log(m+n)). Merging the two arrays takes O(m+n) time. Sorting the merged array takes O((m+n)log(m+n)) time, which dominates the overall time complexity.
          - Space Complexity: O(m+n). This is due to the creation of the `merged` vector, which stores all elements from both input arrays. The space used is proportional to the sum of sizes of the input arrays.
          