11. Container With Most WaterSolvedMediumTopicsCompaniesHintYou are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 
Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.


Example 2:

Input: height = [1,1]
Output: 1


 
Constraints:


	n == height.length
	2 <= n <= 105
	0 <= height[i] <= 104

 Seen this question in a real interview before?1/5YesNoAccepted4,385,734/7.5MAcceptance Rate58.2%TopicsArrayTwo PointersGreedyCompaniesHint 1If you simulate the problem, it will be O(n^2) which is not efficient.Hint 2Try to use two-pointers. Set one pointer to the left and one to the right of the array. Always move the pointer that points to the lower line.Hint 3How can you calculate the amount of water at each step?Similar QuestionsTrapping Rain WaterHardMaximum Tastiness of Candy BasketMediumHouse Robber IVMediumDiscussion (642)Choose a typeComment💡 Discussion Rules1. Please don't post any solutions in this discussion.2. The problem discussion is for asking questions about the problem or for sharing tips - anything except for solutions.3. If you'd like to share your solution for feedback and ideas, please head to the solutions tab and post it there.Sort by:BestJean BarkhuysenOct 30, 2017This question is exceptionally unclear. Anyone else having that trouble? Read more1.2K21halleknastNov 01, 2016The current formulation of the problem doesn't make any sense. After having seen the solution, I've found the following clarification to be needed:
Forget about water; that only confuses things. The problem is just about finding a maximum area rectangle. The water formulation made me think that for there to be a container, all lines between the container ends must be lower than the ends. I didn't get to see examples of this not being the case because my solution timed out.
Also, the formulation doesn't tell what the function should actually return. A more correct formulation would thus be something like:
"[...]. All pairs of the n lines define a rectangle with a height given by the shorter line and a width given by the distance between the lines. Return the area of the rectangle with the largest area." Read more91531shiva97Aug 18, 2021The proof of why the solution works is important to understand. Following is its summary:

Consider we start with i = 0 and j = height.size() - 1. That is, i points to the first column and j points to the last column.
Now suppose that h(i)>h(j) (we are not loosing generality by this assumption)
We calculate the water capacity for the i, j. It will be h(j)*(j-i).
Now see that if we fix j at height.size() - 1 and vary i, we cannot get a greater water capacity. Why?

capacity = min of both heights * width between them. Since capacity is the product of these two terms, we will look at each term individually.
First about the width. It is easy to see that for all other i's (i = 1, 2,... ,height.size()-2) we will have a lesser width.
Second, the height will be the minimum of the column at i and at j, i.e. min(h(i),h(j)). But this value will be always less than h(j)
So both factors in the calculation of the capacity will be smaller and hence we can skip considering all the cases where i = 1, 2, 3, ..., height.size()-2 and j = height.size()-1
Which basically means that we can simply move j to j-1.



This is how I understood it and I hope this explanation makes it easy to understand. Read more53833waitingtodieOct 27, 2017Whoever designed this problem has no ability whatsoever to speak in plain English. Read more5525alec_csJun 05, 2021Some of these proofs are not very clear. I want to expand on Steven Pochmann's idea and hopefully make it clearer.
Explanation

To start, we place both pointers at the beginning and end of the array. While this is common with most two pointer approaches, in this specific problem it allows us to consider all potential possibilities. Thus, in a way we are still brute forcing the solution, however we are carefully optimizing the possibilities at each iteration so that the optimal solution is not missed.
At each iteration, no matter what, the width will decrease. This is because we must move either the left and right pointer. Therefore, we must consider the potential outcomes after we either increase the left pointer or decrease the right pointer.

Outcome A: If we decrease a pointer and the height of the pillar is smaller than the previous height (where the pointer was originally before we moved it), the overall area will have to be smaller. This is because we take the minumum of the two heights that the pointers are pointing at, and because the width will be decreased by 1, the new area will have to be the same or smaller.
Outcome B: If we decrease a pointer and the height of the pillar is larger or the same as the previous height, the width may or may not be larger than the previous height, because it depends on whether the height difference between the new pillar and the previous pillar can compensate for the loss of width.



