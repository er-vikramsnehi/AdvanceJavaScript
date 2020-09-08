// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {


    // // Method 1 
    //  const arr=str.split('');
    //  arr.reverse();
    //  return arr.join('');
    
    // Method 1
    // return str.split('').reverse().join('');


    //Method 2
    // let reverse='';
   
    // for( let chr of str)
    // {
    //     reverse= chr+reverse;
    // }
    // return reverse;

     
    //Method 3
    debugger;
    return str.split('').reduce((rev,char) => char + rev ,'');


}

reverse('xxtr');

module.exports = reverse;
