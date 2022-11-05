const solution = (my_string : string) => {
  let answer = '';
  const stringArray = Array.from(my_string);
  const setArray = new Set(stringArray);
  
  answer = [...setArray].join('');

  return answer;
}

export default solution;