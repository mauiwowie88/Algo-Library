/*
    Write a function that takes in a function with one parameter and returns a 
    new memoized function. The memoized function maintains a cache obj thru 
    closure such that when we call the functions f(3) -> 4, subsequent calls 
    of f(3) will not recomputer f(3) but, rather draw uponthe cache to return 4

    Ex:
        function addOne(x) {
            return x + 1;
        }
        
        function joinAndScream(arr) {
            return arr.join('').toUpperCase() + '!';
        }

        function reverseString(str) {
            return str.split('').reverse().join('');
        }

        const twoPlusOne = memoize(addOne);

        console.log(twoPlusOne(2))    // 3 <--- Not in cache so it compute and stores
        console.log(twoPlusOne(2))    // 3 <--- Does not recompute returns from cache

*/

function memoize(func) {
    const cache = {};

    return function (arg) {
        if (cache[arg]) return cache[arg];
        else {
            const result = func(arg);
            cache[arg] = result;
            return result;
        }
    };
}
