// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fib)
{
    const cache={};
    return function(...args)  
    {
      if(cache[args]) // If this function has ever been call with that particular set of arguments
      {
          return cache[args];
      }
      return cache[args]=fib.apply(null, args);
    }
} 

function fib(n) {
    if(n<2)
    {
        return n
    }
    else{
       return fib(n-1)+fib(n-2)
    }
}

fib=memoize(fib);


module.exports = fib;



    
    // let series=[0,1];

    // for(let i=2;i<=n;i++)
    // {
    //     a=series[i-1];
    //     b=series[i-2];

    //     series.push(a+b);
    // }
    // return series[n]; 
