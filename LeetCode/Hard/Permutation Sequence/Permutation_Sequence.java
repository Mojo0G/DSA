class Solution {
    public String getPermutation(int n, int k) {
        // Validation
        int totalPermutations = factorial(n);
        if (k < 1 || k > totalPermutations) {
            throw new IllegalArgumentException(
                "k must be between 1 and " + totalPermutations + ", got " + k
            );
        }

        // Prepare numbers 1..n
        List<Integer> numbers = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            numbers.add(i);
        }

        // Precompute factorials
        int[] facts = new int[n + 1];
        facts[0] = 1;
        for (int i = 1; i <= n; i++) {
            facts[i] = facts[i - 1] * i;
        }

        // Build the k-th permutation
        StringBuilder permutation = new StringBuilder();
        // Convert k to 0-based index
        int kIndex = k - 1;

        for (int pos = n; pos >= 1; pos--) {
            int fact = facts[pos - 1];
            int idx = kIndex / fact;
            permutation.append(numbers.get(idx));
            numbers.remove(idx);
            kIndex %= fact;

            // Debug info
            System.out.println(
                "Select " + permutation.charAt(permutation.length() - 1) +
                " from remaining: " + numbers +
                " (Block size: " + fact + ", kIndex: " + kIndex + ")"
            );
        }

        return permutation.toString();
    }

    /**
     * Computes n! (factorial).
     */
    private int factorial(int n) {
        int prod = 1;
        for (int i = 2; i <= n; i++) {
            prod *= i;
        }
        return prod;
    }
}