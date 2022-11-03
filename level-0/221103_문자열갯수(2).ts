const solution = (my_string: String) => {
  let answer = '';
  const stringArray = Array.from(my_string).map((string) => {
      return string.toLowerCase();
  });
  
  answer = stringArray.sort().join('');
  
  return answer;
}

export default solution;