const solution = (common : number[]) => {
  let answer = 0;
  
  const first : number = common[1]-common[0];
  const second : number = common[2]-common[1];
  const lastNumber : number = common.length - 1;
  
  if(first===second){
      answer = common[lastNumber]+first;
  }else{
      answer = common[lastNumber]*(common[lastNumber]/common[lastNumber-1]);
  }
  
  return answer;
}

export default solution;