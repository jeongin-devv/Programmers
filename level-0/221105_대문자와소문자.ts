const solution = (my_string : string) => {
  let answer = '';
  let array = Array.from(my_string);
  
  array = array.map((word) => {
      return word === word.toUpperCase()
       ? word.toLowerCase()
       : word.toUpperCase();
  })
  
  answer = array.join('');
  
  return answer;
}

export default solution;