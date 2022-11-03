const solution = (my_string : string, num1 : number, num2 : number) => {
  let answer = '';
  let temp = '';
  let array = Array.from(my_string);
  
  temp = array[num1];
  array[num1] = array[num2];
  array[num2] = temp;
  
  answer = array.join('');
  
  return answer;
}

export default solution;