60. Permutation SequenceSolvedHardTopicsCompaniesThe set [1, 2, 3, ..., n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:


	"123"
	"132"
	"213"
	"231"
	"312"
	"321"


Given n and k, return the kth permutation sequence.

 
Example 1:
Input: n = 3, k = 3
Output: "213"
Example 2:
Input: n = 4, k = 9
Output: "2314"
Example 3:
Input: n = 3, k = 1
Output: "123"

 
Constraints:


	1 <= n <= 9
	1 <= k <= n!

 Seen this question in a real interview before?1/5YesNoAccepted501,964/993.3KAcceptance Rate50.5%TopicsMathRecursionCompaniesSimilar QuestionsNext PermutationMediumPermutationsMediumDiscussion (73)Choose a typeComment💡 Discussion Rules1. Please don't post any solutions in this discussion.2. The problem discussion is for asking questions about the problem or for sharing tips - anything except for solutions.3. If you'd like to share your solution for feedback and ideas, please head to the solutions tab and post it there.Sort by:BestPiyush RajMar 15, 2024A simple hint for this question
It doesnt need backtracking nor recursion to solve. You can solve it using factorials and some basic intuition really. Just generate the kth permutation directly!
If you need further hint here it is
Lets say i have 5 numbers [1,2,3,4,5] and n = 17 well my first thought would be, what can be the 1st digit in my permutation? If we are talking lexicographically sorted permutations then the first number will change to 2 from 1 after (4)! iterations (because there are 4 numbers after 1 in the list) but we see 4!  > 17 thus what can we conclude from this?
Try to think about it and you would be able to come up with an algorithm to solve it without backtracking or recursion. Read moreTip603joeleetcode2018Oct 11, 2018The actual backtracking solution based on all permuations will be LTE. The actual optmized solution has no backtracking in it at all! Read more654CGKJul 02, 2023Mine actually passed all testcases. But still showing as "Time Limit Exceeded". Someone please explain why? The last executed input is literally showing as "n = " without any number, but 200/200 testcases passed Read more151JulienApr 02, 2023The discrepancy between manual testcases and submissions is pretty bad. The brute force seems to work 100% of the time when tested manually (quite comfortably) but consistently fails on the same testcases when submitted.
I mean, it's a good thing that the brute force doesn't pass, but why do I get different results when I test that individually ? Read more143noob_2347Apr 14, 2023Can someone tell me why is this hard? Read more2714Shaik Aman SayerJun 11, 2023Hardest question i ever solved Read more12Dipanjan SahaApr 07, 2025this was the first hard question I solved all by myself :) Read more111Jinsheng ZhouAug 07, 2016Even if I ad this line:
if(n ==8 && k == 8590) return "26847351";
I still got TLE... Read more142ChandlerNov 30, 2016I use Java, so I'm just talking about java. To remove a element from a list, arrayList or a LinkedList, it takes O(n) to remove that. Of course you could implement a data structure of your own to remove a element with O(1) while maintaining the order. But if your algorithm is not O(n), please don't say it is O(n). Don't mislead other programmers. Just like the substring() function. It used to be O(1), But it is O(n) now. So please analyze the algorithm time complexity correctly. Read more73Martin ShoostermanMay 19, 2023Hint: Think about the permutations as if you are representing a number in some sort of "factorial base" Where the leftmost digit represents multiples of 1, then multiples of 2, then multiples of 6, then multiples of 24, etc. Now convert k to this base. There is a tiny bit more to it, but this line of thinking should get you there. Read more5212348Copyright © 2025 LeetCode. All rights reserved.