const solution = (sides : number[]) => {
  let answer = 0;
  const sortArray = sides.sort();
  if(sortArray[2] < sortArray[1] + sortArray[0]){
      answer = 1;
  }else{
      answer = 2;
  }
  return answer;
}

export default solution;