class Solution {
    int missingNum(int arr[]) {
        int n = arr.length + 1;
    int xor = 0;
    // XOR all numbers from 1 to n
    for (int i = 1; i <= n; i++) {
        xor ^= i;
    }
    // XOR all elements in array
    for (int num : arr) {
        xor ^= num;
    }
    return xor;
    }
}