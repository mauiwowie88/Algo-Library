/* 
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.

 Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)

-Approaches: {
    1. My understading is well bee given an array and an input numberr
        The array holds thee wieght of each perrson and 
        The input number is the weight limit of each boat
        So nmy initial thinking is to sort the array
        To make it easier to find
    2. First we gotta create the object filled with input elements
        So we loop thru input array and create key vaalue pairs
        Wherre the key is the curr num and value is limit - curr
}


{

}




Input: people = [3,2,2,1,3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)






*/ 
                {
                        1: 9, 3: 7, 2: 8, 2: 8, 8: 2, 6: 4, 7: 3,
                }

// vv []
// [1,3,2,2,8,6,7] (10) = [9,7,8,8,2,4,3]
// [1,2,2,3,6,7,8] [6] = []