So why do we always move the pointer of the smallest pillar?
The reason for this is simple. There is no reason to hang onto the pillar of the smallest size in the current range because in the next iteration, the overall width will decrease by one. Thus, a potential greater area will never be reached by hanging onto the smaller pillar, because even if another taller pillar is found by moving the pointer at the taller pillar, the area must always be calculated with the minimum of the two pillars. Due to the smaller width by decreasing the pointer range, the overall area will be smaller regardless. Thus, we can safely disregard the smaller pillar at each iteration. Read more25617Yang  ZhaoSep 28, 2018This is a formal proof of the O(n) algorithm mentioned in the tutorial.
Problem Description:
Condition: We have two pointers at i & j, suppose h[i] <= h[j].
Goal to Prove: If there is a better answer within the sub-range of [i, j], then the range [i + 1, j] must contain that optimal sub-range. (This doesn't mean range [i, j - 1] can't contain it, we just want to prove range [i + 1, j] will contain it).
Proof:
Since we assume there is a better answer in the sub-range of [i, j], then this optimal range must be contained by either [i + 1, j] or [i, j - 1], or both.
Let's assume [i + 1, j] doesn't contain the optimal range, but [i, j - 1] contains it. Then this means two things:

the optimal range is not in [i + 1, j - 1], otherwise, [i + 1, j] will contain it.
The optimal range contains the block [i, i + 1] (since this is the part which exists in [i, j - 1] but not in [i+1, j]).

However, notice that, len(i, j - 1) < len(i, j), and in the range [i, j], the area is constrained by the height of h[i] (even in the case h[i] == h[j]). Thus, in the range [i, j - 1], even all pillar are no shorter than h[j], the maximum area is smaller than the area formed by i & j, which contradicts our assumption there is a better answer in the sub-range of [i, j]. This contradiction suggests [i + 1, j] contains the optimal sub-range, if such sub-range exists.
According to above theorem, we can design the algorithm, whenever h[i] < h[j], we advance the pointer i. Read more23912bvelardeMar 29, 2021Isn't it obvious that 8x8 will hold more water than the 7x7 implied in the expected answer? Read more22121labrador_peninsulaMay 09, 2022Algorithm:

Designate two pointers ptr_lo = 0 and ptr_hi = length(height) - 1 i.e. set the two pointers at the two ends.
If height[ptr_lo] <= height[ptr_hi] then increment ptr_lo.
If height[ptr_lo] > height[ptr_hi] then decrement ptr_hi (i.e. iteratively move the smaller of the two edges closer to the other).
Calculate the area after each change and keep track of the maximum area.
End when the two pointers are equal to each other.

Why the algorithm works
Let i, j be the left and right edges of the container with most water (0 <= i < j < length(height)). If there are multiple such containers, then i, j can be the edges of any one of them. We will prove that between the start and end condition, there must be one moment when ptr_lo == i and ptr_hi == j i.e. the maximum area is always considered.


Note that between the start and end condition, there must be a pointer that reaches one of the edge of the maximum container (the dashed border in our figure). We can now devise three scenarios:
Scenario 1: ptr_lo == i and ptr_hi == j at the same time
This means we proved our hypothesis.
Scenario 2: ptr_lo reaches the left edge first
Here, we have ptr_lo == i and j < ptr_hi < length(height). We can now have two sub-scenarios:
Sub-scenario 1 If height[ptr_hi] >= height[ptr_lo] i.e. the right edge >= left edge

In this situation, we see that by letting  height[ptr_hi] >= height[ptr_lo], we create a new area strictly greater than the maximum area. This contradicts our original stipulation. Therefore, sub-scenario 1 is impossible.
Sub-scenario 2 If height[ptr_lo] > height[ptr_hi] i.e. the left edge > right edge

Using the algorithm, we will just keep decrementing ptr_hi. In fact, because sub-scenario 1 is impossible, once ptr_lo == i, then for all j < ptr_hi < length(height) we have height[ptr_lo] > height[ptr_hi].
Therefore, once ptr_lo reaches i, it will stays there until ptr_hi reaches j. We proved our hypothesis
Scenario 3: ptr_hi reaches the right edge first
This is the same as scenario 2, only reversed.
Hope this helps. Read more887Sachi Nandan PradhanSep 06, 2023just disgusting test cases Read more59summerbleachMay 10, 2024Notice that you may not slant the container.
No one is even trying that, why the notice? Read moreFeedback565123465Copyright © 2025 LeetCode. All rights reserved.