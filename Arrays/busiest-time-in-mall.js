/*
The Westfield Mall management is trying to figure out what the busiest moment at the mall was last year. You’re given data extracted from the mall’s door detectors. Each data point is represented as an integer array whose size is 3. The values at indices 0, 1 and 2 are the timestamp, the count of visitors, and whether the visitors entered or exited the mall (0 for exit and 1 for entrance), respectively. Here’s an example of a data point: [ 1440084737, 4, 0 ].
Given an array, data, of data points, write a function findBusiestPeriod that returns the time at which the mall reached its busiest moment last year. The return value is the timestamp, e.g. 1480640292. Note that if there is more than one period with the same visitor peak, return the earliest one.

Assume that the array data is sorted in an ascending order by the timestamp. Explain your solution and analyze its time and space complexities.
    input:  data = [ [1487799425, 14, 1], 
                    [1487799425, 4,  0],
                    [1487799425, 2,  0],
                    [1487800378, 10, 1],
                    [1487801478, 18, 0],
                    [1487801478, 18, 1],
                    [1487901013, 1,  0],
                    [1487901211, 7,  1],
                    [1487901211, 7,  0] ]

output: 1487800378 # since the increase in the number of people
                   # in the mall is the highest at that point
*/




const checker = (arr) => {
    let mall = 0;
    let max = 0;
    let maxTime;
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        if (curr[2] === 1) mall += curr[1];
        if (curr[2] === 0) mall -= curr[1];
        if (arr[i+1] !== undefined && arr[i+1][0] === curr[0]) continue;
        else if (mall > max) {
            max = mall;
            maxTime = curr[0];
        }
    }
    return maxTime;
}

const data = [ [1487799425, 14, 1], 
                 [1487799425, 4,  0],
                 [1487799425, 2,  0],
                 [1487800378, 10, 1],
                 [1487801478, 18, 0],
                 [1487801478, 18, 1],
                 [1487901013, 1,  0],
                 [1487901211, 7,  1],
                 [1487901211, 7,  0] 
             ];

console.log(checker(data))