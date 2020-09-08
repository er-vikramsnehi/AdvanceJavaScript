// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
   
    var charmap={};
    let max=0;
    let maxchar='';

    for( let char of str)
    {
        if(charmap[char])
        {
            charmap[char]++;
        }
        else
        {
        charmap[char]=1;
        }
    }



    for(let char in charmap)
    {
        if(charmap[char]>max)
        {
            max=charmap[char];
            maxchar=char;
        }
    }

    return maxchar;
}

module.exports = maxChar;
