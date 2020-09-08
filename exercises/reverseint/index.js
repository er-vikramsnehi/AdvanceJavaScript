// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    const rev=n.toString().split('').reduce((x,y)=>y+x,'');

    // if(n<0)
    // {
    //     return parseInt(rev) * -1;
    // }
    // return parseInt(rev);

    
    return parseInt(rev) * Math.sign(n);
}

module.exports = reverseInt;
