
function decompress(s){
  // returns tuple [accumulator, index of closing parenthesis]
  function f(i){
    let accum = '',
        mult = '',
        curr = '';
    // accumulate all parenthetical groups in this level  
    while (i !== s.length){
      // closing parenthesis
      if (s[i] === ')'){
        // add the last decompression
        if (curr !== ''){
          accum += customReplicate(curr,mult);
        }
        // exit this call
        return [accum,i];
      }
      // character is a digit
      if (!isNaN(parseInt(s[i]))){
        // add previous decompression
        if (curr !== ''){
          accum += customReplicate(curr,mult);
          curr = '';
          mult = s[i];  
        } else {
          mult += s[i];
        }
        i++;
      // character is a character
      } else if (s[i] !== '('){
        curr += s[i];
        i++; 
      // parenthetical group 
      } else if (s[i] === '('){
        // recursive call
        [tempAccum,index] = f(i + 1);
        accum += customReplicate(tempAccum,mult);
        mult = '';
        i = index + 1;
      }
    }
    return accum + customReplicate(curr,mult);
  }
  // initialize the recursion
  return f(0);
}
function customReplicate(str,times){
  return new Array(times === '' ? 2 : parseInt(times))
                 .fill(str).join('');
}
let example = 'a1b1c1d1e1';
let g2j2 = 'g2j2';

console.log(example);
console.log(decompress(example));
console.log(g2j2);
console.log(decompress(g2j2))
console.log(decompress('g2se'));
