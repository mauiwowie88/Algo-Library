/*
Implement a function meetingPlanner that given the availability, slotsA and slotsB, 
of two people and a meeting duration dur, returns the earliest time slot that works 
for both of them and is of duration dur. If there is no common time slot that satisfies 
the duration requirement, return an empty array.

Time is given in a Unix format called Epoch, which is a nonnegative integer holding the
number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.

Each person’s availability is represented by an array of pairs. Each pair is an epoch 
array of size two. The first epoch in a pair represents the start time of a slot. 
The second epoch is the end time of that slot. The input variable dur is a positive 
integer that represents the duration of a meeting in seconds. 
The output is also a pair represented by an epoch array of size two.

In your implementation assume that the time slots in a person’s availability 
are disjointed, i.e, time slots in a person’s availability don’t overlap. 
Further assume that the slots are sorted by slots’ start time.

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 8
output: [60, 68]

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 12
output: [] # since there is no common slot whose duration is 12
*/

// 1st attempt: time O(min(m,n)) | space O(1)
function meetingPlanner(slotsA, slotsB, dur) {
    // These are used to track each slots array individually
    let aI = 0;
    let bI = 0;
    // We will loop thru both slots simutansely 
    while (slotsA[aI] && slotsB[bI]) {
        // Declare our current slots
        const a = slotsA[aI];
        const b = slotsB[bI];
        // Check which first index is greater; the greater one will be used to check wether it will fit with the other slots time frame
        const start = Math.max(a[0], b[0]);
        // This is to store the duration starting from the beginning of potential time frames
        const duration = start + dur;
        // This is to determine the end of a potential meeting
        const end = Math.min(a[1], b[1]);
        // Check wether the duration fits within the correct time frame; if so return time frame array
        if (duration <= end) return [start, duration];
        // Otherwise check which second index is larger; the smaller one's slot counter will incremenet
        if (a[1] > b[1]) bI++;
        else aI++;
    }
    // Once we have looped thru both time slots we have concluded there is no correct time to meet; return empty array
    return [];
}
