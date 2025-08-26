34. Find First and Last Position of Element in Sorted ArraySolvedMediumTopicsCompaniesGiven an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 
Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:
Input: nums = [], target = 0
Output: [-1,-1]

 
Constraints:


	0 <= nums.length <= 105
	-109 <= nums[i] <= 109
	nums is a non-decreasing array.
	-109 <= target <= 109

 Seen this question in a real interview before?1/5YesNoAccepted2,853,998/6MAcceptance Rate47.3%TopicsArrayBinary SearchCompaniesSimilar QuestionsFirst Bad VersionEasyPlates Between CandlesMediumFind Target Indices After Sorting ArrayEasyDiscussion (313)Choose a typeComment💡 Discussion Rules1. Please don't post any solutions in this discussion.2. The problem discussion is for asking questions about the problem or for sharing tips - anything except for solutions.3. If you'd like to share your solution for feedback and ideas, please head to the solutions tab and post it there.Sort by:BestSatvik ShrivastavaJul 14, 2023After attempting this binary search is running through my veins. Read more36212Tasneem AyhamOct 09, 2023Guys, just for better experience to our fellow LeetCoders, if you find a problem that's ranked medium/hard and you think it should be levelled down, please refrain from writing it in the discussion section as that would demoralize our brothers/sisters. Remember, we were all in their place once!!
Thank you for your understanding! Read more4662Joe NgJan 16, 2022I sometimes get 5th percentile speed from a submission, then a 95th percentile speed on the next with the exact same code. Read more17114Moonbeam8773Apr 17, 2023I'm sorry. What is "sorted in non-decreasing order"? Isn't that just sorted in ascending order? Read more18714PrishaOct 09, 2023When you first encounter this question, your initial instinct might be to employ a simple O(N) solution, where you traverse the array to locate both the first and last positions of the target element. After all, it seems like a straightforward approach, right? 🤔
However, here's where the plot thickens!
Given that the array is sorted, why not leverage this fact to your advantage and craft a logarithmic solution instead?  The term "sorted" practically whispers to you, suggesting the use of binary search. But how exactly do you wield this powerful technique?
🤔 Ah, here's the twist! The main challenge arises when the element you're looking for equals nums[mid]. Is it the first occurrence or the last? 🤷‍♀️ That's the million-dollar question right there.
✨ Now, here comes the magic trick!
You don't just use one binary search; you utilize two of them. 🪄 Yes, you heard that right!
One binary search is dedicated to finding the lower bound, and the other to discover the upper bound.
🎯 And just like that, you've transformed a seemingly complex problem into an elegant, efficient solution. Ta-da! 🎉✨💫 Read more2337mstuebsOct 09, 2023Don't submit code that is not thoroughly tested. Make sure to have additional test cases, like
[]
42
[7,8,8,8,8,8,8,8,8,8,8,9]
7
[7,8,8,8,8,8,8,8,8,8,8,9]
8
[7,8,8,8,8,8,8,8,8,8,8,9]
10
[1,2,2,2,2,3,4,5,5,5,5,6,7,8,9,10,11,12,12,12,12,12,13]
2
[-999985131,-999953607,-999953607,-999915742,-999883817,-999849817,-999822901,-999815377,-999810801,-68594,-49967,20394,114012,999969829,999973689,999975494]
-999953607
https://github.com/mquintus/l33tcode-testcase-generator/blob/main/generated/34_Find_First_and_Last_Position_of_Element_in_Sorted_Array.txt Read more616heijinganghuashengNov 16, 2013If the elements of the whole array is the same as the target, can we do it in a O(logn) time? Read more6013M Mahbubul AlamJan 19, 2023At first use binary search. When your mid value will be equal to the target, then use two different binary search on the left part and right part of the mid. Read moreTip847WizelDec 07, 2022Why in the case the nums is [1] , target is 1, the search result should be [0, 0] ? Read more349Shubham JhaNov 22, 2022previous UI was much handy Read more231123432Copyright © 2025 LeetCode. All rights reserved.